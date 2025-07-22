import { useState } from 'react'

import Navbar from "./components/Navbar.jsx";

const App = () => {
	return(
		<div className="min-h-screen font-[Josefin_Slab] border-bottom bg-black px-20 text-white antialiased">
			<Navbar />
		</div>
	);
}

export default App;
