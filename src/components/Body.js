import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
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
        console.log(json);
        const { restaurants }= json.data.cards[1].card.card.gridElements.infoWithStyle;
        console.log(restaurants);
        setListOfRestaurants(restaurants); 
        setFilteredRestaurants(restaurants);
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
                        console.log(searchText);
                        console.log(listOfRestaurants);
                        const filteredRestaurants = listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        console.log(filteredRestaurants);
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
                    return <RestaurantCard key={data.id} resData={data}/>
                }):null}
            </div>
        </div>
    )
}

export default Body