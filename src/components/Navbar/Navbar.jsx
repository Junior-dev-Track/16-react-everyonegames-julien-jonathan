import { useState } from "react";
import { FaHome, FaStar, FaLightbulb, FaMoon } from "react-icons/fa";
import { MdFiberNew } from "react-icons/md";
import { IoIosHourglass } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    const bodyElement = document.querySelector("body");
    bodyElement.classList.toggle("light");
  };

  return (
		<>
			<div className='navbar'>
				<nav>
					<ul className='navbar__icons'>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) => (isActive ? 'active' : '')}
							>
								<FaHome />
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/best-of'
								className={({ isActive }) => (isActive ? 'active' : '')}
							>
								<FaStar />
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/new-releases'
								className={({ isActive }) => (isActive ? 'active' : '')}
							>
								<MdFiberNew />
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/next-releases"
								className={({ isActive }) => (isActive ? 'active' : '')}
							>
								<IoIosHourglass />
							</NavLink>
						</li>
					</ul>
				</nav>
				<button onClick={toggleDarkMode}>
					{darkMode ? <FaLightbulb /> : <FaMoon />}
				</button>
			</div>
		</>
	);
}

// new release/next release
