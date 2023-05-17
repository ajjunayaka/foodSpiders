import food from '../food.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

	let [searchKey, setsearchKey] = useState("");

	return (
		<nav>
			<div className="logo">
				<Link to="/">
					<img src={food} alt="logo" />
				</Link>
				<h1> Food Spider</h1>
			</div>

			<div className="searchbar">
				<input type="search" value={searchKey} onChange={(e) => { setsearchKey(e.target.value); }} />
				<Link to={`/Search${searchKey}`}><button>search</button></Link>
			</div>

			<div className="navlinks">
				<Link to="/addfood">Add food</Link>
				<Link to="/orders">Orders</Link>
			</div>

		</nav>

	);
}

export default Navbar;


