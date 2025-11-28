import type { CharacterData } from "../types/CharacterData";
import { CharacterSelector } from "./CharacterSelector"

interface PlayerDataProp {
    Data: CharacterData[];
}


export const Profile = ({Data}: PlayerDataProp) => {
    return (
        <div className="flex flex-col items-center">
            <div className=" bg-cover h-130 w-100 overflow-hidden " style={{backgroundImage: `url(${Data[0].fullArt})`}}>
                <div className="pt-20 pl-3 font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                </div>
            </div>
            <div className="grid grid-cols-3 text-white bg-black w-full">
                    <p>ATK: {Data[0].attack}</p>
                    <p>DEF: {Data[0].def}</p>
                    <p>HP:  {Data[0].hp}</p>
                    <p>ER:  {Data[0].energyRegen}%</p>
                    <p>CRT: {Data[0].critRate}%</p>
                    <p>CDMG: {Data[0].critDmg}%</p>
            </div>
            <div className="flex">
                {Data.map((data) => (
                <CharacterSelector Characters={data}/>
            ))}
            </div>
            
        </div>        
    )
}