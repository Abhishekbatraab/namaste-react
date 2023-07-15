import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { resList } from "../utils/mokeData";
const Body = () => {

    //State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    
    // { 
    //     "data": {
    //         "id": "336272",
    //         "name": "Punjabi Angithi",
    //         "cloudinaryImageId": "wynnlcwjqfltykkbuudv",
    //         "cuisines": [
    //             "North Indian",
    //             "Chinese",
    //             "Punjabi",
    //             "Kebabs",
    //             "Tandoor"
    //         ],
    //         "costForTwo": "₹400 FOR TWO",
    //         "deliveryTime": 17,
    //         "avgRating": "4.1",
    //     }
    // },
    // {
    //     "data": {
    //         "id": "253773",
    //         "name": "McDonald's",
    //         "cloudinaryImageId": "08eee882fda81b68e5c36e3a5d89d8c0",
    //         "cuisines": [
    //           "American"
    //         ],
    //         "costForTwo": "₹400 FOR TWO",
    //         "deliveryTime": 27,
    //         "avgRating": "3.8",
    //     }
    // },
    // {
    //     "data": {
    //         "id": "253774",
    //         "name": "KFC",
    //         "cloudinaryImageId": "08eee882fda81b68e5c36e3a5d89d8c0",
    //         "cuisines": [
    //           "American"
    //         ],
    //         "costForTwo": "₹400 FOR TWO",
    //         "deliveryTime": 27,
    //         "avgRating": "4.2",
    //     }
    // }
    
    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={()=>{
                        const filteredList = listOfRestaurants.filter(res=>res.data.data.avgRating>4);
                        setListOfRestaurants(filteredList);
                    }} 
                >Top Rate Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map(restaurant=> {
                    console.log(restaurant);
                    const { data } = restaurant?.data;
                    console.log(data);
                    return <RestaurantCard key={data.id} resData={data}/>
                })}
            </div>
        </div>
    )
}

export default Body