import { useState ,useEffect } from "react";

const Food = () => {
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
                const data = await response.json();
            
                setFoodList(data)                
            }
            catch(error){
                console.error(error.message);
            }
        }

        fetchData();
    },[])

    console.log(foodList.meals)
}

export default Food