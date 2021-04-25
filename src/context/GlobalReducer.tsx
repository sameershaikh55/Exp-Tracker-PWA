// IMPORTING TYPES
import { TransactionType } from "../types/type";

const GlobalReducer = (state: TransactionType, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case "ADD_TRANSACTION":
			return {
				...state,
				transactions: [payload, ...state.transactions],
			};
		case "DELETE_TRANSACTION":
			return {
				...state,
				transactions: state.transactions.filter((prev) => prev.id !== payload),
			};

		default:
			return state;
	}
};

export default GlobalReducer;
