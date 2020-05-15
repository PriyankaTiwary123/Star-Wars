import React , {createContext} from 'react';
export const StarWarContext=createContext();
 export const StarWarsContextProvider = (props)=>{
 
    const [selectedSpeciesObj, setSelectedSpeciesObj] = React.useState();

    return (
    <StarWarContext.Provider value={[selectedSpeciesObj, setSelectedSpeciesObj]}>
    {props.children}
    </StarWarContext.Provider>
    )
 };
 
