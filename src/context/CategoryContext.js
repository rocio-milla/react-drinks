import Axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

//Create context
export const CategoryContext = createContext();

//Provider, this has functions and the state
const CategoryProvider = (props) => {

    //in there, you can do this if you need it.
    //const [myState, setMyState] = useState(true);

    //in the return,
    /**
     *  <CategoryContext.Provider
        value={{
            myState, setMyState
        }}>
        this is jut an example.
        You can do what you want here and 
        "export" the variables in value prop for xContext.Provider
     */

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const obtainCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categories = await Axios.get(url);

            setCategories(categories.data.drinks);
        }
        obtainCategories();
    }, [])

    return (
        <CategoryContext.Provider
        value={{
            categories
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;