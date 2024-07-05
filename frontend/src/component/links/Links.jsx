import './Links.css'
import MenuItem from '../menuItem/MenuItem.jsx'

function Links() {
  return (
    <div className='links'>
        <MenuItem linktext='Home' linkurl='/' />
        <MenuItem linktext='About' linkurl='/about' />
        <MenuItem linktext='Product' linkurl='/ProductDisplay' />
        <MenuItem linktext='Contact us' linkurl='/contact' />

    </div>
  )
}

export default Links