import { ZealthData } from "../data/ZealthData"
import { CharacterSelector } from "./CharacterSelector"

export const Zealth = () => {
    return (
        <div className="justify-center">
            <h1 className="font-bold text-4xl">Zealth</h1>
            <div className="flex">
                {ZealthData.map((data) => (
                <CharacterSelector Characters={data}/>
            ))}
            </div>
            
        </div>
    )
}