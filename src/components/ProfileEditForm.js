import { Form } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom"
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))


function ProfileEditForm( {userId,
    onClose,
    userName,
    userModel,
    userUsername,
    userAge,
    userGender,
    userPassword,
    userImage,
    setUsers} ) {
    const classes = useStyles()
    const history = useHistory()
    // const [model_id] = useState('1')
    const [age, setAge] = useState(userAge)
    const [name, setName] = useState(userName)
    const [image, setImage] = useState(userImage)
    const [gender, setGender] = useState(userGender)
    const [model_id, setModel_id] = useState(userModel)
    const [username, setUsername] = useState(userUsername)
    const [password, setPassword] = useState(userPassword)
    const handleGenderChange = (e) => { setGender(e.target.value) }
    const handleModelChange = (e) => { setModel_id(e.target.value) }
    
    const genderOptions = [
        { value: 'f', label: 'Female' },
        { value: 'm', label: 'Male' },
        { value: 'nb', label: 'Non-Binary' }
    ]
    
    const modelOptions = [
        { value: '1', label: 'Deep Tone' },
        { value: '2', label: 'Olive Tone' },
        { value: '3', label: 'Pale Tone' },
    ]

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
        fetch(`http://localhost:3000/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(updatedUserObj => {
                setUsers(updatedUserObj)
                history.push('/myprofile')
            })
    }

    return (
        <div className="edit-profile-form">
            <Form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
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
                <div>
                    <TextField id="model_id"
                        label="Model"
                        select
                        value={model_id}
                        onChange={handleModelChange}
                        SelectProps={{ native: true, }}
                        helperText="Please select a gender."
                        variant="outlined">
                        {modelOptions.map((option) => (
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
                    type='submit'
                    onClick={onClose}>
                    Done
                </Button>
            </Form>

        </div>
    )
}

export default ProfileEditForm