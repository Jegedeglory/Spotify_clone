
import HomeIcon from '../components/compo/HomeIcon';
import HeartIcon from '../components/compo/HeartIcon';
import Library from '../components/compo/Library';
import Add from '../components/compo/Add';
import Search from '../components/compo/Search';

const Sidebar = () => {
  return (
      <nav className='sidebar'>
        <div className='sidebar-top-wrapper'>
            <div className='sidebar_top'>
                <a href="#Spotify" className='Spotify_logo'>
                    <img src="/Spotify.png" alt="Logo" className='logo-small'/>
                </a>
            </div>
            <ul className='ul'>
                <li>
                    <a href="#home" title='Home' className='tooltip homekey'>
                    <HomeIcon />Home
                    </a>
                </li>
                <li>
                    <a href="#search" title='Search' className='tooltip search'>
                    <Search />Search
                    </a>
                </li>
                <li>
                    <a href="#library" title='Library' className='tooltip library'>
                    <Library />Your Library
                    </a>
                </li>
                <div className='playlist_items'>
                <li>
                    <a href="#add" title='add' className='tooltip add'>
                    <div className='add_image'><Add /></div>create playlist
                    </a>
                </li>
                <li>
                    <a href="#heart" title='Heart' className='tooltip liked'>
                    <div className='liked_image'><HeartIcon /></div>Liked Songs
                    </a>
                </li>
                </div>

                <div className='lower_items'>
                <li>
                    <a href="#old_skool" title='old_skool' className='tooltip old_skool'>Afro Throwback</a>
                </li>
                <li>
                    <a href="#feature" title='feature' className='tooltip feature'>Featuring Burna</a>
                </li>
                <li>
                    <a href="#dime" title='Dime' className='tooltip Dime'>Love Dont Cost A Dime</a>
                </li>
                <li>
                    <a href="#chill" title='chill' className='tooltip chill'>Chill Your Mind</a>
                </li>
                <li>
                    <a href="#party" title='party' className='tooltip party'>Party Dey</a>
                </li>
                </div>
            </ul>
        </div>
      </nav>
  )
}

export default Sidebar
