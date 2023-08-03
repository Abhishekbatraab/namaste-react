import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);
    const { resId  } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(!resInfo) return <Shimmer />
    console.log(resInfo);
    
    const { name, cuisines, costForTwoMessage } = resInfo && resInfo.cards[0].card.card.info;

    const { itemCards } = resInfo && resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    console.log(itemCards);

    return (<div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
            {itemCards && itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
        </ul>
    </div>)
}

export default RestaurantMenu