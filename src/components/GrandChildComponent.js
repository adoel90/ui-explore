import React from 'react'
import { Button, Box } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { showSnackbar } from '../redux/actions/uiActions'

const GrandChildComponent = props => {

    const dispatch = useDispatch()

    return (
        <Box display='flex' justifyContent='center' mt={8}> 
            <Button variant='outlined' onClick={() => dispatch(showSnackbar('Nice :)'))}>Show Snackbar</Button>
        </Box>
    )
}

export default GrandChildComponent;