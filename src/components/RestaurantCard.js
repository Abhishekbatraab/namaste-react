import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const { resData } = props;
    const {
        name, 
        cuisines, 
        avgRating,
        costForTwo,
        deliveryTime,
        id
    } = resData;
    // console.log(name);
    return (
        <div key={id} className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
            <img 
                className="res-logo"
                alt="res-logo"
                src={CDN_URL+(resData && resData.cloudinaryImageId)} 
            />
            <h3>{name}</h3>
            <p className="cuisines">{cuisines.join(',')}</p>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard