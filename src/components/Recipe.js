import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: 'scroll',
        height: '100%',
        maxHeight: 500,
        display: 'block'
    },
}));


const Recipe = ({ recipe }) => {
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const { recipeInfo, saveRecipeID, saveRecipe } = useContext(ModalContext);

    //showIngredients was made this way because of how the API works.
    const showIngredients = (info) => {
        let ingredients = [];
        for (let i = 1; i < 16; i++) {
            if (info[`strIngredient${i}`]) {
                ingredients.push(
                    <li>
                        {info[`strIngredient${i}`]} {info[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredients;
    }
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>
                <img className="card-img-top" src={recipe.strDrinkThumb} alt={`${recipe.strDrink} recipe`} />
                <div className="card-body">
                    <button type="button" className="btn btn-block btn-primary"
                        onClick={() => {
                            saveRecipeID(recipe.idDrink)
                            handleOpen();
                        }}>
                        Read recipe
                    </button>

                    <Modal open={open}
                        onClose={() => {
                            handleClose();
                            saveRecipe({});
                            saveRecipeID(null);
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recipeInfo.strDrink} </h2>
                            <h3>Ingredients</h3>
                            <ul>
                                {showIngredients(recipeInfo)}
                            </ul>
                            <h3 className="mt-4">Instructions</h3>
                            <p>
                                {recipeInfo.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={recipeInfo.strDrinkThumb} />

                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Recipe;