import { SpeedrivalData } from "../data/SpeedrivalData"
import { CharacterSelector } from "./CharacterSelector"

export const Speedrival = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl">Speedrival</h1>
            <div className="bg-[url(/public/full-art/chixia.webp)] bg-cover h-130 w-100">
                <p>Attack: </p>
            </div>
            <div className="flex">
                {SpeedrivalData.map((data) => (
                <CharacterSelector Characters={data}/>
            ))}
            </div>
    
        </div>
    )
}