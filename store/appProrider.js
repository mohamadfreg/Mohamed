import { useState } from "react";
import AppCoatext from "./appconttext";

const AppProvider=props=>{

const [Cart, setCart] = useState([]);
return (
    <AppCoatext.Provider
        value={{Cart , setCart}}>
        {props.children}
    </AppCoatext.Provider>
)}
export default AppProvider