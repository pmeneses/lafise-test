import {
  Select as BaseSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type props = {
    value?:string;
    placeholder?: string;
    options?: { value: string; label: string }[];
    className?: string;
    onSelect?: (value: string) => void;
}

const Select = ({ value, placeholder, options = [], className, onSelect }: props) => {
  return (
    <BaseSelect onValueChange={onSelect} value={value}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      {options.length > 0 && (
        <SelectContent>
            <SelectGroup>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        <SelectLabel>{option.label}</SelectLabel>
                    </SelectItem>
                ))}
            </SelectGroup>
        </SelectContent>
      )}
    </BaseSelect>
  )
}

export default Select;