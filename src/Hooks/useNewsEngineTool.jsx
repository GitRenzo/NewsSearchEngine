import { useContext } from "react"
import NewsContext from "../Context/NewsProvider"

function useNewsEngineTool() {
    return (
        useContext(NewsContext)
    )
}

export default useNewsEngineTool