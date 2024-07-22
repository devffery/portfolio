import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import {
  faFigma,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
	const [letterClass, setLetterClass] = useState('text-animate');

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 4000);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			<div className='container about-page'>
				<div className='text-zone'>
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={['A','b','o','u','t', ' ', 'm', 'e']}
							idx={15}
						/>
					</h1>
					<p>
						Hello! My name is Samuel, and I'm a full-stack product developer 
						looking for a role in established IT companies with the opportunity
						to work with the latest technologies on challengling and diverse projects.	
					</p>
					<p>
						With a foundation built on self-taught knowledge, bootcamp experiences, 
						and college education, I've developed a strong skill set in
						frontend and backend development, UI design, UX design. 
						I'm proficient in technologies such as Html, CSS, Javascript, 
						Django, Node.js, ReactJS, Go and Figma, SQL, PostgreSQL
						and I'm eager to expand my expertise into areas like DevOps, Cloud Engineering.
					</p>
					<p>
						In my free time, I enjoy watching/discussing movies & TV shows, 
						which offers a refreshing break from coding and design. 
						With a strong foundation and continuous thirst for learning, 
						I aim to create impactful, user-centered solutions while balancing 
						my technical pursuits with love for cinema.
					</p>
	        </div>

	        <div className="stage-cube-cont">
	          <div className="cubespinner">
	            <div className="face1">
	              <FontAwesomeIcon icon={faFigma} color="#DD0031" />
	            </div>
	            <div className="face2">
	              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
	            </div>
	            <div className="face3">
	              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
	            </div>
	            <div className="face4">
	              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
	            </div>
	            <div className="face5">
	              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
	            </div>
	            <div className="face6">
	              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
	            </div>
	          </div>
	        </div>
	      </div>
	      <Loader type="pacman" />
    	</>
  	)
}

export default About
