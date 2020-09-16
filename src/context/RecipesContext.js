import Axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

//Create context
export const RecipesContext = createContext();

//Provider, this has functions and the state
const RecipesProvider = (props) => {

    const [recipes, saveRecipes] = useState([]);
    const [search, searchRecipes] = useState({
        name: '',
        category: ''
    });
    const [consult, saveConsult] = useState(false);

    useEffect(() => {
        if (consult) {
            const obtainRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`;
                const result = await Axios.get(url);

                saveRecipes(result.data.drinks)
            }
            obtainRecipes();
        }
    }, [search])


    return (
        <RecipesContext.Provider
            value={{
                recipes,
                searchRecipes, saveConsult
            }}>
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider;