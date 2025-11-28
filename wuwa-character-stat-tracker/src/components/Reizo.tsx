
import { ReizoData } from "../data/ReizoData"
import { CharacterSelector } from "./CharacterSelector"
import { Profile } from "./Profile"

export const Reizo = () => {
    return (
        <div className="flex flex-col items-center bg-[ulr(/full-art/Chixia.webp)]">
            <h1 className="font-bold text-4xl text-white bg-black w-full text-center">Reizo</h1>
            <Profile Data={ReizoData}/>         
        </div>
    )
}