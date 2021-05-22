import { Form } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react'

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
    const [genderChoice, setGenderChoice] = useState('Size')

    const genderOptions = [
        { value: 'f', label: 'Female' },
        { value: 'm', label: 'Male' },
        { value: 'nb', label: 'Non-Binary' }
    ]

    const handleGenderChange = (e) => { setGenderChoice(e.target.value) }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="edit-profile-form">
            <Form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField id="outlined-basic" label="Name" >
                        <input placeholder='Name' />
                    </TextField>
                    <TextField id="outlined-basic" label="Username" >
                        <input placeholder='Username' />
                    </TextField>
                    <TextField id="outlined-basic" label="Age" type="number"  >
                        <input placeholder='Age' />
                    </TextField>
                </div>
                <div>
                    <TextField id="outlined-basic" label="Image" >
                        <input placeholder='Image' />
                    </TextField>
                    <TextField id="outlined-basic" label="Password" >
                        <input placeholder='Password' />
                    </TextField>
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
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    type='submit'
                    onSubmit={handleSubmit} >Done</Button>
            </Form>

        </div>
    )
}

export default ProfileEditForm;