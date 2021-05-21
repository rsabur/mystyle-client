import ProfileCard from './ProfileCard';
import ModelMaker from './ModelMaker';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SegmentInline } from 'semantic-ui-react';


function ProfilePage({ users, models }) {

    const user = users.map(user => <ProfileCard key={user.id} {...user} />)
    const model = models.map(model => <ModelMaker key={model.id} {...model} user={user} />)
    console.log(model.props);

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
    }));

    const classes = useStyles()

    return (
        <div className="profile-page">
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                item
                sm={6}>
                <Paper className={classes.paper}>
                    My Info
                    {user[0]}
                </Paper>
            </Grid>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                item
                sm={6}>
                <Paper className={classes.paper}>
                    Choose Your Model
                    {model}
                </Paper>
            </Grid>
        </div>
    )
}

export default ProfilePage;