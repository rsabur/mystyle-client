import ProfileCard from './ProfileCard'
import ModelMaker from './ModelMaker'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        display: 'inline-flex',
        padding: theme.spacing(6),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

function ProfilePage({ user, models, onUpdatedUser, setUsers }) {
    const model = models.map(model => {
        return <ModelMaker key={model.id} {...model} user={user} />
    })

    const classes = useStyles()

    return (
        <div className="profile-page">
            <Grid container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                item
                sm={6}>
                <h3 className={classes.paper}>
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
                <h3 className={classes.paper}>
                    Choose a Model:
                </h3>
                <Paper className={classes.paper}>
                    {model}
                </Paper>
            </Grid>
        </div>
    )
}

export default ProfilePage