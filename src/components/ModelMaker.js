import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

function ModelMaker({ id, model_id, color, image }) {
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
    });
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                {/* <CardActionArea> */}
                <CardMedia
                    component="img"
                    alt={color}
                    height="140"
                    image={image} />
                {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{color}</Typography>
                </CardContent> */}
                {/* </CardActionArea> */}
                <CardActions>
                    <Button
                        variant="contained"
                        size="small"
                        color="default">
                        Choose {color}!
                </Button>
                </CardActions>
            </Card>
        </>

        // <img className="model" src={image} alt="model" style={{ height: "65%" }} />
        // {color}

    )
}

export default ModelMaker;