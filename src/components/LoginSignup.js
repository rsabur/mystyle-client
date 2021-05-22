import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { useHistory } from "react-router-dom"
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import { Form, Checkbox } from 'semantic-ui-react'
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles((theme) => ({
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

const useStylesSignup = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))


function LoginSignup() {
    const classes = useStyles()
    const classesSignup = useStylesSignup()
    const [genderChoice, setGenderChoice] = useState('Size')
    const [openLogin, setOpenLogin] = useState(false)
    const [openSignup, setOpenSignup] = useState(false)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [image, setImage] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState([])

    const history = useHistory()

    const handleOpenLogin = () => { setOpenLogin(true) }
    const handleCloseLogin = () => { setOpenLogin(false) }
    const handleOpenSignup = () => { setOpenSignup(true) }
    const handleCloseSignup = () => { setOpenSignup(false) }

    const genderOptions = [
        { value: 'f', label: 'Female' },
        { value: 'm', label: 'Male' },
        { value: 'nb', label: 'Non-Binary' }
    ]

    const handleGenderChange = (e) => { setGenderChoice(e.target.value) }

    const addUser = (newUser) => {
        const newUserArr = [newUser, ...user]
        setUser(newUserArr)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')

        const formData = {
            name,
            image,
            genderChoice,
            age,
            password,
            username,
        }
        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            bodt: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(user => {
                addUser(user)
                console.log(user)
                history.push('/')
            })
    }

    return (
        <div>
            <Button type="button" variant="contained" color="primary" size="large" onClick={handleOpenLogin}>
                Login
      </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openLogin}
                onClose={handleCloseLogin}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={openLogin}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Login</h2>
                        <Form className={classes.root} noValidate autoComplete="off">
                            <div>
                                <TextField id="outlined-basic" label="Username" >
                                    <input placeholder='Username' />
                                </TextField>
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Password" type='password' >
                                    <input placeholder='Password' />
                                </TextField>
                            </div>
                            <br />
                            <Button
                                size="small"
                                variant="contained"
                                type='submit'>Login</Button>
                        </Form>
                    </div>
                </Fade>
            </Modal>
            <br />
            <br />
            <Button type="button" variant="contained" size="large" onClick={handleOpenSignup}>
                Sign Up</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openSignup}
                onClose={handleCloseSignup}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openSignup}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Sign Up</h2>
                        <Form className={classesSignup.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <div>
                                <TextField id="outlined-basic" label="Name" >
                                    <input placeholder='Name'
                                        type="text"
                                        name='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </TextField>
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Username" >
                                    <input placeholder='Username'
                                        type="text"
                                        name='username'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)} />
                                </TextField>
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Age" type="number"  >
                                    <input placeholder='Age'
                                        type="text"
                                        name='age'
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)} />
                                </TextField>
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Image" >
                                    <input placeholder='Image'
                                        type="text"
                                        name='image'
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)} />
                                </TextField>
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Password" >
                                    <input placeholder='Password'
                                        type='password'
                                        name='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </TextField>
                            </div>
                            <div>
                                <TextField
                                    id="outlined-basic"
                                    label="Gender"
                                    select
                                    value={genderChoice}
                                    onChange={handleGenderChange}
                                    SelectProps={{ native: true, }}
                                    helperText="Please select a gender."
                                    variant="outlined">
                                    {genderOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </div>
                            <div>
                                <Form.Field required>
                                    <Checkbox label='I agree to the Terms and Conditions' />
                                </Form.Field>
                            </div>
                            <br />
                            <Button
                                size="small"
                                variant="contained"
                                color="primary"
                                type='submit'>Sign up
                            </Button>
                        </Form>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default LoginSignup;