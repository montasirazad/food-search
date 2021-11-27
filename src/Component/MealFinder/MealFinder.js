import React from 'react';
import { useEffect, useState } from 'react';
// import Button from '@mui/material/Button';


const MealFinder = () => {
    const [search, setSearch] = useState('')
    const [meals , setMeals] = useState([])
    const handleChange = (event) => {
        setSearch(event.target.value)
    }
    useEffect(()=>{
    const url1 =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url1)
    .then(res => res.json())
    .then(data => setMeals(data.meals))
   
    },[search]);

   
    return (
        <div>
            <h1>Search the food</h1>
            <input onChange={handleChange} style={{ margin: '10px', height: '23px', width: '250px' }} type="text" placeholder='Enter food name' />
            <p>Searching for {search}</p>
            <p>Search result found : {meals?.length || 0 }  </p>
            {/* <Button variant="outlined" size="small">SEARCH</Button> */}
            {
                meals?.map(meal => <div key={meal.idMeal} ><img style={{height:'100px'}} src={meal.strMealThumb} alt="" /> <br /> {meal.strMeal}  </div>)
            }
        </div>
    );
};

export default MealFinder;