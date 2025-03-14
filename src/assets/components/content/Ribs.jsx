import { useState ,useEffect } from "react";
import contentCss from '/src/assets/css/content.module.css';

const Ribs = () => {
    const [foodList, setFoodList] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=ribs');
                const data = await response.json(chicken);
                const foods = await data.meals;
            
                setFoodList(foods)                
            }
            catch(error){
                console.error(error.message);
            }
        }
        fetchData();
    },[])

    const CardItems = ({title, imgSrc, }) =>{
        console.log(title, imgSrc)

        return(
            <>
            <div className="cardItem">
                <img className={contentCss.img} src={imgSrc} alt={title}/>
                <h4>{title}</h4>
            </div>
            </>
        )
    }

    console.log(foodList)
    return(
        <>
        <div>
            <section>
                <h3>Chicken Recipes</h3>
                <div className={contentCss.cards}>
                {foodList.map((foodItem) => {
                    return <CardItems key={foodItem.idMeal} title={foodItem.strMeal} imgSrc={foodItem.strMealThumb}/>
                })}
                </div>
            </section>
        </div>
        </>
    )
}

export default Ribs