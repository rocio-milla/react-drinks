import React, { useContext, useState } from 'react';
import { CategoryContext } from '../context/CategoryContext';
import { RecipesContext } from '../context/RecipesContext';

const Form = () => {

    const [search, saveSearch] = useState({
        name: '',
        category: ''
    });
    //You can consume the context like this, destructuring the variables in the value prop from {Name}Context.Provider
    //const {myValue, setValue} = useContext(CategoryContext);
    const { categories } = useContext(CategoryContext);
    const { searchRecipes, saveConsult } = useContext(RecipesContext);

    const obtainRecipeData = (e) => {
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="col-12"
            onSubmit={e => {
                e.preventDefault();
                searchRecipes(search);
                saveConsult(true);
            }}>
            <fieldset className="text-center">
                <legend>Search by category or ingredient</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input name="name" className="form-control"
                        type="text" placeholder="Search by ingredient"
                        onChange={obtainRecipeData} />
                </div>
                <div className="col-md-4">
                    <select className="form-control" name="category"
                        onChange={obtainRecipeData}>
                        <option value="">Select category</option>
                        {categories.map(c => (
                            <option key={c.strCategory} value={c.strCategory}>
                                {c.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input type="submit" className="btn btn-block btn-primary"
                        value="Search drink" />
                </div>
            </div>
        </form>
    )
}

export default Form;