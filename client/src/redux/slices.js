import { createAction, createSlice } from "@reduxjs/toolkit";

const orderArray = (array, sortBy, direction) => {
    array = array.sort((a,b)=>{
        if(direction==='Ascendent')
            if(a[sortBy]>b[sortBy]) return 1
            else    return -1
        if(direction==='Descendent')
            if(a[sortBy]<b[sortBy]) return 1
            else    return -1 

        else return 0
    })
}


export const foodSlice = createSlice({
    name: 'foods',

    initialState: {
        allRecipes: [],
        filteredRecipes:[],
        diets: [],
        idRecipe:{},
        isAdmin:false
    },

    reducers: {
        getRecByName: (state, action) => {
            state.allRecipes = action.payload;
            state.filteredRecipes = action.payload;
        },
        getRecById: (state, action) => {
            state.idRecipe = action.payload
        },
            
        getAllDiets: (state, action) => {
            state.diets = action.payload
        },
                
        filterFood: (state, action) => {
            let filtered;
            let {filter, sortBy, direction} = action.payload;
            if(filter==='ALL')
                filtered = [...state.allRecipes]
            else
                filtered = [...state.allRecipes].filter(el=>el.diets.includes(filter.toLowerCase()));
            
            orderArray(filtered, sortBy, direction)

            state.filteredRecipes = filtered;
            // return {...state, filteredRecipes: filtered}   
            // eslint-disable-next-line
        },
        orderFood: (state, action) => {
            let {sortBy, direction} = action.payload

            let filtered = [...state.allRecipes]
            orderArray(filtered,sortBy,direction)
            
            state.filteredRecipes = filtered;
                    
            },
        userLogin: (state, action) => {
            let {user, pass} = action.payload;

            if(!(user==='admin' && pass==='admin'))
            {    
                window.alert('Wrong authentication')
            }
            
            state.isAdmin = true
            },

        userLogout: (state, action) => {
            state.isAdmin = false
        },
        // createNewRecipe,
        
    }
})

export default foodSlice.reducer;

export const { 
    getRecByName, 
    getRecById, 
    getAllDiets, 
    filterFood, 
    orderFood,
    userLogin, 
    userLogout,
    createNewRecipe} = foodSlice.actions;