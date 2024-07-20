import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
	<div className='nav-bar'>
		<Link className='logo' to='/'>
			<img src={LogoS} alt="logo" />
			<img className="sub-logo" src={LogoSubtitle} alt="samuel" />
		</Link>
		<nav>
			<NavLink exact="true" activeclassname="active" to="/">
				<FontAwesomeIcon icon={faHome} color="#1d1d7e" />
			</NavLink>
			<NavLink exact="true" activeclassname="active" className="about-link" to="/about">
				<FontAwesomeIcon icon={faUser} color="#1d1d7e" />
			</NavLink>
			<NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
				<FontAwesomeIcon icon={faEnvelope} color="#1d1d7e" />
			</NavLink>
		</nav>
		<ul>
			<li>
				<a target="_blank" rel="noreferrer" href="https://ng.linkedin.com/in/samuel-ajibola-a26268289">
					<FontAwesomeIcon icon={faLinkedin} color="#1d1d7e" />
				</a>
			</li>
		</ul>

	</div> 
)

export default  Sidebar