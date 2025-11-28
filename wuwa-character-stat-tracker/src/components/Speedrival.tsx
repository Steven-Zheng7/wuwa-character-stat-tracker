import { SpeedrivalData } from "../data/SpeedrivalData"
import { Profile } from "./Profile"

export const Speedrival = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl text-white bg-black w-full text-center">Speedrival</h1>
            <Profile Data={SpeedrivalData}/>       
        </div>
    )
}