import React, { useState } from 'react'
import { Button, Box, Typography } from '@material-ui/core'
import { SelectMenu, SelectMenuItem } from './SelectDropdown'

const ButtonMenuDropdownWithNestedItem = props => {

    const [ isOpen, setOpen ] = useState(null);

    const handleOpen = e => {

        setOpen(e.currentTarget)
    };

    const handleClose = props => {

        setOpen(null)
    };

    const [ isOpenNested, setOpenNested ] = useState(null);
    const [ listNested, setListNested ] = useState([])
    const handleOpenNested = (e, data) => {

        e.preventDefault()
        setOpenNested(e.currentTarget);
        setListNested(data.nested)
    };

    const handleCloseNested = props => {

        setOpenNested(null)
    };


    return (

        <Box display='flex' justifyContent='center' mt={2}>
            <Button variant='contained' color='primary' 
                onClick={handleOpen}                
                onMouseEnter={handleOpen}                
            >
                Button Menu Dropdown With Nested Item
            </Button>

            <SelectMenu
                anchorEl={isOpen}
                open={Boolean(isOpen)}
                onClose={handleClose}               
            >
                {
                    dummy.map((item, i) => (

                        <SelectMenuItem 
                            onClick={item.nested.length > 0 ? (e) => handleOpenNested(e, item) : handleClose}
                            key={i}
                        >
                            <Typography variant='subtitle2' color='primary'>
                                {item.name}
                            </Typography>                            
                        </SelectMenuItem>
                    ))
                }
               

            </SelectMenu>

            <SelectMenu
                anchorEl={isOpenNested}
                open={Boolean(isOpenNested)}
                onClose={handleCloseNested}               
            >
                {
                    listNested.map((item, i) => (

                        <SelectMenuItem                             
                            key={i}
                        >
                            <Typography variant='subtitle2' color='primary'>
                                {item.name}
                            </Typography>                            
                        </SelectMenuItem>
                    ))
                }
               

            </SelectMenu>
        </Box>
    )
};

export default ButtonMenuDropdownWithNestedItem;


const dummy = [
    {
        id: 1,
        name: "Master Gaji Pokok",
        nested: [],
    },
    {
        id: 2,
        name: "Master Tunjangan Jabatan",
        nested: [],
    },
    {
        id: 3,
        name: "Master Tunjangan Grading",
        nested: [],
    },
    {
        id: 4,
        name: "Master Tunjangan Pisah Keluarga",
        nested: [],
    },
    {
        id: 5,
        name: "Master Tunjangan Proyek",
        nested: [],
    },
    {
        id: 6,
        name: "Region Proyek",
        nested: [],
    },
    {
        id: 7,
        name: "Data Gaji Karyawan",
        nested: [],
    },
    {
        id: 8,
        name: "Benefit",
        nested: [
            {
                id: 1,
                name: "Lembur"
            },
            {
                id: 2,
                name: "THR"
            },
            {
                id: 3,
                name: "Bonus Tahunan"
            },
            {
                id: 4,
                name: "Tunjangan Cuti"
            },
            {
                id: 5,
                name: "Kesehatan & Pengobatan"
            },
            {
                id: 6,
                name: "Sumbangan"
            },

        ],
    },
    {
        id: 9,
        name: "Laporan",
        nested: [],
    },

]
