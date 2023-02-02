import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import useSortAndFilter from '../../hooks/useSortAndFilter'
import useModal from "../../hooks/useModal"
import UpdateOrDeleteGroup from "../Modal/UpdateOrDeleteGroup"
import FilterWrapper from "./FilterWrapper"

const useStyles = makeStyles({
    table: {
        marginTop: "20px",
        minWidth: 650,
        backgroundColor: "white"
    },
})

const TableWrapper = ({ handleChange, selected, setSelected }) => {
    const classes = useStyles()
    const [open, setOpen, handleClose, handleOpen]
        = useModal()


    const [
        filteredTrackedObjects,
        handleSortOrderChange,
        handleSortOrderReferenceChange,
        sortOrderReference,
        sortOrder,
        filterValue,
        handleFilterChange,
    ] = useSortAndFilter()

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = filteredTrackedObjects?.map((row) => row.id)
            setSelected(newSelected)
            return
        }
        setSelected([])
    }

    const isSelected = (id) => selected.indexOf(id) !== -1


    return (
        <>

            <FilterWrapper
                handleFilterChange={handleFilterChange}
                selected={selected}
            />        <Container maxWidth="xl" >

                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        indeterminate={selected.length > 0 && selected.length < filteredTrackedObjects?.length}
                                        checked={filteredTrackedObjects?.length > 0 && selected.length === filteredTrackedObjects?.length}
                                        onChange={handleSelectAllClick}
                                    />
                                </TableCell>
                                <TableCell>
                                    Name
                                    {sortOrder === 'asc' ? (
                                        <ArrowDownwardIcon onClick={handleSortOrderChange} />
                                    ) : (
                                        <ArrowUpwardIcon onClick={handleSortOrderChange} />
                                    )}
                                </TableCell>
                                <TableCell>Reference
                                    {sortOrderReference === 'asc' ? (
                                        <ArrowDownwardIcon onClick={handleSortOrderReferenceChange} />
                                    ) : (
                                        <ArrowUpwardIcon onClick={handleSortOrderReferenceChange} />
                                    )}

                                </TableCell>
                                <TableCell>
                                    <MoreVertIcon />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredTrackedObjects?.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell padding="checkbox" >
                                        <Box sx={{
                                            display: "flex", flexDirection: "row",
                                        }}>
                                            <Checkbox checked={isSelected(row.id)} onClick={e => handleChange(e, row.id)} />

                                            <IconButton sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <KeyboardArrowUpIcon />
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.assetName}
                                    </TableCell>
                                    <TableCell>{row.reference}</TableCell>
                                    <TableCell
                                        onClick={handleOpen}
                                    >
                                        <MenuIcon />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
                <UpdateOrDeleteGroup
                    open={open}
                    handleClose={handleClose}
                />
            </Container>
        </>

    )
}

export default TableWrapper