import React from 'react';

type ParentComponentProps = {
	children?: React.ReactNode; // özel bir keyword
	caption: string;
};

function ParentComponent({ children, caption }: ParentComponentProps) {
	return (
		<>
			<h1>{caption}</h1>

			<main>{children}</main>

			<hr></hr>
			<div>
				<button>Kaydet</button>
			</div>
		</>
	);
}

export default ParentComponent;
