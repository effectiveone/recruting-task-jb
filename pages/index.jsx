import useAxiosFunction from '../hooks/useAxiosFunction'
import React, { useEffect, useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import GroupWrapper from "../components/SearchBox/GroupWrapper"
import TableWrapper from "../components/SearchBox/TableWrapper"
import withLayout from './withLayout'


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
          <GroupWrapper />

          <TableWrapper
            selected={selected} setSelected={setSelected}
            handleChange={handleChangeCheckbox} />
        </>
      )}
    </>
  )
}

export default withLayout(Index)
