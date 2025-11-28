import { ZealthData } from "../data/ZealthData"
import { Profile } from "./Profile"

export const Zealth = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl text-white bg-black w-full text-center">Zealth</h1>
            <Profile Data={ZealthData}/>    
        </div>
    )
}