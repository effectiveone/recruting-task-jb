import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { AddIcon } from "../../utils/Icons"
import Container from '@mui/material/Container'
import useModal from "../../hooks/useModal"
import CreateGroup from "../Modal/CreateGroup"
import { useStyles } from "./StyleGroupWrapper"

function GroupWrapper() {
    const classes = useStyles()
    const [open, setOpen, handleClose, handleOpen]
        = useModal()


    return (
        <Container maxWidth="xl" >
            <div className={classes.root}>
                <Grid container spacing={16} className={classes.container}>
                    <Grid item xs={10}>
                        <h2
                        >Group</h2>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            className={classes.button}
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={handleOpen}                        >
                            Create Group
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <CreateGroup
                open={open}
                handleClose={handleClose}
            />
        </Container>

    )
}

export default GroupWrapper