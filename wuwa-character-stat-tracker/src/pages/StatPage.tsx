import { Reizo } from "../components/Reizo"
import { Speedrival } from "../components/Speedrival"
import { Zealth } from "../components/Zealth"

export const StatPage = () => {
    return (
        <div className="flex flex-wrap justify-center gap-20">
        <Zealth/>
        <Reizo/>
        <Speedrival/>
        </div>
    )
}