import { Button, Form } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function ClothingForm() {
    const classes = useStyles();
    const [category, setCategory] = useState('Category');
    const [size, setSize] = useState('Size');

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

    const handleCatChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    return (
        <div className="clothing-form">
            <Form className={classes.root} noValidate autoComplete="off">
                <div>
                <TextField id="outlined-basic" label="Name" >
                    <input placeholder='Name' />
                </TextField>
                <TextField id="outlined-basic" label="Image" >
                    <input placeholder='Image' />
                </TextField>
                </div>
                <div>
                <TextField 
                id="outlined-basic" 
                label="Size" 
                select
                value={size}
                    onChange={handleSizeChange}
                    SelectProps={{native: true,}}
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
                    SelectProps={{native: true,}}
                    helperText="Please select a category."
                    variant="outlined">
                    {categoryOptions.map((option) => (
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
                    type='submit'>Done</Button>
            </Form>
        </div>
    )
}

export default ClothingForm;