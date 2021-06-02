import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { Planet } from 'react-planet'
import MenuPic from '../menu-pic.png'
// import Menu from '@material-ui/core/Menu'
// import Button from '@material-ui/core/Button'
// import MenuItem from '@material-ui/core/MenuItem'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import AccessibilitySharpIcon from '@material-ui/icons/AccessibilitySharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import MeetingRoomSharpIcon from '@material-ui/icons/MeetingRoomSharp';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';


function AppMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const history = useHistory()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  // const handleClose = () => { setAnchorEl(null) }
  const showProfilePage = () => { history.push('/myprofile') }
  const showCloset = () => { history.push('/mycloset') }
  const showOutfits = () => { history.push('/myoutfits') }
  const handleLogout = () => { history.push('/') }

  return (
    <div className="menu" >
      <Planet
        centerContent={<MenuSharpIcon style={{
					height: 50,
          margin: 10,
					width: 50,
					borderRadius: '50%',
					backgroundImage: `url(${MenuPic})`,
          color: 'gainsboro'
				}} />}
        hideOrbit
        autoClose
        orbitRadius={70}
        bounceOnClose
        rotation={168}
        friction={19}
        // the bounce direction is minimal visible
        // but on close it seems the button wobbling a bit to the bottom
        bounceDirection="BOTTOM"
      >
        <AccountCircleSharpIcon 
        color='primary'
        onClick={showProfilePage}
        style={{
					height: 37,
          color: '#ef9a9a',
					width: 37,
					borderRadius: '50%',
					backgroundColor: 'gainsboro',
          text: 'P'
				}} />
        <MeetingRoomSharpIcon 
        color='primary'
        onClick={showCloset}
        style={{
          color: '#ef9a9a',
					height: 37,
					width: 37,
					borderRadius: '50%',
					backgroundColor: 'gainsboro',
				}} />
        <AccessibilitySharpIcon 
        color='primary'
        onClick={showOutfits}
        style={{
          color: '#ef9a9a',
					height: 37,
					width: 37,
					borderRadius: '50%',
					backgroundColor: 'gainsboro',
				}} />
        <ExitToAppSharpIcon
        // color='primary'
        onClick={handleLogout}
        style={{
          color: '#ef9a9a',
					height: 37,
					width: 37,
					borderRadius: '50%',
					backgroundColor: 'gainsboro',
				}} />
        <div />
        <div />
        <div />
      </Planet>


      {/* <img src={MenuPic} alt="logo"
        style={{
          width: '4%',
          borderRadius: '50%',
          // margin: '0.7rem 0 0px -65rem',
          filter: 'contrast(129%)'
        }}
        onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={() => {handleClose(); showProfilePage()}} >
          My Profile
        </MenuItem>
        <MenuItem onClick={() => {handleClose(); showCloset()}} >
            My Closet
        </MenuItem>
        <MenuItem onClick={() => {handleClose(); showOutfits()}} >
          My Outfits
        </MenuItem>
        <MenuItem onClick={() => {handleClose(); handleLogout()}} >
          Logout
        </MenuItem>
      </Menu> */}
    </div>
  )
}

export default AppMenu