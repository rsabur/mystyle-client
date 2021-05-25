import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

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
                <CardMedia
                    component="img"
                    alt={color}
                    height="350"
                    image={image} />
                <CardActions>
                    <Button
                        variant="contained"
                        size="small"
                        color="default">
                        Choose {color}
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default ModelMaker;