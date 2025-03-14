import { useState ,useEffect } from "react";

const Food = () => {
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
                const data = await response.json();
                const foods = await data.meals;
            
                console.log(data.meals)
                setFoodList(foods)                
            }
            catch(error){
                console.error(error.message);
            }
        }
    },[])

    const CardItems = ({title, imgSrc, }) =>{
        return(
            <>
            <div className="cardItem">
                <img src={imgSrc} alt={title}/>
                <h4>{title}</h4>
            </div>
            </>
        )
    }
    
    return(
        <>
        <div>
            
        </div>
        </>
    )
}

export default Food