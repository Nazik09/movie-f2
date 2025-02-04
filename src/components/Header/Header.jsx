

import Logo from '../../assets/Logo.svg'
import Icon from '../../assets/Icon.svg'
// import Header from '../Header/Header.css'
const Header = () => {
  return (
    <div className='app-container'>
      <div className='red'>
        <img src={Logo} alt="" />
        <p className='red1'>Movies</p>
        <p className='red2'>TV Shows</p>
        <p className='red3'>Suggest me</p>
        <img src={Icon} alt="" />

      </div>
    </div>
  )
}

export default Header