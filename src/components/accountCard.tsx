import { Currency, formatCurrency } from '@/util/currency';
import Icon from './icon';

type Props = {
  id: string;
  alias: string;
  currency: string;
  balance: number;
};

const AccountCard = (props: Props) => {
  return (
    <div className="flex flex-col bg-[#FFFFFF] shadow-[0px_2px_15px_0px_#6868681C] rounded-[4px] p-4 relative gap-10 min-w-[355px]">
      <div className="flex flex-col gap-2">
        <h4 className="headline2 font-semibold text-label w-[85%]">{`${props.currency} ${props.alias}`}</h4>
        <div className="flex gap-2 items-center">
          <p className="py-2 px-3 rounded-sm bg-[#EDF5F2] self-start caption1 font-medium text-[#3B8668]">
            {props.id}
          </p>
          <button
            onClick={() => {
              navigator.clipboard.writeText(props.id);
              alert('Número de cuenta copiado al portapapeles');
            }}
          >
            <Icon variant="copyIcon" style="cursor-pointer" />
          </button>
        </div>
      </div>
      <p className="headline2 font-semibold">
        {formatCurrency(props.balance, props.currency as any)}
      </p>
      {props.currency === Currency.NIO && (
        <Icon variant="nioFlagIcon" style="absolute top-4 right-4" />
      )}
      {props.currency === Currency.USD && (
        <Icon variant="usaFlagIcon" style="absolute top-4 right-4" />
      )}
    </div>
  );
};

export default AccountCard;
