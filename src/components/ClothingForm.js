import { useHistory } from "react-router-dom"
import { Form } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))

function ClothingForm({ onAddClothing, onClose }) {
    const classes = useStyles()
    const [size, setSize] = useState('s')
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [category, setCategory] = useState('top')
    // const [clothing, setClothing] = useState([])
    const [gender, setGender] = useState('f')

    const categoryOptions = [
        { value: 'top', label: 'Top' },
        { value: 'bottom', label: 'Bottom' },
        { value: 'dress', label: 'Dress' }
    ]
    const sizeOptions = [
        { value: 's', label: 'Small' },
        { value: 'm', label: 'Medium' },
        { value: 'l', label: 'Large' }
    ]
    const genderOptions = [
        { value: 'f', label: 'Female' },
        { value: 'm', label: 'Male' },
        { value: 'nb', label: 'Non-Binary' }
    ]

    const history = useHistory()
    const handleCatChange = (e) => { setCategory(e.target.value) }
    const handleSizeChange = (e) => { setSize(e.target.value) }
    const handleGenderChange = (e) => { setGender(e.target.value) }
    
    // const addClothing = (newClothing) => {
    //     const newClothingArr = [newClothing, ...clothing]
    //     setClothing(newClothingArr)
    // }
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            name,
            image,
            gender,
            size,
            category
        }

        fetch('http://localhost:3000/clothings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(clothing => {
                // addClothing(clothing)
                onAddClothing(clothing)
                history.push('/mycloset')
                setName('')
                setGender('')
                setSize('')
                setImage('')
                setSize('s')
                setCategory('top')
            })
    }


    return (
        <div className="clothing-form">
            <Form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <div>
                    <TextField id="outlined-basic"
                        label="Name"
                        placeholder='Name'
                        type="text"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)} >
                    </TextField>
                    <TextField id="outlined-basic"
                        label="Image"
                        placeholder='Image'
                        type="text"
                        name='image'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}>
                    </TextField>
                </div>
                <div>
                    <TextField
                        id="outlined-basic"
                        label="Size"
                        select
                        value={size}
                        onChange={handleSizeChange}
                        SelectProps={{ native: true, }}
                        helperText="Please select a size."
                        variant="outlined">
                        {sizeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select-category-native"
                        select
                        label="Category"
                        value={category}
                        onChange={handleCatChange}
                        SelectProps={{ native: true, }}
                        helperText="Please select a category."
                        variant="outlined">
                        {categoryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
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
                    type='submit'
                    onClick={onClose} >Add</Button>
            </Form>
        </div>
    )
}

export default ClothingForm;