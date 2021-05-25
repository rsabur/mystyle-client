import MenuPic from '../menu-pic.png'
import Menu from '@material-ui/core/Menu'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import { useState } from 'react'


function AppMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className="menu">
      <img src={MenuPic} alt="logo"
        style={{ width: '4%', borderRadius: '50%', margin: '0.7rem 0 0px -65rem' }}
        onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Button href="/myprofile">My Profile</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button href="/myoutfits">My Outfits</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button href="/mycloset">My Closet</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button>Logout</Button>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default AppMenu