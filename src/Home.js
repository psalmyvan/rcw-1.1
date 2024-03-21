import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (

    <div className="App">
      <div className='nav'>
        {/* <div className='logo'></div> */}
        <a href="#home"><div className='logo' style={{float:'left'}}><img src={'https://static.wixstatic.com/media/bdab60_0dc115cae2144951ac15f01bf04f1fa2~mv2.png/v1/fill/w_114,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo.png'} alt='logo'></img></div></a>
        <ul>

          <Link to="/">
          <li><a href='/'>Home</a></li>
          </Link>
          <li>
            <div className="dropdown">
              <button className="dropbtn">Sports
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="/">Junior Tennis</a>
                <a href="/">Adult Tennis</a>
                <a href="/">Pickleball</a>
              </div>
            </div>
          </li>
          <li><a href="/">Summer Camps</a></li>
          <li><a href="/">Padel</a></li>
          <li><a href="/">Fitness</a></li>

          <Link to="/register">
          <li><a href='/register'>Become a Member</a></li>
          </Link>
          <Link to="/login">
          <li><a href='/login'>Login</a></li>
          </Link>




          {/* <li style={{float:'right'}}><a class="active" href="#login">Login</a></li> */}
        </ul>
        <sub>200 Running Pump Road, Lancaster, PA 17603  |  (717)-299-5631  |  frontdesk@rcwathleticclub.com</sub>
      </div>

      <header className="App-header">
        <div className='banner-box'>
          <h1>RCW Athletic Club</h1>
          <p>Welcome to our world-class tennis club that is quickly becoming the tennis home for beginner players, elite juniors, enthusiastic adults, and everyone in between!</p>
          <button><a href="#reservation" className="cta-btn">Membership</a></button>
          <button><a href="#reservation" className="cta-btn">Junior Tennis</a></button>
          <button><a href="#reservation" className="cta-btn">Adult Tennis</a></button>
          <button><a href="#reservation" className="cta-btn">Pickleball</a></button>
        </div>
      </header>
      
      <section className="Features">
        <h2>Key Features</h2>
        <div className="feature">
          <h2>Easy Booking</h2>
          <p>Book your court in just a few clicks.</p>
        </div>
        <div className="feature">
          <h2>Flexible Schedule</h2>
          <p>Choose your preferred time slot.</p>
        </div>
        <div className="feature">
          <h2>Online Payment</h2>
          <p>Securely pay for your reservation online.</p>
        </div>
      </section>
      <section id="reservation" className="CallToAction">
        <h2>Ready to Play?</h2>
        <p>Reserve your tennis court now and start playing!</p>
        <a href="#signup" className="signup-btn">Sign Up</a>
      </section>
      <footer className="Footer">
        <p>&copy; 2024 RCW Athletic Club. All rights reserved.</p>
      </footer>
    </div>

  );
}



export default App;

