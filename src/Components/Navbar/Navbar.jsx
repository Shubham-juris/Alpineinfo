import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Service', 'Jobs', 'Blog', 'Contact', '+1 780-287-8141'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Theme & breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  // Phones
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Tablets
  const isLaptop = useMediaQuery(theme.breakpoints.up('md')); // Laptops and larger

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'black', whiteSpace: 'nowrap' }}>
        Alpine Infotech
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: 'red',
                  whiteSpace: 'nowrap',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: '#fff' }}
        component="nav"
        sx={{
          transform: isLoaded ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.8s ease-out',
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
              <MenuIcon sx={{ color: '#283878' }} />
            </IconButton>
          )}

          <Typography
            variant={isTablet ? 'h5' : isLaptop ? 'h4' : 'h6'}
            fontWeight="bold"
            noWrap
            component="div"
            sx={{
              color: '#283878',
              flexGrow: 1,
              paddingLeft: isMobile ? '10px' : '18px',
              textAlign: isMobile ? 'center' : 'left',
              whiteSpace: 'nowrap', // Prevent wrapping
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Alpine Infotech
          </Typography>

          {/* Desktop & Tablet Nav */}
          {!isMobile && (
            <Box sx={{ display: 'flex' }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: '#283878',
                    fontSize: isTablet ? '1rem' : '1.2rem',
                    fontWeight: 'bold',
                    mx: isTablet ? 1 : 2,
                    whiteSpace: 'nowrap', // Prevent text wrapping
                    minWidth: 'fit-content', // Adjust button width dynamically
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
