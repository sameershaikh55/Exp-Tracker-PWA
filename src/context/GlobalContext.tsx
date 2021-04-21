import { createContext, useReducer } from "react";

// IMPORTING REDUCER
import GlobalReducer from "./GlobalReducer";

// IMPORTING TYPES
import { TransactionType, ProviderType, ContextType } from "../types/type";

const InitialState: TransactionType = {
	transactions: [
		// { id: 1, description: "Cash", amount: 100.0, date: "27/3/2021" },
	],
};

// CREATING CONTEXT
const GlobalState = createContext<Partial<ContextType>>({});

const GlobalProvider: React.FC<ProviderType> = ({ children }) => {
	const [state, dispatch] = useReducer(GlobalReducer, InitialState);

	const addTransaction = (transaction: TransactionType) => {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	};

	const deleteTransaction = (id: number) => {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
	};

	return (
		<GlobalState.Provider
			value={{
				transactions: state.transactions,
				addTransaction,
				deleteTransaction,
			}}
		>
			{children}
		</GlobalState.Provider>
	);
};

export { GlobalState, GlobalProvider };
