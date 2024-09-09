import { useState } from 'react';

type CounterProps = {
	count?: number;
};

function CounterSample({ count }: CounterProps) {
	const [counter, setCounter] = useState<number | undefined>(count);

	const increase = (): void => {
		if (counter !== undefined) {
			setCounter(counter + 1);
			console.log('counter', counter);
		}
	};

	const reset = (): void => {
		setCounter(0);
	};

	return (
		<>
			{' '}
			{counter}
			<button onClick={increase}>(+)</button>
			<button onClick={reset}>Reset</button>
		</>
	);
}

export default CounterSample;
