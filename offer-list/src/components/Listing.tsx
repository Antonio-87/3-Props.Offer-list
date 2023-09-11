import { FC } from 'react';
import RenderPrice from './RenderPrice';
import RenderQuantity from './RenderQuantity';

export type OfferItem = {
    listing_id: number;
    url: string;
    MainImage: { url_570xN: string };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
};

type OfferListProps = {
    offers: OfferItem[];
};

const Listing: FC<OfferListProps> = ({ offers }) => {
    return (
        <div className="item-list">
            {offers.map((offer) => (
                <div className="item" key={offer.listing_id}>
                    <div className="item-image">
                        <a href={offer.url}>
                            <img src={offer.MainImage.url_570xN} />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">
                            {offer.title.length > 50
                                ? offer.title.substring(0, 50) + '...'
                                : offer.title}
                        </p>
                        <RenderPrice
                            currency_code={offer.currency_code}
                            price={offer.price}
                        />
                        <RenderQuantity quantity={offer.quantity} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Listing;
