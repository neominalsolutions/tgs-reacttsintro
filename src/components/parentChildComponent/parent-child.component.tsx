import { memo, useCallback, useState } from 'react';

type ChildProps = {
	items: any[];
	onDelete: (index: number) => void; // func props, index tabanlı
	onItemDelete: (item: any) => void; // object tabanlı versiyon
};

export function ChildComponentDemo({
	items,
	onDelete,
	onItemDelete,
}: ChildProps) {
	console.log('...rendering');

	return (
		<>
			{items.map((item: any, index: number) => {
				return (
					<div key={index}>
						{item.name}

						{/* <button
							onClick={() => {
								onDelete(index);
							}}
						>
							Index Sil
						</button>

						<button
							onClick={() => {
								onItemDelete(item);
							}}
						>
							Item Sil
						</button> */}
					</div>
				);
			})}
		</>
	);
}

export const MemoChild = memo(ChildComponentDemo);

// parent componentlerde bir state child component propslarına gönderiliyorsa child component render olur.

function ParentChildComponentDemo() {
	// child component ile alakası olmayan bir state title
	const [title, setTitle] = useState();

	const [items, setItems] = useState<any[]>([
		{ id: 1, name: 'Tan' },
		{ id: 2, name: 'Can' },
		{ id: 3, name: 'Hakan' },
	]);

	const onDelete = useCallback((index: number) => {
		console.log('index', index);

		items.splice(index, 1); //indeks üzerinden silme yaklaşımı
		setItems([...items]);
	}, []);

	const onItemDelete = useCallback((item: any) => {
		console.log('item', item);

		const filteredItems = items.filter((x) => x.id !== item.id);
		setItems(filteredItems);
	}, []);
	return (
		<>
			<p>Title: {title}</p>
			<input
				onChange={(e: any) => {
					setTitle(e.target.value);
				}}
			/>
			<br></br>
			<MemoChild
				items={items}
				onItemDelete={onItemDelete}
				onDelete={onDelete}
			/>
		</>
	);
}

export default ParentChildComponentDemo;
