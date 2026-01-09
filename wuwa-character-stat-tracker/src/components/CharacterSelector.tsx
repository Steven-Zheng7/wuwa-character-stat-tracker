import type { CharacterData } from "../types/CharacterData"


interface CharacterSelectorProp {
    Characters: CharacterData;
    onSelect: () => void;
}



export const CharacterSelector = ({Characters, onSelect}: CharacterSelectorProp) => {

    return(
        <ul className=" size-15">
            <button onClick={onSelect} className="hover:cursor-pointer hover:border-3 border-transparent hover:border-green-700">
                <img src={Characters.img} alt="Resonator Image" className={` ${Characters.obtained === false ? "grayscale" : ""}`}/>  
            </button>
            
        </ul>
    )
}
