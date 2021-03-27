// IMPORTING TYPES
import { TransactionType } from "../types/type";

const GlobalReducer = (state: TransactionType, action: any) => {
	const { type, payload } = action;

	console.log(payload);

	switch (type) {
		case "ADD_TRANSACTION":
			return {
				...state,
				transactions: [payload, ...state.transactions],
			};

		default:
			return state;
	}
};

export default GlobalReducer;
