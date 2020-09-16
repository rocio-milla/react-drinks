import Axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const ModalContext = createContext();

const ModalProvider = (props) => {
    const [recipeID, saveRecipeID] = useState(null);
    const [recipeInfo, saveRecipe] = useState({});

    useEffect(() => {
        const obtainRecipe = async () => {
            if (!recipeID)
                return

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeID}`;

            const result = await Axios.get(url);

            saveRecipe(result.data.drinks[0]);
        }

        obtainRecipe();

    }, [recipeID])

    return (
        <ModalContext.Provider
            value={{ recipeInfo, saveRecipeID, saveRecipe }}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;