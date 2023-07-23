import { Typography, Grid } from "@mui/material"
import useNewsEngineTool from "../Hooks/useNewsEngineTool"
// Componentes
import NewsItem from "./NewsItem"

function NewsList() {
    const { news } = useNewsEngineTool()
    return (
        <>
            <Typography
                textAlign={"center"}
                marginY={5}
                variant="h3"
                component={"h2"}
            >
                Latest News
            </Typography>

            <Grid container spacing={2}>
                {news.map((newsArticle) => (
                    <NewsItem
                        key={newsArticle.url}
                        newsArticle={newsArticle}
                    />
                ))}
            </Grid>
        </>
    )
}

export default NewsList