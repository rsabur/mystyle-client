import { Form } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom"
import { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))


function ProfileEditForm() {
    const classes = useStyles()
    const [setUser] = useState([])
    const [model_id] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [image, setImage] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('f')
    const [showPassword, setShowPassword] = useState(false)

    const genderOptions = [
        { value: 'f', label: 'Female' },
        { value: 'm', label: 'Male' },
        { value: 'nb', label: 'Non-Binary' }
    ]

    const history = useHistory()
    const handleGenderChange = (e) => { setGender(e.target.value) }

    const handleClickShowPassword = () => { setShowPassword(showPassword => !showPassword) }
    const handleMouseDownPassword = (e) => { e.preventDefault() }

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
        fetch(`http://localhost:3000/users/2`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(updatedUser => {
            setUser(updatedUser)
            history.push('/myprofile')
        })
    }

    return (
        <div className="edit-profile-form">
            <Form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <div>
                    {/* <TextField id="model_id" type="number" label="model-id" /> */}
                    {/* <input type='hidden' id='model_id' name='model_id' value='1' /> */}
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
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        endadornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}>
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>}>
                    </TextField>
                </div>
                <div>
                    <TextField id="gender"
                        label="Gender"
                        select
                        value={gender}
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
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    type='submit'>
                    Done
                </Button>
            </Form>

        </div>
    )
}

export default ProfileEditForm