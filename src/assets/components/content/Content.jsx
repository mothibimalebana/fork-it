import { useState ,useEffect } from "react";
import contentCss from '/src/assets/css/content.module.css';
import NavBar from "../navbar/NavBar";
import { Outlet } from "react-router-dom";


const Content = () => {
    const [foodList, setFoodList] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken');
                const data = await response.json();
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
            <Outlet/>
        </div>
        </>
    )
}

export default Content