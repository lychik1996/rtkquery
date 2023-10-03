import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const favoriteSlise= createSlice({
    name:'favorite',
    initialState,
    reducers:{
        toggleToFavorite:(state, {payload:recipeItem})=>{
            const isExist = state.some(r=>r.id===recipeItem.id)
            if(isExist){
                const index = state.findIndex(item=>item.id===recipeItem.id);
                if(index!==-1){
                    state.splice(index,1)
                }
            }else{
                state.push(recipeItem)
            }

        }
    }
})
export const {actions, reducer} = favoriteSlise;