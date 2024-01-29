
import Down from '../components/compo/Down';
import Ellipse10 from '../components/compo/Eclipse10';
import Profile from '../components/compo/Profile';
import Black from '../components/compo/Black';
import Side from '../components/compo/Side';


const Header = () => {
  return (
    <div className='header_container'>
      <div className='profile'>
        <div className='change1'><Side /></div>
        <div className='change'><Side /></div>
      </div>
      <div className='Profile_jegs'>
        <Profile />
        <p>Jegs</p>
        <Down />
      </div>
      <div className='Good_morning'>
        <h2 className='Good_morning_sentence'>Good Morning</h2>
        <div className='musicals_pure'>
          <div className='musicals_div'><img src="/ChillYourMind.png" alt="ChillYourMind" /><p>
          Chill Your Mind</p></div>
          <div className='musicals_div'><img src="/PartyDey.png" alt="Party Dey" /><p>
          Party Dey</p></div>
          <div className='musicals_div'><img src="/PureVibes.png" alt="Pure Vibes" /><p>
          Pure Vibes</p></div>
          </div>
          <br />
          <div className='musicals_pure'>
          <div className='musicals_div'><img src="/Burna.png" alt="BurnaBoy" /><p>
          BurnaBoy-Love, Damini</p></div>
          <div className='musicals_div'><img src="/MoodyMix.png" alt="MoodyMix" /><p>
          Moody Mix</p></div>
          <div className='musicals_div'><img src="/Cat.png" alt="Cat" /><p>
          CatBurns- Collection</p></div>
          </div>
      </div>
       <div className='TopMix'>
        <h2 className='TopMix_sentence'>Your Top Mix</h2>
        <p className='see_all'>SEE ALL</p>
          <div className='whole_musical'>
        <div className='musicals_skool'>
          <div className='musicals_down'><img className='musical_img' src="/earlyMix.png" alt="earlyMix" /><p className='musicals_text'>
          2000's Mix <br />Nelly, Eminem, Rick Ross <br/> and more </p></div><div/>
          </div>
          <div className='musicals_skool'>
          <div className='musicals_down'><img className='musical_img' src="/AfrobeatsMix.png" alt="AfroBeat" /><p className='musicals_text'>
          Afrobeats Mix <br />Burna Boy, Asake, BNXN <br/> fka Buju and more</p></div>
          </div>
          <div className='musicals_skool'>
          <div className='musicals_down'><img className='musical_img' src="/HipHop.png" alt="Hiphop" /><p className='musicals_text'>
          Hip Hop Mix <br />Jack Harlow, Jay Rock, <br/>Drake and more</p></div>
          </div>
          <div className='musicals_skool'>

          <div className='musicals_down'><img className='musical_img' src= "/Pop.png" alt="Pop" /><p className='musicals_text'>
          Pop Mix <br /> Benny Blanco, Halsey, <br/>Mark Ronson and more</p></div>
          </div>
          <div className='musicals_skool'>

          <div className='musicals_down'><img className='musical_img' src="/oldskoolMix.png" alt="Oldies" /><p className='musicals_text'>
          90's Mix <br />Nelly Eminem, Rick Ross <br/>and more</p></div>
          </div>
          <div className='musicals_skool'>

          <div className='musicals_down'><img className='musical_img' src="/RecentMix.png" alt="Recent Mix" /><p className='musicals_text'>
          2010's Mix <br />Fireboy DML, Burna boy, <br/>Starboy and more</p></div>
          </div>

          </div>
          </div> 

    </div>
  )
};

export default Header
