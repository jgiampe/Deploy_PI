import axios from "axios";

// export const GET_RECIPES_BY_NAME = 'GET_RECIPES_BY_NAME';
// export const GET_RECIPE_BY_ID = 'GET_RECIPE_BY_ID';
// export const CREATE_RECIPE = 'CREATE_RECIPE';
// export const GET_DIETS = 'GET_DIETS';
// export const FILTER = 'FILTER';
// export const ORDER = 'ORDER';
// export const AUTHENTICATE = 'AUTHENTICATE';
// export const LOGOUT = 'LOGOUT';


//ACTIONS
import { getRecByName, getRecById, getAllDiets, filterFood, orderFood, userLogin, userLogout, createNewRecipe} from './slices.js';

export const getRecipesByName = (name) => {
    return async (dispatch) => {
        try {
            let recipes 
            if(name)
                recipes = (await axios.get(`/recipes?name=${name}`)).data;
            else
                recipes = (await axios.get(`/recipes`)).data;


            return dispatch(getRecByName(recipes)) 
        } catch (error) {
            console.log(error)
        }   
    }
}

export const getRecipeById = (id) => {
    return async (dispatch) => {
        console.log(id)
        try {
            console.log('no hay error')
            const recipe = (await axios.get(`/recipes/${id}`)).data;
            console.log(recipe.diets)
            return dispatch (getRecById(recipe)) 
        } catch (error) {
            console.log('Hay un error')
            console.log(error)
            return dispatch (getRecById({error:'The recipe does not exist'}))
        }   
    }
}

export const createRecipe = (data) => {
    return async (dispatch) => {
        try {
            let result = await axios.post(`/recipes`,data)
            if(typeof result === 'string')
                window.alert('An error ocurred')
            else
            {    
                window.alert('Recipe created successfully')
            }
            return dispatch (createNewRecipe()) 
        } catch (error) {
            // console.log(error)
            window.alert('An error ocurred')
        }   
    }
}

export const getDiets = () => {
    return async (dispatch) => {
        try {
            let diets = (await axios.get(`/diets`)).data
                //Coloco en mayuscula la primer letra y cada letra luego de un espacio
                .map(el=> 
                    el.split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')
                )
            return dispatch (getAllDiets(diets)) 
        } catch (error) {
            console.log(error)
            window.alert('Hubo un error: Ver en consola')
        }   
    }
}

export const order = (prop) => orderFood(prop)

export const filter = (prop) => filterFood(prop)

export const authenticate = (data) => userLogin(data)

export const logout = () => userLogout()