import { createContext, useState, useEffect } from "react";
// Axios
import axios from "axios"
const NewsContext = createContext()

const NewsProvider = ({ children }) => {

    const [selectedValue, setSelectedValue] = useState("general")
    useEffect(() => {
        const getApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedValue}&apiKey=${import.meta.env.NEWS_API_KEY}`
            const data = await axios(url)
            console.log(data);
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
