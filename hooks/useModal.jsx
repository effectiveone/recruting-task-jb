import React, { useState } from 'react'

const useModal = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    return [open, setOpen, handleClose, handleOpen]
}

export default useModal
