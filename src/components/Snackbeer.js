import React from 'react';
import { IconButton, Snackbar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from '@material-ui/icons/Close';

import { closeSnackbar } from '../redux/actions/uiActions'

const useStyle = makeStyles(theme => ({

    warning: {
  
      backgroundColor: theme.palette.secondary.main
    }
  
  }))

const Snackbeer = props => {

    const classes = useStyle()    

    const dispatch = useDispatch();
    const { message, isOpen } = useSelector(state => state.ui)

    return (
        <Snackbar
            open={isOpen}
            message={
                <Typography color='primary' variant='subtitle2'>
                    {message}
                </Typography>
            }
            autoHideDuration={3000}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}

            ContentProps={{
                classes: {
                    root: classes.warning
                }
            }}
        action={[
            <IconButton onClick={() => dispatch(closeSnackbar()) } color='primary'>
                <CloseIcon />
            </IconButton>
        ]} 
      />
    )
};

export default Snackbeer;