import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from "@mui/material"
function NewsItem({ newsArticle }) {

    const { urlToImage, url, title, description, source } = newsArticle
    return (
        <Grid item md={6} lg={4}>
            <Card>
                <CardMedia
                    component="img"
                    alt={`Imagen ${title}`}
                    image={urlToImage}
                    height={"250"}
                />
                <CardContent>
                    <Typography variant="body1" color="error">
                        {source.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Link
                        href={url}
                        target="_blank"
                        variant="button"
                        width={"100%"}
                        textAlign="center"
                        sx={{
                            textDecoration: "none",
                        }}
                    >
                        Read Article
                    </Link>
                </CardActions>
            </Card>

        </Grid>
    )
}

export default NewsItem