import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import {CardContent, Typography} from '@material-ui/core/'


function ModelMaker({ id, color, user, image }) {
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
    })

    const modelImage = () => {
        if (user.model_id === id) {
            return image
        }
    }
    const classes = useStyles()

    return (
        <>
            <Card className={classes.root}>
                <CardMedia
                    component="img"
                    alt={color}
                    height="350"
                    image={modelImage()} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {color}</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        size="small"
                        color="default">
                        {color}
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default ModelMaker