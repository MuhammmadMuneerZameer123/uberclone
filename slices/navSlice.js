import {createSlice} from '@reduxjs/toolkit';

const initialState={
    origin:null,
    destination:null,
    travelTimeInformation:null,

}
export  const navSlice =createSlice ({
    name:'nav',
 initialState,
 reducer:{
    setOrigin:(state,action)=>{
        state.origin=action.payload;

    },
    destination:(state,action)=>{
        state.origin=action.payload;

    },
    travelTimeInformation:(state,action)=>{
        state.origin=action.payload;

    }
}

})
export const {setOrigin,destination,travelTimeInformation}=navSlice.actions;
export const selectOrigin=(state)=>{
    state.nav.origin;
}
export const selectdestination=(state)=>{
    state.nav.destination;
}
export const selecttravelTimeInformation =(state)=>{
    state.nav.travelTimeInformation;
}
export default navSlice.reducer;