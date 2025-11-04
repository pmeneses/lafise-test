import { cn } from '@/util/clsx';
import Icon from './icon';

type Props = {
  totalSteps: number;
  currentStep: number;
  stepsLabels: string[];
};

const Stepper = ({ totalSteps, currentStep, stepsLabels }: Props) => {
  return (
    <div className="flex items-center justify-center">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center min-w-5 md:min-w-[140px] text-center relative"
        >
          <div className="relative flex items-center justify-center w-full h-[50px]">
            <Icon
              variant={index < currentStep - 1 ? 'stepCheck' : 'stepUncheck'}
              size={index < currentStep - 1 ? 25 : 40}
              style={cn({
                'mt-2': index === currentStep - 1,
              })}
            />
            {index < totalSteps - 1 && (
              <div
                className="absolute left-1/2 top-1/2 w-[85%] h-0.5 bg-[#3B8668]"
                style={{
                  transform: 'translateX(10%) translateY(-50%)',
                }}
              />
            )}
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="caption2 text-[#AFAFAF]">{`Paso ${index + 1}`}</p>
            <p className="caption1 font-medium text-label">{stepsLabels[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
