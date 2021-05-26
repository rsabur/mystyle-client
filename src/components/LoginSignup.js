import { useState } from 'react'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Backdrop from '@material-ui/core/Backdrop'
import { Form, Checkbox } from 'semantic-ui-react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'


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


function LoginSignup({users, setUsers}) {
    const classes = useStyles()
    const classesSignup = useStylesSignup()

    const [openLogin, setOpenLogin] = useState(false)
    const [openSignup, setOpenSignup] = useState(false)

    const [model_id] = useState('')
    const [age, setAge] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [gender, setGender] = useState('f')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const handleOpenLogin = () => { setOpenLogin(true) }
    const handleCloseLogin = () => { setOpenLogin(false) }
    const handleOpenSignup = () => { setOpenSignup(true) }
    const handleCloseSignup = () => { setOpenSignup(false) }
    const handleGenderChange = (e) => { setGender(e.target.value) }

    const genderOptions = [
        { value: 'f', label: 'Female' },
        { value: 'm', label: 'Male' },
        { value: 'nb', label: 'Non-Binary' }
    ]


    const addUser = (newUser) => {
        const newUserArr = [newUser, ...users]
        setUsers(newUserArr)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            name,
            image,
            gender,
            age,
            password,
            username,
            model_id
        }

        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(user => {
                addUser(user)
                history.push('/myprofile')
                setName('')
                setUsername('')
                setAge('')
                setImage('')
                setPassword('')
            })
    }

    return (
        <div>
            <Button type="button" variant="contained"
                color="primary" size="large" onClick={handleOpenLogin}>
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
                        <h2 id="transition-modal-title">Welcome Back!</h2>
                        <Form className={classes.root} noValidate autoComplete="off">
                            <div>
                                <TextField id="username" label="Username" >
                                    <input placeholder='Username' />
                                </TextField>
                            </div>
                            <div>
                                <TextField id="password" label="Password"
                                    type='password' >
                                    <input placeholder='Password' />
                                </TextField>
                            </div>
                            <br />
                            <Button
                                size="small"
                                variant="contained"
                                color='primary'
                                onClick={handleCloseLogin}
                                type='submit'> Login
                            </Button>
                        </Form>
                    </div>
                </Fade>
            </Modal>
            <br />
            <br />
            <Button type="button" variant="contained" size="large"
                onClick={handleOpenSignup}>
                Sign Up</Button>
            <Modal
                className={classes.modal}
                open={openSignup}
                onClose={handleCloseSignup}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500, }}>
                <Fade in={openSignup}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Create A Profile</h2>
                        <Form className={classesSignup.root}
                            noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <div>
                                <TextField id="name"
                                    label="Name"
                                    placeholder='Name'
                                    type="text"
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <TextField id="username"
                                    label="Username"
                                    placeholder='Username'
                                    type="text"
                                    name='username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div>
                                <TextField id="number"
                                    label="Age"
                                    type="number"
                                    placeholder='Age'
                                    name='age'
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)} />
                            </div>
                            <div>
                                <TextField id="image"
                                    label="Image"
                                    placeholder='Image'
                                    type="text"
                                    name='image'
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)} />
                            </div>
                            <div>
                                <TextField id="password-input"
                                    label="Password"
                                    placeholder='Password'
                                    type='password'
                                    name='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}>
                                </TextField>
                            </div>
                            <div>
                                <TextField
                                    id="gender"
                                    label="Gender"
                                    select
                                    value={gender}
                                    onChange={handleGenderChange}
                                    SelectProps={{ native: true, }}
                                    helperText="Please select a gender."
                                    variant="outlined">
                                    {genderOptions.map((option) => (
                                        <option key={option.value}
                                            value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </div>
                            <div>
                                <Form.Field required>
                                    <Checkbox
                                        label='I agree to the Terms and Conditions' />
                                </Form.Field>
                            </div>
                            <br />
                            <Button
                                size="small"
                                variant="contained"
                                color="primary"
                                onClick={handleCloseSignup}
                                type='submit'>Sign up
                            </Button>
                        </Form>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default LoginSignup