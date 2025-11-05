import { SpeedrivalData } from "../data/SpeedrivalData"
import { CharacterSelector } from "./CharacterSelector"

export const Speedrival = () => {
    return (
        <div className="justify-center">
            <h1 className="font-bold text-4xl">Speedrival</h1>
            <div className="flex">
                {SpeedrivalData.map((data) => (
                <CharacterSelector Characters={data}/>
            ))}
            </div>
            
        </div>
    )
}