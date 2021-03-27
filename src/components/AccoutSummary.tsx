import React, { useContext } from "react";

// IMPORTING GLOBAL STATE
import { GlobalState } from "../context/GlobalContext";

// IMPORTING TYPES
import { TransactionType } from "../types/type";

const AccoutSummary: React.FC = () => {
	const { transactions } = useContext<TransactionType>(GlobalState);

	// EXTRACT AMOUNTS FROM TRANSACTIONS
	const total: number[] = transactions.map((prev) => prev.amount);

	// FILTERING INCOME AND MAKE TOTAL
	const totalIncome: string = total
		.filter((prev) => {
			return prev >= 1;
		})
		.reduce((acc, item) => acc + item, 0)
		.toFixed(2);

	// FILTERING EXPENSE AND MAKE TOTAL
	const totalExpense: string = total
		.filter((prev) => {
			return prev <= 0;
		})
		.reduce((acc, item) => acc + item, 0)
		.toFixed(2);

	return (
		<div className="AS_Container">
			<div className="income">
				<h2>Income</h2>
				<h3 className="P-balance">{totalIncome}</h3>
			</div>
			<div className="expense">
				<h2>Expense</h2>
				<h3 className="N-balance"> {totalExpense.replace("-", "")} </h3>
			</div>
		</div>
	);
};

export default AccoutSummary;
