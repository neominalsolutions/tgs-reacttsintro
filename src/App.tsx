import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UseEffectDemo from './components/useEffect/useeffect.demo';
import UseEffectRefTypesDemo from './components/useEffect/useEffectRefTypes.demo';

function App() {
	// props.name = 15;

	const [visible, setVisible] = useState(true);

	// unionTypes
	let number: string | number = 5;
	number = '5';

	return (
		<div className="App">
			{visible && <UseEffectRefTypesDemo />}

			<hr></hr>

			{visible && <UseEffectDemo />}

			<button
				onClick={() => {
					setVisible(!visible);
				}}
			>
				Göster/Gizle
			</button>
		</div>
	);
}

export default App;
