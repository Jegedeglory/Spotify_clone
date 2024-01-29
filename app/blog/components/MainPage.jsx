"use client"

import Next from '../components/compo/Next';
import Pause from '../components/compo/Pause';
import Prev from '../components/compo/Prev';
import Phone from '../components/compo/Phone';
import Vector from '../components/compo/Vector';
import Shuffle from '../components/compo/Shuffle';
import Volume from '../components/compo/Volume';
import Group5 from '../components/compo/Group5';
import Group from '../components/compo/Group';
import PauseButton from '../components/compo/PauseButton';
import MuteUnmute from '../components/compo/Mute_unmute';
import Favorite from "../components/compo/Favorite";
import PhoneToggle from "../components/compo/PhoneToggle";
import Group5Toggle from "../components/compo/Group5Toggle";
import VectorToggle from "../components/compo/VectorToggle";
import GroupToggle from "../components/compo/GroupToggle";
import ShuffleToggle from "../components/compo/ShuffleToggle";

const MainPage = () => {
  return (
    <div>
    <div className='playlist_menu'>
      <img src="/perfectly.png" alt="Mendes" className='Mendes_img' />
      <ul className='ul_down'>
        <li>
          Perfectly Wrong
        </li>
        <li className='mendes'>
          Shawn Mendes
        </li>
        </ul>
        <div className='menu_data'>
          <div className='Menu_components'><ShuffleToggle /></div>
          <div className='Menu_components'><Next /></div>
          <div className='Menu_components pause'><PauseButton /></div>
          <div className='Menu_components'><Prev /></div>
          <div className='Menu_components'><GroupToggle /></div>
        </div>


        <div className='Menu_data'>
          <div className='Menu_component'><VectorToggle /></div>
          <div className='Menu_component'><Group5Toggle/></div>
          <div className='Menu_component'><PhoneToggle /></div>
          <div className='Menu_component'><MuteUnmute /></div>
          <div className='Menu_components volumebar'></div>
        </div>
    <p className='time_begin'>0:24</p><div className='Menu_components playing_continues'>
    <div className='Menu_components playing'></div><p className='time_end'>3:12</p></div>
    </div>
    </div>
  )
}

export default MainPage
