import { useMemo, useState } from 'react';

function UseMemoDemo() {
	const [source, setSource] = useState<number>(0);
	const [destination, setDestination] = useState<number>(0);
	const calculation = () => {
		console.log('...calculating');

		return 100;
	};
	const calculationValue = useMemo(() => calculation(), [destination]);
	console.log('calculationValue', calculationValue);
	return (
		<>
			<p>Sonuc: {calculationValue}</p>

			<label>Enlem</label>
			<input
				onChange={(e: any) => {
					setSource(e.target.value);
				}}
			/>
			<br></br>
			<label>Boylam</label>
			<input
				onChange={(e: any) => {
					setDestination(e.target.value);
				}}
			/>
		</>
	);
}

export default UseMemoDemo;
