import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AddIcon from '@mui/icons-material/Add'
import Container from '@mui/material/Container'
import useModal from "../../hooks/useModal"
import CreateGroup from "../Modal/CreateGroup"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: "white",
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "10px"
    },
    container: {
        alignItems: "center"
    },


    button: {
        background: "var(--logifleet-blue) 0% 0% no-repeat padding-box",
        background: "#0077C8 0% 0% no-repeat padding-box",
        borderRadius: "5px",
        opacity: 1,
        color: "white",
        opacity: "100%"
    },
}))

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