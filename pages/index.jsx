import useAxiosFunction from '../hooks/useAxiosFunction'
import React, { useEffect, useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import ResponsiveAppBar from '../components/navbar/ResponsiveAppBar'
import GroupWrapper from "../components/SearchBox/GroupWrapper"
import FilterWrapper from "../components/SearchBox/FilterWrapper"
import TableWrapper from "../components/SearchBox/TableWrapper"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}))

const Index = () => {
  const [selected, setSelected] = useState([])

  const isSelected = id => selected?.includes(id)



  const handleChangeCheckbox = useCallback((e, id) => {
    if (isSelected(id)) {
      setSelected(selected.filter(item => item !== id))
    } else {
      setSelected([...selected, id])
    }
  }, [isSelected, selected, setSelected])

  const [fetch, error, loading, trackedObjects] = useAxiosFunction()

  useEffect(() => {
    handleFetch()
  }, [])

  function handleFetch() {
    fetch({ url: 'trackingObjects/standalones' })
  }

  const classes = useStyles()
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  console.log("trackedObjects", trackedObjects)

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <ResponsiveAppBar />
          <GroupWrapper />
          <FilterWrapper
            trackedObjects={trackedObjects}
            selected={selected}
          />
          <TableWrapper
            selected={selected} setSelected={setSelected}
            trackedObjects={trackedObjects} handleChange={handleChangeCheckbox} />
        </>
      )}
    </>
  )
}

export default Index
