import { Typography, Grid } from "@mui/material"
import useNewsEngineTool from "../Hooks/useNewsEngineTool"
// MUI Pagination
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// Componentes
import NewsItem from "./NewsItem"

function NewsList() {
    const { news, newsNumber, handlePaginationChange, page } = useNewsEngineTool()
    const totalPages = Math.ceil(newsNumber / 20)
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
            <Stack
                spacing={2}
                direction={"row"}
                justifyContent="center"
                alignItems={"center"}
                sx={{
                    marginY: 5
                }}
            >
                <Pagination count={totalPages} color="primary" onChange={handlePaginationChange}
                page={page}
                />
            </Stack>
        </>
    )
}

export default NewsList