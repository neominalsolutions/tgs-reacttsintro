import { useEffect, useState } from 'react';

function UseEffectDemo() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log('il component doma basıldığı an veya state değiştiğinde');
		// çalışacak kod bloğu

		// clean up functions
		return () => {
			console.log('component domda çıktığında tetiklen');
		};
	}, []); // [] sayafadaki stateler

	useEffect(() => {
		if (count > 0) {
			console.log('her count değişiminde girer');
		}
	}, [count]);

	useEffect(() => {
		console.log('[] siz hali');
	});

    // tehlikeli kod blogu, kullanmıyoruz.
    
	// const showMessage = () => {
	// 	setInterval(() => {
	// 		console.log('time');
	// 	}, 1000);
	// };

	return (
		<>
			{/* <button onClick={showMessage}>show Mesaj</button> */}
			Use Effect Hook Sayac: {count}
			<button onClick={() => setCount(count + 1)}>(+)</button>
		</>
	);
}

export default UseEffectDemo;
