import { useState, createContext } from "react";

export const Mycontext = createContext();

function ContextProvider({children}){
    let [activeclass, setActiveclass] = useState({
        home:true,
        about:false,
        skills:false,
        projects:false,
        contact:false
    })

    return (
        <Mycontext.Provider value={{activeclass, setActiveclass}}>
            {children}
        </Mycontext.Provider>
    )
}

export default ContextProvider;