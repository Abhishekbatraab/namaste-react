import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {

    //State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    console.log("body rendered");
    //this will be called after your component renders
    useEffect(()=>{
        //fetch the data
        fetchData();
    }, []);

    /**
     * function executed to get the data from server
     */
    const fetchData = async () => {
        const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7152998&lng=77.1095031&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const data = await fetch(API);
        const json = await data.json();
        const restaurantCards = findRestaurantCards(json);
        console.log("Listed Restaurants ", restaurantCards);
        setListOfRestaurants(restaurantCards); 
        setFilteredRestaurants(restaurantCards);
    }

    /**
     * function executed to return cards with restaurants
     * @param {*} json 
     * @returns 
     */
    const findRestaurantCards = (json) => {
        console.log(json);
        let cards = json.data.cards;
        const cardWithRestaurants = cards.filter((item, index) => {
            let card = item.card;
            let finalCard = card.card;
            if(finalCard.gridElements){
                let infoWithStyle = finalCard.gridElements.infoWithStyle;
                if(infoWithStyle.hasOwnProperty("restaurants")){
                    return finalCard;
                }
            }
        })[0];
        const restaurants = cardWithRestaurants.card.card.gridElements.infoWithStyle.restaurants
        return restaurants
    }

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus){
        return (<h1>
            Looks like you're offline!! please check your internet connection.
        </h1>)
    }

    //conditional rendering
    return listOfRestaurants.length === 0 ? <Shimmer /> :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" 
                        value={searchText} 
                        onChange={(e)=>{setSearchText(e.target.value)}}
                    />
                    <button onClick={()=>{
                        const filteredRestaurants = listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>
                <button 
                    className="filter-btn"
                    onClick={()=>{
                        const filteredList = listOfRestaurants.filter(res=>res.info.avgRating>4);
                        setFilteredRestaurants(filteredList);
                    }} 
                >Top Rate Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurants? filteredRestaurants.map(restaurant=> {
                    const data = restaurant?.info;
                    return <Link to={"/restaurants/"+data.id} key={data.id}><RestaurantCard resData={data}/></Link>
                }):null}
            </div>
        </div>
    )
}

export default Body