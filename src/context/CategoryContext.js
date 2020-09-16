import React, { createContext, useState } from 'react';

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
    return (
        <CategoryContext.Provider>
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;