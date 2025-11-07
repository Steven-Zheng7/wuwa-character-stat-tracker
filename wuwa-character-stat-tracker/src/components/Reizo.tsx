
import { ReizoData } from "../data/ReizoData"
import { CharacterSelector } from "./CharacterSelector"

export const Reizo = () => {
    return (
        <div className="flex flex-col items-center bg-[ulr(/full-art/Chixia.webp)]">
            <h1 className="font-bold text-4xl">Reizo</h1>
            <div className="bg-[url(/public/full-art/chixia.webp)] bg-cover h-130 w-100">
                <p>Attack: </p>
            </div>
            <div className="flex">
                {ReizoData.map((data) => (
                <CharacterSelector Characters={data}/>
            ))}
            </div>
            
        </div>
    )
}