import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useAxiosFunction from "../../hooks/useAxiosFunction"
import useStyles from "./StylesCreateGroup"


const CreateGroup = ({ open,
    handleClose }) => {
    const classes = useStyles()

    const [fetchData, error, loading, response] = useAxiosFunction()

    const [groupName, setGroupName] = useState("")
    const [groupReference, setGroupReference] = useState("")
    const [parentGroupId, setParentGroupId] = useState("")
    const [groupDescription, setGroupDescription] = useState("")

    const createGroup = () => {
        const body = {
            isSubGroup: true,
            name: groupName,
            parentGroupId: parentGroupId,
            reference: groupReference,
            description: groupDescription
        }

        fetchData({
            url: 'groups',
            method: 'POST',
            config: {
                data: body
            }
        })
    }





    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className={classes.header}>
                            <h2 className={classes.headerTitle}>Create a new group</h2>
                            <button className={classes.close} onClick={handleClose}>X</button>
                        </div>
                        <Box className={classes.body}>
                            <Box className={classes.message}>
                                <p className={classes.messageDot}>*</p> indicates a required field
                            </Box>

                            <Input
                                className={classes.input}
                                required
                                placeholder="Name"
                                inputProps={{ 'aria-label': 'name' }}
                                value={groupName}
                                onChange={(event) => setGroupName(event.target.value)}
                            />
                            <Input
                                className={classes.input}
                                placeholder="Reference"
                                inputProps={{ 'aria-label': 'reference' }}
                                value={groupReference}
                                onChange={(event) => setGroupReference(event.target.value)}
                            />
                            <Select
                                className={classes.select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={parentGroupId}
                                onChange={(event) => setParentGroupId(event.target.value)}>
                                <option value="" disabled>
                                    No parent selected (defined as a root group)
                                </option>
                            </Select>
                            <TextField
                                className={classes.textarea}
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                minRows={4}
                                variant="outlined"
                                value={groupDescription}
                                onChange={(event) => setGroupDescription(event.target.value)}
                            />
                            <div className={classes.buttons}>
                                <Button
                                    className={classes.buttonLeft}
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleClose}
                                >
                                    Close
                                </Button>
                                <Button
                                    className={classes.buttonRight}
                                    variant="contained"
                                    color="primary"
                                    onClick={createGroup}
                                >
                                    Save group
                                </Button>

                            </div>
                        </Box>
                    </div>
                </Fade>
            </Modal>
        </div >
    )
}

export default CreateGroup