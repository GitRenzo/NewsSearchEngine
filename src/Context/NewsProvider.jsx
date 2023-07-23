import { createContext, useState, useEffect } from "react";
// Axios
import axios from "axios"
const NewsContext = createContext()

const NewsProvider = ({ children }) => {

    const [selectedValue, setSelectedValue] = useState("general")
    const [news, setNews] = useState([])
    useEffect(() => {
        const getApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedValue}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNews(data.articles)
        }
        getApi()
    }, [selectedValue])


    const handleSelectChange = (event) => (setSelectedValue(event.target.value))

    return (
        <NewsContext.Provider
            value={{
                selectedValue,
                setSelectedValue,
                handleSelectChange,
                news,
            }}
        >

            {children}

        </NewsContext.Provider>
    )
}



export {
    NewsProvider
}

export default NewsContext
