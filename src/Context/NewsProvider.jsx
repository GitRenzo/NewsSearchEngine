import { createContext, useState, useEffect } from "react";
// Axios
import axios from "axios"
const NewsContext = createContext()

const NewsProvider = ({ children }) => {

    const [selectedValue, setSelectedValue] = useState("general")
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [newsNumber, setNewsNumber] = useState(0)

    useEffect(() => {
        const getApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedValue}&pageSize=10&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNews(data.articles)
            setNewsNumber(data.totalResults)
            setPage(1)
        }
        getApi()
    }, [selectedValue])

    useEffect(() => {
        const getApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${selectedValue}&pageSize=10&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNews(data.articles)
            setNewsNumber(data.totalResults)
        }
        getApi()
    }, [page])


    const handleSelectChange = (event) => (setSelectedValue(event.target.value))

    const handlePaginationChange = (event, value) => (setPage(value))

    return (
        <NewsContext.Provider
            value={{
                selectedValue,
                setSelectedValue,
                handleSelectChange,
                news,
                newsNumber,
                handlePaginationChange,
                page,
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
