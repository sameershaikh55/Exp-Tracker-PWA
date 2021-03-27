import React, { useContext } from "react";

// IMPORTING GLOBAL STATE
import { GlobalState } from "../context/GlobalContext";

// IMPORTING TYPES
import { TransactionType } from "../types/type";

const Balance: React.FC = () => {
	const { transactions } = useContext<TransactionType>(GlobalState);

	// EXTRACT AMOUNTS FROM TRANSACTIONS
	const total: number[] = transactions.map((prev) => prev.amount);

	// TOTAL GIVEN ARRAY NUMBERS
	const filteredTotal: string = total
		.reduce((acc, item) => acc + item, 0)
		.toFixed(2);

	// CONVERT IT TO NUMBER
	const balanceColor: number = parseInt(filteredTotal);

	return (
		<div className="balance_section">
			<strong>Your Balance</strong>
			<h1 className={balanceColor >= 1 ? "P-balance" : "N-balance"}>
				${filteredTotal}
			</h1>
		</div>
	);
};

export default Balance;
