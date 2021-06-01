import ProfileCard from './ProfileCard'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import CardActions from '@material-ui/core/CardActions'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        display: 'inline-flex',
        padding: theme.spacing(6),
        textAlign: 'center',
        backgroundColor: 'gainsboro',
        color: theme.palette.text.secondary,
    },
    paper2: {
        display: 'inline-flex',
        padding: theme.spacing(6),
        textAlign: 'center',
        // backgroundColor: 'grey',
        color: theme.palette.text.secondary,
    },
}))


function ProfilePage({ user, models, setUsers }) {
    const classes = useStyles()
    const history = useHistory()
    const handleGetDressed = () => { history.push('/mycloset')}
    
    const model = models.find(model => {
        if(user.model_id === model.id){
            return model
        } else {
            return ''
        }
    })

    return (
        <div className="profile-page">
            <Grid container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                item
                sm={6}>
                <h3 className={classes.paper2}>
                    My Info:
                </h3>
                <Paper className={classes.paper}>
                    <ProfileCard user={user} setUsers={setUsers} />
                </Paper>
            </Grid>
            <Grid container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                item
                sm={6}>
                <h3 className={classes.paper2}>
                    My Model:
                </h3>
                <Paper className={classes.paper}>
                    <Card className={classes.root}>
                        <CardMedia
                            component="img"
                            alt='tone'
                            src={model.image}
                            style={{ width: '63.5%', marginLeft: '6rem' }} />
                        <CardActions>
                            <Button
                                variant="contained"
                                size="small"
                                color="primary"
                                onClick={handleGetDressed}
                                // style={{ marginLeft: '9rem' }} 
                                >
                                Get Dressed</Button>
                        </CardActions>
                    </Card>
                </Paper>
            </Grid>
        </div>
    )
}

export default ProfilePage