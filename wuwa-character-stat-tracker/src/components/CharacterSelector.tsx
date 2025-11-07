import type { CharacterData } from "../types/CharacterData"

interface CharacterSelectorProp {
    Characters: CharacterData;
}



export const CharacterSelector = ({Characters}: CharacterSelectorProp) => {


    return(
        <ul className=" size-15">
            <img src={Characters.img} alt="Resonator Image" className={Characters.obtained === false ? "grayscale" : ""}/>
        </ul>
    )
}