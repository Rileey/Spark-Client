import { ArrowDropDown, KeyboardArrowDownOutlined } from '@material-ui/icons'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React, { useContext, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.modules.css'
import { AuthContext } from '../authContext/authContext'
import { logout } from '../authContext/authActions'
import { useNavigate } from 'react-router-dom'
import Media from "react-media"


const Navbar = ({ 
    searchTerm, 
    setSearchTerm, 
}) => {
    const history = useNavigate()

    

    const [isScrolled, setisScrolled] = useState(false);
    const {dispatch, user: userInfo} = useContext(AuthContext)
    const searchRef = useRef(null)
    

    window.onscroll = () => {
        setisScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }

  function setClicked() {
      dispatch(logout())
      history('/register')
  }


    const handleFocus = (e) => {
        e.preventDefault()
        searchRef.current.style.visibility = 'hidden';
        history('/search')
        
    }
    
    
    
  

    return (
    <div className={isScrolled ? 'scrolled' : 'navbar'}>
            <div className="nav-container">
                <div className="nav-left">
                    <Link to='/' style={{textDecoration: 'none', color: 'white', marginRight: '20px'}}>
                    <span className="logo">spark</span>
                    </Link>

                    
                    <div className="dropdown">
                        <span style={{textDecoration: 'none', color: 'white', marginLeft: '20px'}}><KeyboardArrowDownOutlined/></span>
                        <div className="dropdown-content">
                        <Link to='/series' style={{textDecoration: 'none', color: 'white', padding: '10px 0', marginLeft: '50px'}} className='mennu'>
                        <p>Shows</p>
                        </Link>
                        <Link to='/movies' style={{textDecoration: 'none', color: 'white', padding: '10px 0', marginLeft: '50px'}} className='mennu'>
                        <p>Movies</p>
                        </Link>
                        </div>
                    </div>

                    <div className="longbar">
                        <Link to='/series' style={{textDecoration: 'none', color: 'white', marginRight: '20px'}} className='mennu'>
                            <span>Shows</span>
                        </Link>
                        <Link to='/movies' style={{textDecoration: 'none', color: 'white', marginRight: '20px'}} className='mennu'>
                            <span>Movies</span>
                        </Link>
                        </div>
                    </div>
                <div className="nav-right mennu" >
                <>
         <Media query = '(min-width: 945px)'>
       {
        matches => {
          return matches 
          ? (
                    <div className="search-s" >
                        <div className="search">
                            <input className="searchs-input" type="text" name="" placeholder="Search..." id=""  
                            ref={searchRef} onClick={handleFocus}
                            />
                        </div>
                    </div> ) : (
                        <div className="search-s" >
                        
                        <div className="search">
                            <SearchRoundedIcon 
                            ref={searchRef} onClick={handleFocus} 
                            />
                        </div>
                    </div> 
                    )}}
                      </Media>
                      
        </> 
                         <img className="avatar" 
                         src={userInfo.profilePicture[0]?.profilePicture || '../stockphoto.jpeg'} 
                         alt="" srcset="" />
                     <div className="profile">
                         <ArrowDropDown className='icon'/>
                         <div className="options">
                             <Link to={`/account/${userInfo.username}`} style={{textDecoration: 'none', color: 'white'}}>
                                 <span className='drop-option'>Account</span>
                             </Link>
                             <span className='drop-option' onClick={setClicked}>Logout</span>
                         </div>
                     </div>

        
                </div>
                </div>
                </div>
            
    )
}

export default Navbar
