import type { CharacterData } from "../types/CharacterData"

interface CharacterSelectorProp {
    Characters: CharacterData;
}



export const CharacterSelector = ({Characters}: CharacterSelectorProp) => {


    return(
        <ul className=" size-15">
            <button className="hover:cursor-pointer hover:border-3 border-transparent hover:border-green-700">
                <img src={Characters.img} alt="Resonator Image" className={` ${Characters.obtained === false ? "grayscale" : ""}`}/>  
            </button>
            
        </ul>
    )
}
