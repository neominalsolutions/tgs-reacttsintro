import { useState } from 'react';

interface Person {
	name: string;
	surname: string;
	company: string;
}

const persons: Person[] = [
	{ name: 'Ali', surname: 'Tan', company: 'TGS' },
	{ name: 'Ahmet', surname: 'Tan', company: 'THY' },
];

function UseEffectRefTypesDemo() {
	const [personList, setPersonList] = useState<Person[]>(persons);

	const addItem = () => {
		// 1. yöntem
		//personList.push({ name: 'Hande', surname: 'Tan', company: 'TGS' });
		// {...company} object spread operator
		// [...array] array spread operator.

		// setPersonList([...personList]);

		// 2.yöntem
		//append
		const data = [
			...personList,
			{ name: 'Hande', surname: 'Tan', company: 'TGS' },
		];

		// prepend
		const data2 = [
			{ name: 'Hande', surname: 'Tan', company: 'TGS' },
			...personList,
		];
		setPersonList(data2);

		console.log('persons', personList);
	};

	return (
		<>
			{personList.map((item: Person, index: number) => {
				return (
					<div key={index}>
						{item.name} {item.surname} / {item.company}
					</div>
				);
			})}

			<button onClick={addItem}>(+)</button>
		</>
	);
}

export default UseEffectRefTypesDemo;
