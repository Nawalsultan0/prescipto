import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

///create context//////
export const AppContext = createContext();


///provide create context function/////
const AppContextProvider =(props)=>{

 const currency = '$'

    const value ={
        doctors, currency
    }

   return(
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
   )

}

export default AppContextProvider


