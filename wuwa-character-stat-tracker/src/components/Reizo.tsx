
import { ReizoData } from "../data/ReizoData"
import { CharacterSelector } from "./CharacterSelector"

export const Reizo = () => {
    return (
        <div className="justify-center">
            <h1 className="font-bold text-4xl">Reizo</h1>
            <div className="flex">
                {ReizoData.map((data) => (
                <CharacterSelector Characters={data}/>
            ))}
            </div>
            
        </div>
    )
}