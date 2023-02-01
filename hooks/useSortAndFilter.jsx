import react, { useState, useCallback, useMemo } from 'react'

const useSortAndFilter = (trackedObjects) => {
    const [sortOrder, setSortOrder] = useState('asc')
    const [sortOrderReference, setSortOrderReference] = useState('asc')
    const [filterValue, setFilter] = useState('')

    const filteredTrackedObjects = useMemo(() => {
        let filteredArray = trackedObjects
        if (filterValue) {
            filteredArray = filteredArray?.filter(
                obj =>
                    obj.assetName.toLowerCase().includes(filterValue.toLowerCase()) ||
                    obj.reference.toLowerCase().includes(filterValue.toLowerCase())
            )
        }
        const sortedArray = filteredArray?.sort((a, b) => {
            if (sortOrder === "asc") {
                return a.assetName.localeCompare(b.assetName)
            } else {
                return b.assetName.localeCompare(a.assetName)
            }
        })
        const sortedArrayReference = sortedArray?.sort((a, b) => {
            if (sortOrderReference === "asc") {
                return a.reference.localeCompare(b.reference)
            } else {
                return b.reference.localeCompare(a.reference)
            }
        })

        return sortedArrayReference
    }, [sortOrder, sortOrderReference, filterValue, trackedObjects])


    const handleSortOrderChange = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    }

    const handleSortOrderReferenceChange = () => {
        setSortOrderReference(sortOrderReference === 'asc' ? 'desc' : 'asc')
    }

    const handleFilterChange = useCallback((e) => {
        setFilter(e)
        console.log("filterValue", filterValue)
    }, [filterValue])



    return [
        filteredTrackedObjects,
        handleSortOrderChange,
        handleSortOrderReferenceChange,
        sortOrderReference,
        sortOrder,
        filterValue,
        handleFilterChange,
    ]
}

export default useSortAndFilter
