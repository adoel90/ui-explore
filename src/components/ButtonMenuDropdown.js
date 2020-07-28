import React, { useState } from 'react'
import { Button, Box, Typography } from '@material-ui/core'
import { SelectMenu, SelectMenuItem } from './SelectDropdown'
import ButtonMenuDropdownWithNestedItem from './ButtonMenuDropdownWithNestedItem'

const ButtonMenuDropdown = props => {

    const [ isOpen, setOpen ] = useState(null);

    const handleOpen = e => {

        setOpen(e.currentTarget)
    };

    const handleClose = props => {

        setOpen(null)
    };


    return (
        <>
            <Box display='flex' justifyContent='center' mt={2}>
                <Button variant='contained' color='primary' 
                    onClick={handleOpen}                
                    onMouseEnter={handleOpen}                
                >
                    Button Menu Dropdown
                </Button>

                <SelectMenu
                    anchorEl={isOpen}
                    open={Boolean(isOpen)}
                    onClose={handleClose}               
                >
                    {dummy.map((item, i) => (
                        <SelectMenuItem key={i}>
                            <Typography variant='subtitle2' color='primary'>
                                { item.name }
                            </Typography>
                        </SelectMenuItem>
                    ))}

                </SelectMenu>           
            </Box>
            <ButtonMenuDropdownWithNestedItem />
        </>
    )
};

export default ButtonMenuDropdown;

const dummy = [
    {
        id: 1,
        name: "Master Gaji Pokok",
    },
    {
        id: 2,
        name: "Master Tunjangan Jabatan",
    },
    {
        id: 3,
        name: "Master Tunjangan Grading",
    },
    {
        id: 4,
        name: "Master Tunjangan Pisah Keluarga",
    },
    {
        id: 5,
        name: "Master Tunjangan Proyek",
    },
    {
        id: 6,
        name: "Region Proyek",
    },
    {
        id: 7,
        name: "Data Gaji Karyawan",
    },
    {
        id: 8,
        name: "Benefit",
       
    },
    {
        id: 9,
        name: "Laporan",
    },

]
