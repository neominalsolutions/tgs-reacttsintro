import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UseEffectDemo from './components/useEffect/useeffect.demo';
import UseEffectRefTypesDemo from './components/useEffect/useEffectRefTypes.demo';
import ParentChildComponentDemo from './components/parentChildComponent/parent-child.component';

function App() {
	// props.name = 15;

	const [visible, setVisible] = useState(true);

	// unionTypes
	let number: string | number = 5;
	number = '5';

	return (
		<div className="App">


			<ParentChildComponentDemo />

			<hr></hr>

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
