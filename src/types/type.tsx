// EACH TRANSACTION TYPE
export type EachTransaction = {
	id: number;
	description: string;
	amount: number;
	date: string;
};

export type TransactionType = {
	transactions: EachTransaction[];
};

export type ContextType = {
	transactions: EachTransaction[];
	addTransaction: (transaction: EachTransaction) => void;
	deleteTransaction: (id: number) => void;
};

// export type Action =
// 	| {
// 			type: "ADD_TRANSACTION";
// 			payload: EachTransaction[];
// 	  }
// 	| {
// 			type: "DELETE_TRANSACTION";
// 			payload: number;
// 	  };

// GLOBAL PROVIDER
export type ProviderType = {
	children: React.ReactNode;
};

// VALIDATION OBJECT TYPE
export type ValidateType = {
	desciptionV?: string;
	amountV?: string;
};

export type Inputs = {
	description: string;
	amount: number;
};
