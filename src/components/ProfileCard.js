import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ProfileEditForm from './ProfileEditForm'

const useStyles1 = makeStyles({
    root: {
        maxWidth: 345,
    },
})

const useStyles2 = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))


function ProfileCard({
    id,
    name,
    username,
    age,
    gender,
    password,
    image = "https://norrismgmt.com/wp-content/uploads/2020/05/24-248253_user-profile-default-image-png-clipart-png-download.png" }) {


    const classes1 = useStyles1()
    const classes2 = useStyles2()
    const [open, setOpen] = useState(false)

    const history = useHistory()
    
    const handleOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }

    const handleDeleteProfile = () => {
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        })
        history.push('/')
    }

    return (
        <div className="profile-card">
            <Card className={classes1.root}>
                <CardMedia
                    component="img"
                    alt={name}
                    height="250"
                    image={image} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">Username: {username}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">Age: {age}</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        type="button"
                        onClick={handleOpen}>
                        Edit
                    </Button>
                    <Modal
                        aria-labelledby="edit-profile"
                        aria-describedby="edit-profile"
                        className={classes2.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{ timeout: 500, }}>
                        <Fade in={open}>
                            <div className={classes2.paper}>
                                <h2 id="transition-modal-title">Edit Profile</h2>
                                    <ProfileEditForm id={id}
                                        name={name}
                                        username={username}
                                        age={age}
                                        gender={gender}
                                        password={password}
                                        image={image} /></div>
                        </Fade>
                    </Modal>
                    <Button onClick={handleDeleteProfile}
                        size="small"
                        variant="contained"
                        color="secondary"
                        className={classes2.button}
                        startIcon={<DeleteIcon />}>
                        Delete
                  </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProfileCard