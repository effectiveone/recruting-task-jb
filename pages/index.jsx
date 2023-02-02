import useAxiosFunction from '../hooks/useAxiosFunction'
import React, { useEffect, useState, useCallback } from 'react'
import GroupWrapper from "../components/SearchBox/GroupWrapper"
import TableWrapper from "../components/SearchBox/TableWrapper"
import withLayout from './withLayout'




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

