import { ZealthData } from "../data/ZealthData"
import { CharacterSelector } from "./CharacterSelector"

export const Zealth = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl">Zealth</h1>
            <div className="bg-[url(/public/full-art/chixia.webp)] bg-cover h-130 w-100">
                <div className="pt-20 pl-3 font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                    <p>ATK: {ZealthData[0].attack}</p>
                    <p>DEF: {ZealthData[0].def}</p>
                    <p>HP:  {ZealthData[0].hp}</p>
                    <p>ER:  {ZealthData[0].energyRegen}%</p>
                    <p>CRT: {ZealthData[0].critRate}%</p>
                    <p>CDMG: {ZealthData[0].critDmg}%</p>
                </div>
               
            </div>
            <div className="flex">
                {ZealthData.map((data) => (
                <CharacterSelector Characters={data}/>
            ))}
            </div>
            
        </div>
    )
}