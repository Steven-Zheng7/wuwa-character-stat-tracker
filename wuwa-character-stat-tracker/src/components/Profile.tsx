import type { CharacterData } from "../types/CharacterData";
import { CharacterSelector } from "./CharacterSelector"
import { useState } from "react";
import { placeHolder } from "../data/Placeholder";

interface PlayerDataProp {
    Data: CharacterData[];
}


export const Profile = ({Data}: PlayerDataProp) => {
    const [selected, setSelected] = useState(placeHolder[0]);
    return (
        <div className="flex flex-col items-center">
            <div className=" bg-cover h-130 w-100 overflow-hidden " style={{backgroundImage: `url(${selected.fullArt})`}}>
                <div className="pt-20 pl-3 font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                </div>
            </div>
            <div className="grid grid-cols-3 text-white bg-black w-full">
                    <p>ATK: {selected.attack}</p>
                    <p>DEF: {selected.def}</p>
                    <p>HP:  {selected.hp}</p>
                    <p>ER:  {selected.energyRegen}%</p>
                    <p>CRT: {selected.critRate}%</p>
                    <p>CDMG: {selected.critDmg}%</p>
                    <p>SET EFFECT: {selected.echoes}</p>
                    <p>SEQUENCE: {selected.sequence}</p>
                    <p>ATTRIBUTE: {selected.attribute}</p>
            </div>
            <div className="grid grid-cols-6 gap-2 bg-black">
                {Data.map((data) => (
                <CharacterSelector 
                key={data.img} 
                Characters={data} 
                onSelect={() => setSelected(data)}
                />
            ))}
            </div>
            
        </div>        
    )
}