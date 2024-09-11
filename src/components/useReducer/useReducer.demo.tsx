import { useReducer, useState } from 'react';
import CouponRecuder, {
	CouponItem,
	CouponState,
} from '../../reducers/couponReducer';

function UseReducerDemo() {
	const games: CouponItem[] = [
		{
			id: 1,
			name: 'GS-FB Türkiye Kupası',
			score: 'MS',
			rate: 2.1,
		},
		{
			id: 2,
			name: 'BJK-TS Lig Maçı',
			score: 'İlk Yarı',
			rate: 3.2,
		},
	];

	const initState: CouponState = {
		total: 0,
		quantity: 1,
		times: 1,
		items: [],
		selectedId: -1,
	};

	const [state, dispatch] = useReducer(CouponRecuder, initState);
	const [selectedId, setSelectedId] = useState<number>();

	const addItem = () => {
		// const item = games.find((x) => x.id === selectedId) as CouponItem;

		const item = games.find((x) => x.id === state.selectedId) as CouponItem;

		console.log('item', item);

		dispatch({ type: 'ItemAdded', payload: item });
	};

	return (
		<>
			<p>Maçlar</p>
			<select
				onChange={(e: any) => {
					console.log('e', e);
					// setSelectedId(Number(e.target.value));
					dispatch({
						type: 'ItemSelected',
						payload: { selectedId: Number(e.target.value) },
					});
				}}
			>
				{games.map((item: CouponItem) => {
					return (
						<option key={item.id} value={item.id}>
							{item.name}
						</option>
					);
				})}
			</select>
			<hr></hr>
			<h1>Kuponum</h1>
			{state.items.map((item: CouponItem, index: number) => {
				return (
					<div key={item.id}>
						{item.name} / {item.score}
					</div>
				);
			})}
			Kupon Fiyat: {state.total.toFixed(2)}
			<br></br>
			<h2>İşlemler</h2>
			<button onClick={addItem}>Ekle</button>
			<button
				onClick={() => {
					dispatch({
						type: 'QuantityChanged',
						payload: { id: 1, quantity: 2 },
					});
				}}
			>
				Adet
			</button>
			<button
				onClick={() => {
					dispatch({
						type: 'TimesChanged',
						payload: { id: 1, times: 3 },
					});
				}}
			>
				Misli
			</button>
		</>
	);
}

export default UseReducerDemo;
