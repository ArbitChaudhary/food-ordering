import {
   Avatar,
   Box,
   Button,
   Card,
   Divider,
   IconButton,
   Menu,
   MenuItem,
   Tab,
   Tabs,
} from '@mui/material';
import Logo from '../../assets/Logo-1.png';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { Link } from 'react-router-dom';

const NavList = [
   {
      id: 1,
      title: 'Home',
      link: '',
   },
   {
      id: 2,
      title: 'Restaurants',
      link: '',
   },
   {
      id: 3,
      title: 'Food Menu',
      link: '',
   },
   {
      id: 4,
      title: 'About Us',
      link: '',
   },
];

const Header = () => {
   const [value, setValue] = React.useState(0);
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   // const [loggedIn, setLoggedIn] = React.useState<boolean | undefined>(false);
   // const { loginWithRedirect, isAuthenticated, user, logout, isLoading } = useAuth0();
   const open = Boolean(anchorEl);

   const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };
   const HandleCloseMenu = () => {
      setAnchorEl(null);
   };
   const handleChanage = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };
   return (
      <Card sx={{ backgroundColor: '', paddingY: 1, color: '' }}>
         <Box
            sx={{
               maxWidth: '1200px',
               marginX: 'auto',
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
               gap: 4,
            }}
         >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
               <img src={Logo} alt="" className="h-8 w-16 object-cover" />
            </Box>
            <Box>
               <Tabs value={value} onChange={handleChanage}>
                  {NavList.map((navItem, index) => (
                     <Tab key={index} label={`${navItem.title}`} sx={{ color: '' }} value={index} />
                  ))}
               </Tabs>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
               <IconButton>
                  <SearchIcon className="" />
               </IconButton>
               {/* <Box>
                      <IconButton>
                         <AddShoppingCartIcon className="" />
                      </IconButton>
                      <IconButton
                         onClick={handleOpenMenu}
                         aria-controls={open ? 'account-menu' : undefined}
                      >
                         <Avatar src={user?.picture} sx={{ boxShadow: '2px 2px 6px 0 #C7C9CE90' }} />
                      </IconButton>
                   </Box> */}
               <Link to="/sign-in">
                  <Button variant="contained">Sign In</Button>
               </Link>
            </Box>
            <Menu
               anchorEl={anchorEl}
               open={open}
               id="account-menu"
               onClose={HandleCloseMenu}
               onClick={HandleCloseMenu}
               PaperProps={{
                  elevation: 0,
                  sx: {
                     overflow: 'hidden',
                     filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.32))',
                     mt: 1.5,
                     width: 200,
                     '&::before': {
                        content: '""',
                        position: 'absolute',
                        display: 'block',
                        right: 14,
                        top: 0,
                        height: 10,
                        width: 10,
                        transform: 'translateY(-50%) rotate(45deg)',
                        bgcolor: 'background.paper',
                        zIndex: 0,
                     },
                  },
               }}
               transformOrigin={{ horizontal: 'right', vertical: 'top' }}
               anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
               <MenuItem
                  onClick={HandleCloseMenu}
                  sx={{
                     display: 'flex',
                     flexDirection: 'row',
                     gap: 2,
                     alignItems: 'center',
                     fontWeight: 600,
                  }}
               >
                  <Avatar />
               </MenuItem>
               <Divider />
               <MenuItem
                  onClick={HandleCloseMenu}
                  sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}
               >
                  <IconButton>
                     <AddToPhotosIcon />
                  </IconButton>
                  Create Hotel
               </MenuItem>
               <Divider />
               <MenuItem
                  onClick={HandleCloseMenu}
                  sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}
               >
                  <IconButton>
                     <SettingsIcon />
                  </IconButton>
                  Settings
               </MenuItem>
               <Divider />
               <MenuItem
                  sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}
               >
                  <IconButton>
                     <LogoutIcon />
                  </IconButton>
                  Logout
               </MenuItem>
            </Menu>
         </Box>
      </Card>
   );
};
export default Header;
