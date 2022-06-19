import React,{useState} from 'react';
import {AppBar,Toolbar,IconButton,MenuIcon,Typography,Button,Box,Drawer, Divider,List,
    ListItem,ListItemText,ListItemIcon
  } from "../../assets";
import { Link } from "gatsby";
import { HomeIcon,KeyboardBackspaceIcon,FamilyRestroom,SummarizeIcon,BookIcon,
    NewspaperIcon,AlarmOnIcon,LiveTvIcon,ReportIcon
} from '../../assets/icons';
import { logo } from '../../assets/images';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="inherit" elevation={0}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img
                src={logo}
                alt="Mission Ghar wapasi"
                className='logo__icon'
              />
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
                <Typography><Link className='navLink' to="/apply-gharwapasi">Apply Gharwapasi</Link></Typography>
                <Typography><Link className='navLink' to="/joinMission">Join Mission</Link></Typography>
                <Typography><Link className='navLink' to="/cases">Cases</Link></Typography>
                <Typography><Link className='navLink' to="/cases">Clubs</Link></Typography>
                
            </Box>
            <Button color="inherit" disabled>Login</Button>
          </Toolbar>
          <Drawer anchor="left" open={isDrawerOpen} onClose={()=>{setIsDrawerOpen(false)}}>
            <Box width='250px'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img
                src={logo}
                alt="The mission Gharwapasi"
                className="logo__icon"
              />
            </Typography>
            <Divider/>
            <List>
              <ListItem>
                <ListItemIcon sx={{maxWidth:"40px"}}>
                  <HomeIcon color='primary'/>
                </ListItemIcon>
                <ListItemText ><Typography><Link to="/cases" className='mobileNavLink'>Home</Link></Typography></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{maxWidth:"40px"}}>
                <HomeIcon color='primary'/><KeyboardBackspaceIcon color='primary'/>
                </ListItemIcon>
                <ListItemText ><Typography><Link to="/cases" className='mobileNavLink'>Apply Gharwapasi</Link></Typography></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{maxWidth:"40px"}}>
                  <FamilyRestroom style={{color:"orange"}}/>
                </ListItemIcon>
                <ListItemText ><Typography><Link to="/cases" className='mobileNavLink'>Marriage Consultation</Link></Typography></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{maxWidth:"40px"}}>
                  <SummarizeIcon color='error'/>
                </ListItemIcon>
                <ListItemText ><Typography><Link to="/cases" className='mobileNavLink'>Cases</Link></Typography></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{maxWidth:"40px"}}>
                  <BookIcon color='info'/>
                </ListItemIcon>
                <ListItemText ><Typography><Link to="/cases" className='mobileNavLink'>Blogs</Link></Typography></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{maxWidth:"40px"}}>
                  <NewspaperIcon color='primary'/>
                </ListItemIcon>
                <ListItemText ><Typography><Link to="/cases" className='mobileNavLink'>Announcements</Link></Typography></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{maxWidth:"40px"}}>
                  <ReportIcon color="error"/>
                </ListItemIcon>
                <ListItemText ><Typography><Link to="/cases" className='mobileNavLink'>Report Victim</Link></Typography></ListItemText>

              </ListItem>
              
              <ListItem>
                <ListItemIcon sx={{maxWidth:"40px"}}>
                  <AlarmOnIcon color='error'/>
                </ListItemIcon>
                <ListItemText ><Typography><Link to="/cases" className='mobileNavLink'>Maulan's ThugLife</Link></Typography></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{maxWidth:"40px"}}>
                  <LiveTvIcon color='primary'/>
                </ListItemIcon>
                <ListItemText ><Typography><Link to="/cases" className='mobileNavLink'>Gharwapasi Testimonial</Link></Typography></ListItemText>
              </ListItem>
            </List>
            </Box>
          </Drawer>
        </AppBar>
      </Box>
    </nav>
    </div>
  )
}

export default Navbar