import { useRef } from 'react';

function UseRefDemo() {
	// elementin gerçek domdaki referansı için kullanırız.
	// document.getElementById('demo');
	const inputRef = useRef<HTMLInputElement>(null);
	// referans bağlnatısı

	console.log('...rendering');

	const clear = () => {
		if (inputRef.current) {
			inputRef.current.value = '';
		}
	};

	return (
		<>
			<input ref={inputRef} />
			<button onClick={clear}>Temizle</button>
		</>
	);
}

export default UseRefDemo;
