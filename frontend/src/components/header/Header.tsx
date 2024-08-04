import { Avatar, Box, Card, IconButton, Tab, Tabs, Typography } from "@mui/material"
import Logo from "../../assets/Logo-1.png"
import React, { useState } from "react"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const NavList =[
    {
        id:1,
        title : "Home",
        link : ""
    },
    {
        id:2,
        title : "Restaurants",
        link : ""
    },
    {
        id:3,
        title : "Food Menu",
        link : ""
    },
    {
        id:4,
        title : "About Us",
        link : ""
    },
]


const Header = () => {
    const [value,setValue] = React.useState(0);
    const handleChanage = (event: React.SyntheticEvent, newValue:number) => {
        setValue(newValue)
    }
    return(
        <Card sx={{backgroundColor:"", paddingY:1, color:""}}>
            <Box sx={{maxWidth:"1200px",marginX:"auto" ,display:"flex", justifyContent:"space-between", alignItems:"center", gap:4}}>
                <Box sx={{display:"flex", alignItems:'center'}}>
                    <img src={Logo} alt="" className="h-8 w-16 object-cover" />
                </Box>
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChanage}
                    >
                        {
                         NavList.map((navItem, index) => (
                            <Tab label={`${navItem.title}`} sx={{color:""}}/>
                         ))   
                        }
                    </Tabs>
                </Box>
                <Box sx={{display:"flex", gap:2, alignItems:"center"}}>
                    <IconButton>
                        <SearchIcon className=""/>
                    </IconButton>
                    <IconButton>
                        <AddShoppingCartIcon className=""/>
                    </IconButton>
                    <Avatar src={Logo} sx={{boxShadow:"2px 2px 6px 0 #C7C9CE90"}}/>
                </Box>
            </Box>
        </Card>
    )
}
export default Header;