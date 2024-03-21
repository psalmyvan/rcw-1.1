import './Home.css';
import rcwLogo from './RCW-logo-white2.png';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='Login'>

        <div className="nav">
            <div className="logo">
            <img src={rcwLogo} height="100px" alt='logo'></img>
            </div>
        </div>
        <div className="flex-container">
            <div className="left-nav">1</div>
        
            <div className="bubble">
                <h1>Home</h1>
                <h3>Hello, Laura</h3>
                <div className="act">
                <div className="act-list">Reserve a Court</div>
                <div className="act-list">Apply for Training Camp</div>
                <div className="act-list">Schedule a Tour</div>
                </div>
            </div>

            <div className="upcoming">
            <h2>Upcoming</h2>
            <h2>Events</h2>
            <div className="eve">
                <div className="eve-list">Junior Division Tennis Singles</div>
                <div className="eve-list">Junior Division Tennis Doubles</div>
                <div className="eve-list">Adult Division Tennis Singles</div>
                <div className="eve-list">Adult Division Tennis Doubles</div>
            </div>
            </div>

        </div>

        <Link to="/">
          <li><button>Go Back</button></li>
        </Link>
        
    </div>
  );
}

export default Login;


