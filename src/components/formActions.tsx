import { cn } from '@/util/clsx';

type Props = {
  backLabel: string;
  continueLabel: string;
  className?: string;
  onBack: () => void;
  onContinue: () => void;
};
const FormActions = (props: Props) => {
  return (
    <div className={cn('flex items-center justify-center gap-5', props.className)}>
      <button
        className="h-12 border-[#00593B] border px-4 rounded-sm text-[#00593B] caption1 font-medium"
        onClick={props.onBack}
      >
        {props.backLabel}
      </button>
      <button
        className="h-12 bg-[#00593B] px-4 rounded-sm text-[#FFFFFF] caption1 font-medium"
        onClick={props.onContinue}
      >
        {props.continueLabel}
      </button>
    </div>
  );
};

export default FormActions;
