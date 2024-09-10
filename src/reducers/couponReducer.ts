export type CouponItem = {
	game: string;
	score: string; // ms, ilk yarı
	rate: number; // oran
};

export type CouponState = {
	items: CouponItem[];
	total: number;
	quantity: number; // adet
	times: number; // misli
};

export type CouponActionType =
	| 'QuantityChanged'
	| 'TimesChanged'
	| 'ItemAdded'
	| 'ItemDeleted';

export type CouponAction = {
	payload: CouponState;
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

		return {
			...state,
			quantity: action.payload.quantity,
			total: calculateTotal(state),
		};
	} else if (action.type === 'TimesChanged') {
		return {
			...state,
			times: action.payload.times,
			total: calculateTotal(state),
		};
	} else if (action.type === 'ItemAdded') {
		return {
			...state,
			items: state.items,
			total: calculateTotal(state),
		};
	} else {
		return { ...state };
	}
}

export default CouponRecuder;
