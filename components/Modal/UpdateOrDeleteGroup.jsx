import React, { useEffect, useState } from "react"
import useStyles from "./StylesUpdateOrDeleteGroup"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import TextField from '@mui/material/TextField'
import Fade from "@material-ui/core/Fade"
import useAxiosFunction from "../../hooks/useAxiosFunction"
import { listItems } from "../../utils/FakeDate"
import {
    Tabs,
    Tab,
    Button
} from "@material-ui/core"
import { DeleteIcon, EditIcon, SearchIcon, Vehicles, Machines, Tools }
    from "../../utils/icons"





const UpdateOrDeleteGroup = ({ open,
    handleClose, id }) => {
    const classes = useStyles()
    const [reference, setRefence] = useState(null)
    useEffect(() => {
        setRefence(id)
    }, [id])

    const [fetchData, error, loading, response] = useAxiosFunction()

    const handleUpdate = (index) => {
        const updatedGroup = {
            name: "Theta GOP",
            reference: "ThetaFOP-1",
            description: null,
            rootGroup: false,
            parentGroupId: "d2d30a48-fa92-4cfb-a048-d55a93020ac7_rootGroup",
            parentsGroupIdsOrdered: [
                "d2d30a48-fa92-4cfb-a048-d55a93020ac7_rootGroup"
            ],
            allChildrenIds: []
        }
        const url = `groups/${index}`
        fetchData({
            url,
            method: 'PUT',
            config: {
                data: updatedGroup,
            },
        })
    }


    const handleDelete = async (index) => {

        fetchData({
            url: `groups/${index}`,
            method: 'DELETE',
        })
    }


    const [currentTab, setCurrentTab] = React.useState(0)

    const handleChangeCurrentTab = (event, newValue) => {
        setCurrentTab(newValue)
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
                        <h4 id="transition-modal-description">Reference {reference}</h4>
                        <Tabs
                            value={currentTab}
                            onChange={handleChangeCurrentTab}
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
                            {listItems?.map((item, index) => (
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
                                onClick={() => handleDelete(reference)}
                                startIcon={<DeleteIcon />}

                            >
                                Delete
                            </Button>
                            <Button
                                className={classes.buttonRight}
                                variant="contained"
                                color="secondary"
                                onClick={() => handleUpdate(reference)}
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