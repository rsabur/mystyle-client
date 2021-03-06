import { useState } from 'react'
import Fade from '@material-ui/core/Fade'
import Card from '@material-ui/core/Card'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import ProfileEditForm from './ProfileEditForm'
import Backdrop from '@material-ui/core/Backdrop'
import DeleteIcon from '@material-ui/icons/Delete'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

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


function ProfileCard({ user, setUsers }) {
    const history = useHistory()
    const classes1 = useStyles1()
    const classes2 = useStyles2()
    const [open, setOpen] = useState(false)
    
    const handleOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }
    const handleDeleteProfile = () => {
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'DELETE'
        })
        history.push('/')
    }

    return (
        <div className="profile-card">
            <Card className={classes1.root}>
                <CardMedia
                    component="img"
                    alt={user.name}
                    height="350"
                    image={user.image} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {user.name}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Username: {user.username}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Age: {user.age}</Typography>
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
                                <ProfileEditForm userId={user.id}
                                    userName={user.name}
                                    userModel={user.model_id}
                                    userUsername={user.username}
                                    userAge={user.age}
                                    userGender={user.gender}
                                    userPassword={user.password}
                                    userImage={user.image}
                                    onClose={handleClose}
                                    setUsers={setUsers} /></div>
                        </Fade>
                    </Modal>
                    <Button onClick={handleDeleteProfile}
                        size="small"
                        variant="contained"
                        style={{color:"#d50000"}}
                        color="#d50000"
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