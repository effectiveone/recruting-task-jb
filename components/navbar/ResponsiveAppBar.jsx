import * as React from 'react'
import {
  MenuItem, Tooltip, Divider, Container, Menu, Typography, IconButton, Toolbar,
  Box, AppBar, Button
} from '@mui/material'
import { MenuIcon, KeyboardArrowDown, KeyboardArrowUp, NotificationIcon, SettingsIcon, FmdGoodIcon, DescriptionIcon, PieChartIcon }
  from "../../utils/Icons"
import Logo from "../../assets/logo.svg"
import AvatarThumbnail from "../../assets/man.png"
import Image from 'next/image'
import useDropdown from "../../hooks/useDropdown"

function ResponsiveAppBar() {
  const [anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu]
    = useDropdown()

  const settings = ['Tutorials', 'Api documentation', 'Contant Longifleet support']
  const pages = [{
    component: <FmdGoodIcon  sx={{ p: 0, color: '#1579C9' }}/>,
    title: 'Live tracking',
  },
  {
    component: <DescriptionIcon  sx={{ p: 0, color: '#1579C9' }}/>,
    title: 'Reports',
  },
  {
    component: <PieChartIcon  sx={{ p: 0, color: '#1579C9' }}/>,
    title: 'Dashboard',
  }
  ]

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl" sx={{ backgroundColor: "white" }}>
        <Toolbar disableGutters >
          <Box
            variant="h6"

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
          </Box>
          <Box
            variant="h5"

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
          </Box>
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
              <NotificationIcon sx={{ p: 0, color: '#1579C9' }}  />
            </IconButton>
            <IconButton color="#1579C9">
              <SettingsIcon sx={{ p: 0, color: '#1579C9' }}  />
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} color="#1579C9">
                <Image alt="Remy Sharp" src={AvatarThumbnail} />
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
                 Gina Petruci
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
                  <React.Fragment key={index}>
                    <MenuItem >
                      <Box textAlign="center">{setting}</Box>
                    </MenuItem>
                  </React.Fragment>

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