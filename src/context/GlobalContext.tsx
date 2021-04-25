import { createContext, useReducer } from "react";

// IMPORTING REDUCER
import GlobalReducer from "./GlobalReducer";

// IMPORTING TYPES
import { ProviderType, ContextType, EachTransaction } from "../types/type";

const InitialState: ContextType = {
	transactions: [],
	addTransaction: (transaction: EachTransaction) => {},
	deleteTransaction: (id: number) => {},
};

// CREATING CONTEXT
const GlobalState = createContext(InitialState);

const GlobalProvider: React.FC<ProviderType> = ({ children }) => {
	const [state, dispatch] = useReducer(GlobalReducer, InitialState);

	const addTransaction = (transaction: EachTransaction) => {
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
