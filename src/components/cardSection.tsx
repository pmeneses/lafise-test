import { useAppSelector } from '@/store/hooks';
import CardItem from './cardItem';

const CardSection = () => {
  const { cards, name } = useAppSelector((state) => state.user);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="headline2 font-semibold text-label">Mis tarjetas</h2>
      <div className="flex gap-6 flex-wrap">
        {cards.map((card, index) => (
          <CardItem
            name={name}
            key={index}
            type={card.type}
            accountMask={card.accountMask}
            expirationDate={card.expirationDate}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
