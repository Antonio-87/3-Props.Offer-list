import './App.css';
import Listing, { OfferItem } from './components/Listing';
import OFFER_ITEMS from './assets/data';

function App() {
    console.log(OFFER_ITEMS);
    return (
        <>
            <Listing offers={OFFER_ITEMS as OfferItem[]} />
        </>
    );
}

export default App;
