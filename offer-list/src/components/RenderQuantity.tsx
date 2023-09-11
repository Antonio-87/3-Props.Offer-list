import { FC } from 'react';

type RenderQuantityProps = {
    quantity: number;
};

const RenderQuantity: FC<RenderQuantityProps> = ({ quantity }) => {
    return (
        <p
            className={`item-quantity ${
                quantity <= 10
                    ? 'level-low'
                    : quantity <= 20
                    ? 'level-medium'
                    : 'level-high'
            }`}
        >
            {quantity} left
        </p>
    );
};

export default RenderQuantity;
