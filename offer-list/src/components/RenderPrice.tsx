import { FC } from 'react';

type RenderPriceProps = {
    currency_code: string;
    price: string;
};

const RenderPrice: FC<RenderPriceProps> = ({ currency_code, price }) => {
    return (
        <p className="item-price">
            {currency_code === 'USD'
                ? '$' + ' ' + price
                : currency_code === 'USD'
                ? '€' + ' ' + price
                : currency_code + ' ' + price}
        </p>
    );
};

export default RenderPrice;
