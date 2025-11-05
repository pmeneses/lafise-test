import { cn } from '@/util/clsx';
import Icon from './icon';

type Props = {
  accountMask: string;
  expirationDate: string;
  type: string;
  name: string;
};
const CardItem = ({ accountMask, expirationDate, type, name }: Props) => {
  return (
    <div
      key={accountMask}
      className={cn('flex flex-col p-6 rounded-[8px] w-full max-w-[340px] gap-10', {
        'bg-[linear-gradient(126.07deg,#00593B_28.93%,#096C4B_91.51%)]': type === 'premium',
        'bg-[linear-gradient(119.56deg,#0B102E_23.9%,#121741_93.45%)]': type === 'basic',
        'bg-[linear-gradient(126.07deg,#1F1F1F_28.93%,#272727_91.51%)]': type === 'classic',
      })}
    >
      <div className="flex flex-col gap-5 items-start">
        <Icon variant="companyLogoWhiteIcon" />
        <p className="tcardNumber font-medium text-[#FFFFFF]">{accountMask}</p>
      </div>
      <div className="flex gap-4 flex-2 items-end">
        <p className="cardText font-medium text-[#FFFFFF]">{name}</p>
        <div className="flex flex-col">
          <p className="cardTextSmall font-medium text-[#FFFFFF]">Expire date</p>
          <p className="cardText font-medium text-[#FFFFFF]">{expirationDate}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
