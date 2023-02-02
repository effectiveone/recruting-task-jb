import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import TextField from '@mui/material/TextField'
import Fade from "@material-ui/core/Fade"


import {
    Grid,
    Tabs,
    Tab,
    Typography,
    Box,
    InputBase,
    IconButton,
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Button
} from "@material-ui/core"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import SearchIcon from "@mui/icons-material/Search"
import Vehicles from "@mui/icons-material/DirectionsCar"
import Machines from "@mui/icons-material/Settings"
import Tools from "@mui/icons-material/Build"

const listItems = [
    {
        title: "Vehicle 1",
        description: "This is a description for Vehicle 1"
    },
    {
        title: "Vehicle 2",
        description: "This is a description for Vehicle 2"
    },
    {
        title: "Machine 1",
        description: "This is a description for Machine 1"
    },
    {
        title: "Machine 2",
        description: "This is a description for Machine 2"
    },
    {
        title: "Tool 1",
        description: "This is a description for Tool 1"
    },
    {
        title: "Tool 2",
        description: "This is a description for Tool 2"
    }
]

const useStyles = makeStyles(theme => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "right"
    },
    paper: {
        position: "relative",
        width: 251,
        height: 533,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display: "flex",
        flexDirection: "column"
    },
    title: {
        fontWeight: "bold",
        marginBottom: theme.spacing(2)
    },
    subtitle: {
        marginBottom: theme.spacing(3)
    },

    TableRow: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
    },

    tab: {
        width: "80px",
        textTransform: "none",
        color: "inherit",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        "& svg": {
            marginRight: theme.spacing(1)
        }
    },
    selectedTab: {
        width: "80px",
        maxWidth: "80px",
        textAlign: "center",
        fontSize: "10px",
        padding: "5px",
        minWidth: "80px"
    },
    searchWrapper: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "50px",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        border: "0.5px solid #828A99",
        borderRadius: "5px",
        opacity: "1"
    },
    searchField: {
        "& label.Mui-focused": {
            color: "#828A99"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#828A99"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#828A99"
            },
            "&:hover fieldset": {
                borderColor: "#828A99"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#828A99"
            }
        }
    },
    searchInput: {
        width: "100%"
    },
    table: {
        minWidth: 400
    },
    tableRow: {
        "&:hover": {
            backgroundColor: theme.palette.action.hover
        }

    },
    tableCell: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: 200
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: theme.spacing(3)
    },
    button: {
        marginLeft: theme.spacing(2)
    },
    buttons: {
        position: "absolute",
        bottom: "10px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
    },
    buttonLeft: {
        width: "100px",
        marginLeft: theme.spacing(2),
        background: "white",
        borderRadius: "5px",
        opacity: 1,
        border: "1px solid red",
        color: "red"

    },
    listWrapper: {
        height: "300px",
        overflowY: "scroll"


    },
    buttonRight: {
        width: "100px",
        backgroundColor: "white",
        border: "1px solid #0077C8",
        marginLeft: theme.spacing(2),
        font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-24) var(--unnamed-font-family-montserrat)",
        letterSpacing: "var(--unnamed-character-spacing-0)",
        color: "#0077C8",
        textAlign: "center",
        font: " normal normal medium 20px/24px Montserrat",
        letterSpacing: "0px",
        opacity: 1
    },
    close: {
        padding: theme.spacing(0.5),
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "10px",
        right: "50px",
        width: "20px",
        height: "20px",
        background: "white 0% 0% no-repeat padding-box",
        opacity: 1,
        color: "#828A99",
        opacity: "100%"
    },
}))

const UpdateOrDeleteGroup = ({ open,
    handleClose }) => {
    const classes = useStyles()


    const handleUpdate = (index) => {
        // You can add logic for updating the list item here
    }

    const handleDelete = (index) => {
        // You can add logic for deleting the list item here
    }

    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
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
                    timeout: 500
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <button className={classes.close} onClick={handleClose}>X</button>
                        <h2 id="transition-modal-title">Group</h2>
                        <h4 id="transition-modal-description">Reference</h4>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            className={classes.tabs}
                            indicatorColor="primary"
                            textColor="primary"

                        >
                            <Tab icon={<Vehicles />} label="Vehicles" className={classes.selectedTab} />
                            <Tab icon={<Machines />} label="Machines" className={classes.selectedTab} />
                            <Tab icon={<Tools />} label="Tools" className={classes.selectedTab} />
                        </Tabs>
                        <div className={classes.searchWrapper}>
                            <SearchIcon />
                            <TextField
                                id="standard-basic"
                                placeholder="Search by..."
                                fullWidth
                                className={classes.searchField}

                            />
                        </div>

                        <div className={classes.listWrapper}>
                            {/* Map over the list items and render each row */}
                            {listItems.map((item, index) => (
                                <div key={index} className={classes.TableRow} >
                                    <em>{item.title}</em>
                                    <span>{item.description}</span>
                                </div>
                            ))}
                        </div>
                        <div className={classes.buttons}>

                            <Button
                                className={classes.buttonLeft}
                                variant="contained"
                                color="primary"
                                onClick={handleDelete}
                                startIcon={<DeleteIcon />}

                            >
                                Delete
                            </Button>
                            <Button
                                className={classes.buttonRight}
                                variant="contained"
                                color="secondary"
                                onClick={handleUpdate}
                                startIcon={<EditIcon />}
                            >
                                Edit
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
export default UpdateOrDeleteGroup