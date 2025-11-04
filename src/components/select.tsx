import {
  Select as BaseSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type props = {
  value?: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  className?: string;
  onSelect?: (value: string) => void;
  label?: string;
  error?: string;
};

const Select = ({ value, placeholder, options = [], className, onSelect, label, error }: props) => {
  return (
    <div className="flex flex-col flex-1 gap-2">
      {label && <p className="body1 font-medium text-label">{label}</p>}
      <BaseSelect onValueChange={onSelect} value={value}>
        <SelectTrigger className={className}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        {options.length > 0 && (
          <SelectContent>
            <SelectGroup>
              {options.map((option) => (
                <SelectItem
                  className="caption1 font-medium"
                  key={option.value}
                  value={option.value}
                >
                  <SelectLabel>{option.label}</SelectLabel>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        )}
      </BaseSelect>
      {error && <p className="caption2 text-red-500">{error}</p>}
    </div>
  );
};

export default Select;
