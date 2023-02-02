import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import axiosMock from 'axios'
import CreateGroup from './CreateGroup'

jest.mock('axios')

describe('CreateGroup', () => {
  it('renders the modal correctly', () => {
    const { getByText, getByPlaceholderText } = render(<CreateGroup open />)

    expect(getByText('Create a new group')).toBeInTheDocument()
    expect(getByPlaceholderText('Name')).toBeInTheDocument()
    expect(getByPlaceholderText('Reference')).toBeInTheDocument()
    expect(getByText('No parent selected (defined as a root group)')).toBeInTheDocument()
    expect(getByText('Description')).toBeInTheDocument()
    expect(getByText('Close')).toBeInTheDocument()
    expect(getByText('Save group')).toBeInTheDocument()
  })

  it('closes the modal when close button is clicked', () => {
    const handleClose = jest.fn()
    const { getByText } = render(<CreateGroup open handleClose={handleClose} />)

    fireEvent.click(getByText('X'))

    expect(handleClose).toHaveBeenCalled()
  })

  it('closes the modal when Close button is clicked', () => {
    const handleClose = jest.fn()
    const { getByText } = render(<CreateGroup open handleClose={handleClose} />)

    fireEvent.click(getByText('Close'))

    expect(handleClose).toHaveBeenCalled()
  })

  it('sends a post request to create a group and closes the modal', async () => {
    axiosMock.post.mockResolvedValue({ data: {} })
    const handleClose = jest.fn()
    const { getByPlaceholderText, getByText } = render(<CreateGroup open handleClose={handleClose} />)

    fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'Test Group' } })
    fireEvent.change(getByPlaceholderText('Reference'), { target: { value: 'TSTGRP' } })
    fireEvent.change(getByText('Description'), { target: { value: 'Test group description' } })

    fireEvent.click(getByText('Save group'))

    await waitFor(() => {
      expect(axiosMock.post).toHaveBeenCalledWith('groups', {
        isSubGroup: true,
        name: 'Test Group',
        parentGroupId: '',
        reference: 'TSTGRP',
        description: 'Test group description'
      })
      expect(handleClose).toHaveBeenCalled()
    })
  })
})
