import useAxiosFunction from './useAxiosFunction'
import React, { useState, useMemo, useEffect, useCallback } from 'react'


const useSortAndFilter = () => {
    const [sortOrder, setSortOrder] = useState('asc')
    const [sortOrderReference, setSortOrderReference] = useState('asc')
    const [filterValue, setFilterValue] = useState('')
    const [fetch, error, loading, trackedObjects] = useAxiosFunction()

    useEffect(() => {
        handleFetch()
    }, [])

    function handleFetch() {
        fetch({ url: 'trackingObjects/standalones' })
    }

    const filteredTrackedObjects = useMemo(() => {
        let filteredArray = trackedObjects || []
        if (filterValue) {
            filteredArray = filteredArray.filter(
                obj =>
                    obj.assetName.toLowerCase().includes(filterValue.toLowerCase()) ||
                    obj.reference.toLowerCase().includes(filterValue.toLowerCase())
            )
        }
        const sortedArray = filteredArray.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.assetName.localeCompare(b.assetName)
            } else {
                return b.assetName.localeCompare(a.assetName)
            }
        })
        const sortedArrayReference = sortedArray.sort((a, b) => {
            if (sortOrderReference === 'asc') {
                return a.reference.localeCompare(b.reference)
            } else {
                return b.reference.localeCompare(a.reference)
            }
        })

        return sortedArrayReference
    }, [sortOrder, sortOrderReference, filterValue, trackedObjects])

    const handleSortOrderChange = useCallback(() => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    }, [sortOrder])

    const handleSortOrderReferenceChange = useCallback(() => {
        setSortOrderReference(sortOrderReference === 'asc' ? 'desc' : 'asc')
    }, [sortOrderReference])

    const handleFilterChange = useCallback((e) => {
        setFilterValue(e)
    }, [filterValue])

    return [
    
            filteredTrackedObjects,
            handleSortOrderChange,
            handleSortOrderReferenceChange,
            sortOrderReference,
            sortOrder,
            filterValue,
            handleFilterChange ]
}

export default  useSortAndFilter 