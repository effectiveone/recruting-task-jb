import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import useSortAndFilter from '../../hooks/useSortAndFilter'
import Container from '@mui/material/Container'
import { FilterListIcon, SearchIcon, IconButton }
    from "../../utils/Icons"
import { useStyles } from "./StyleFilterWrapper"



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