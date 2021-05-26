import { useState } from 'react'
import { Form } from 'semantic-ui-react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))

function OutfitEditForm({ outfitName, handleClose, setOutfits, id, outfits, onEditOutfit }) {
    const classes = useStyles()
    const [userId] = useState(1)
    const [name, setName] = useState(outfitName)

    const handleSubmit = (e) => {
        e.preventDefault()

        const outfitData = {
            id,
            name,
            user_id: userId
        }
        fetch(`http://localhost:3000/outfits/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(outfitData)
        })
            .then(r => r.json())
            .then(updatedOutfitObj => {
                onEditOutfit(updatedOutfitObj)
            })
    }
    return (
        <Form className={classes.root} noValidate autoComplete="off"
            onSubmit={handleSubmit} >
            <div>
                <TextField id="name"
                    label="Name"
                    placeholder='Name'
                    type="text"
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <Button
                size="small"
                variant="contained"
                color="primary"
                type='submit'
                onClick={handleClose}>
                Done
                </Button>
        </Form>
    )
}

export default OutfitEditForm