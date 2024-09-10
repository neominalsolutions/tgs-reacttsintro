import { useReducer } from 'react';
import CouponRecuder, {
	CouponItem,
	CouponState,
} from '../../reducers/couponReducer';

function UseReducerDemo() {
	const initState: CouponState = { total: 0, quantity: 1, times: 1, items: [] };

	const [state, dispatch] = useReducer(CouponRecuder, initState);

	const addItem = () => {
		const item = {
			game: 'Ankara Gücü-Galatasaray',
			score: 'ms',
			rate: 10.2,
		};

		state.items.push(item);

		dispatch({ type: 'ItemAdded', payload: state });
	};

	return (
		<>
			{state.items.map((item: CouponItem, index: number) => {
				return (
					<div>
						{item.game} / {item.score}
					</div>
				);
			})}
			Kupon Fiyat: {state.total}
			<br></br>
			<button onClick={addItem}>Ekle</button>
			<button
				onClick={() => {
					state.quantity = 2;
					const newState = state;

					dispatch({
						type: 'QuantityChanged',
						payload: newState,
					});
				}}
			>
				Adet
			</button>
		</>
	);
}

export default UseReducerDemo;
