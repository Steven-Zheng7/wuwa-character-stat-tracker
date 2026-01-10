
import  ReizoData from "../data/ReizoData.json"
import { Profile } from "./Profile"
import type { CharacterData } from "../types/CharacterData";

const myCharacter = ReizoData as CharacterData[];
export const Reizo = () => {
    return (
        <div className="flex flex-col items-center bg-[ulr(/full-art/Chixia.webp)]">
            <h1 className="font-bold text-4xl text-white bg-black w-full text-center">Reizo</h1>
            <Profile Data={myCharacter}/>         
        </div>
    )
}