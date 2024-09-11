export type CouponItem = {
	id: number;
	name: string;
	score: string; // ms, ilk yarı
	rate: number; // oran
};

export type CouponState = {
	selectedId: number;
	items: CouponItem[];
	total: number;
	quantity: number; // adet
	times: number; // misli
};

export type CouponActionType =
	| 'QuantityChanged'
	| 'TimesChanged'
	| 'ItemAdded'
	| 'ItemDeleted'
	| 'ItemSelected';

export type CouponAction = {
	payload:
		| { selectedId: number }
		| { id: number; quantity: number }
		| { id: number; times: number }
		| CouponItem;

	type: CouponActionType;
};

function calculateTotal(state: CouponState): number {
	let sum = 0;
	state.items.forEach((item: CouponItem) => {
		sum += item.rate;
	});

	console.log('state.quantity', state.quantity);
	let total = sum * state.times * state.quantity;
	return total;
}

function CouponRecuder(state: CouponState, action: CouponAction) {
	if (action.type === 'QuantityChanged') {
		console.log('değişim', action.type);

		const payload = action.payload as { id: number; quantity: number };

		state.quantity = payload.quantity;
		state.total = calculateTotal(state);

		return {
			...state,
		};

		// hatalı kod, state async çalıştığında state önce güncelleyip sonra {... state} şeklinde virtual doma gönderiyoruz
		// return {
		// 	...state,
		// 	quantity: action.payload.quantity,
		// 	total: calculateTotal(state),
		// };
	} else if (action.type === 'TimesChanged') {
		const payload = action.payload as { id: number; times: number };

		state.times = payload.times;
		const total = calculateTotal(state);

		return {
			...state,
			total: total,
		};
	} else if (action.type === 'ItemAdded') {
		const payload = action.payload as CouponItem;

		console.log('ItemAdded', action);

		const exists = state.items.find((x) => x.id === payload.id);

		if (!exists) {
			state.items.push(payload);
		} else {
			console.log('aynısından var');
		}

		return {
			...state,
			total: calculateTotal(state),
		};
	} else if (action.type === 'ItemSelected') {
		const payload = action.payload as { selectedId: number };

		console.log('ItemAdded', action);

		state.selectedId = payload.selectedId;

		return {
			...state,
		};
	} else {
		return { ...state };
	}
}

export default CouponRecuder;
