import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import FilterListIcon from '@mui/icons-material/FilterList'
import SearchIcon from '@mui/icons-material/Search'
import useSortAndFilter from '../../hooks/useSortAndFilter'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20px",
        display: "flex",
        flexGrow: 1,
        width: "100%",
        paddingTop: "50px"
    },
    icon: {
        color: '#1579C9',
    },
    flexbox: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",

    },

    wrapper: {

        marginTop: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    selectedItemsSpan: {
        marginLeft: "10px"
    },
    selectedItems: {
        width: "119px",
        height: "19x"
    },
    filter: {
        display: "flex",
        alignItems: "center",
        width: "107px",
        height: "19x"
    },
    root: {
        flexGrow: 1,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        width: "100%"
    },
    button: {
        marginRight: theme.spacing(1),
        backgroundColor: "white",
        color: "#1579C9",
        width: "107px",
        padding: "5px 5px 5px 5px",
        background: "var(--white) 0% 0% no-repeat padding-box",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        borderRadius: "5px",
        opacity: 1
    },
    searchContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignItems: "flex-end",
        width: "377px",
        backgroundColor: "white",

    },


}))


const FilterWrapper = ({ selected, handleFilterChange }) => {
    const classes = useStyles()
    return (
        <Container maxWidth="xl" >
            <div className={classes.root}>
                <Grid container className={classes.wrapper}>
                    <Grid className={classes.flexbox}>
                        <Grid spacing={2} className={classes.selectedItems}>
                            <span className={classes.selectedItemsSpan}>{selected.length !== 0 ? selected.length : 0} tools selected</span>
                        </Grid>
                        <Grid className={classes.filter}>
                            <Button
                                className={classes.button}
                                variant="contained"
                                startIcon={<IconButton color="#1579C9">
                                    <FilterListIcon sx={{ p: 0 }} className={classes.icon} />
                                </IconButton>}
                            >
                                Filter
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid className={classes.searchContainer}>
                        <SearchIcon />
                        <InputBase
                            className={classes.input}
                            placeholder="Search by name or reference"
                            onChange={({ target: { value } }) => handleFilterChange(value)}

                        />
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default FilterWrapper