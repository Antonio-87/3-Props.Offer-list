import { FC } from 'react';

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
    console.log(offers);
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
                        <p className="item-title">{offer.title}</p>
                        <p className="item-price">${offer.price}</p>
                        <p className="item-quantity level-medium">
                            {offer.quantity}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Listing;
