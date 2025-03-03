import { useState ,useEffect } from "react";

const Food = () => {
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https:/www.themealdb.com/api/json/v1/1/random.php');
                const data = await response.json();
                const foods = await data.meals;
            
                console.log(data.meals)
                setFoodList(foods)                
            }
            catch(error){
                console.error(error.message);
            }
        }

        fetchData();
    },[])

    console.log(foodList[0])
}

export default Food