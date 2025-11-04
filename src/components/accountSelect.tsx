import {
    Select as BaseSelect,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select"

type props = {
    value?: string;
    placeholder?: string;
    options?: { value: string; label: string; accountNumber: string; balance: string }[];
    className?: string;
    onSelect?: (value: string) => void;
    label?: string;
    error?: string;
}

const AccountSelect = ({ value, placeholder, options = [], className, onSelect, label, error }: props) => {
    const selected = options.find((o) => o.value === value);

    return (
        <div className="flex flex-col flex-1 gap-2">
            {label && <p className="body1 font-medium text-label">{label}</p>}
            <BaseSelect onValueChange={onSelect} value={value}>
                <SelectTrigger className={className}>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex gap-2">
                            <span className="caption1 font-medium text-[#3B8668]">{selected ? selected.label : placeholder}</span>
                            {selected?.accountNumber && (
                                <span className="caption1 text-[#8D918D]">{selected.accountNumber}</span>
                            )}
                        </div>
                        {selected?.balance && (
                            <span className="caption1 text-label font-medium">{selected.balance}</span>
                        )}
                    </div>
                </SelectTrigger>
                {options.length > 0 && (
                    <SelectContent>
                        <SelectGroup>
                            {options.map((option) => (
                                <SelectItem className="caption1 font-medium" key={option.value} value={option.value}>
                                    <div className="flex flex-col items-start">
                                        <span className="caption1 font-medium text-[#3B8668]">{option.label}</span>
                                        {option.accountNumber && <span className="caption2 text-muted-foreground">{option.accountNumber}</span>}
                                        {option.balance && <span className="caption2 text-muted-foreground">{option.balance}</span>}
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                )}
            </BaseSelect>
            {error && <p className="caption2 text-red-500">{error}</p>}
        </div>
    )
}

export default AccountSelect;