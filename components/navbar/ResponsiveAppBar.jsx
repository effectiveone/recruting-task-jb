import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { KeyboardArrowDown, KeyboardArrowUp, NotificationIcon, SettingsIcon, FmdGoodIcon, DescriptionIcon, PieChartIcon }
  from "../../utils/Icons"
import Logo from "../../assets/logo.svg"
import AvatarThumbnail from "../../assets/man.png"

import Image from 'next/image'
import { useStyles } from "./StyleResponsiveAppBar"
import useDropdown from "../../hooks/useDropdown"

function ResponsiveAppBar() {
  const classes = useStyles()
  const [anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu]
    = useDropdown()

  const settings = ['Tutorials', 'Api documentation', 'Contant Longifleet support']
  const pages = [{
    component: <FmdGoodIcon className={classes.icon} />,
    title: 'Live tracking',
  },
  {
    component: <DescriptionIcon className={classes.icon} />,
    title: 'Reports',
  },
  {
    component: <PieChartIcon className={classes.icon} />,
    title: 'Dashboard',
  }
  ]

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl" sx={{ backgroundColor: "white" }}>
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Image alt="logo" src={Logo} width="400px" height="80px" />
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignSelf: 'center' }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              className={classes.icon}
              color="#1579C9"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"

              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'flex', md: 'none' },
                alignSelf: "center",
              }}
            >

              {pages.map((page, index) => (<>
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              </>
              ))}

            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Image alt="logo" src={Logo} width="200px" height="80px" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center", gap: "20px" }}>
            {pages.map((page, index) => (
              <React.Fragment key={index}>
                <IconButton sx={{ p: 0 }} color="#1579C9">
                  {page.component}
                </IconButton >

                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#1579C9', }}
                >
                  {page.title}
                </Button>
              </React.Fragment>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, gap: "20px" }}>
            <IconButton color="#1579C9">
              <NotificationIcon sx={{ p: 0 }} className={classes.icon} />
            </IconButton>
            <IconButton color="#1579C9">
              <SettingsIcon sx={{ p: 0 }} className={classes.icon} />
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} color="#1579C9">
                <Avatar alt="Remy Sharp" src={AvatarThumbnail} />
                {Boolean(anchorElUser) ? (
                  <KeyboardArrowUp />
                ) : (
                  <KeyboardArrowDown />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', width: "450px", display: 'flex', flexDirection: 'column', padding: "20px 20px 20px 20px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <MenuItem >
                  <Typography variant="h5" >Gina Petruci</Typography>
                </MenuItem>
                <MenuItem>

                  <Typography
                    sx={{ color: "grey" }}
                  >Last login: 22/22/2003</Typography>
                </MenuItem>
              </Box>
              <Divider />
              <Box
                sx={{ mt: '15px', display: 'flex', flexDirection: 'column', justifyContent: "left" }}
              >
                {settings.map((setting, index) => (
                  <MenuItem key={index}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
                <Box
                  sx={{ mt: '15px', width: "100%", border: "1px solid red", color: "red", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  Logout
                </Box>
              </Box>
            </Menu>
          </Box>


        </Toolbar>
      </Container >
    </AppBar >
  )
}
export default ResponsiveAppBar