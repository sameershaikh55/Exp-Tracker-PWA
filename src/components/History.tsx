import React, { useContext } from "react";

// IMPORTING GLOBAL STATE
import { GlobalState } from "../context/GlobalContext";

// IMPORTING TYPES
import { TransactionType } from "../types/type";

const History: React.FC = () => {
	const { transactions } = useContext<TransactionType>(GlobalState);

	return (
		<div className="transaction_history">
			<h1>Transaction History</h1>
			<div className="TH-body">
				{transactions.map((prev) => {
					const { id, description, amount, date } = prev;

					console.log(date);

					const sign = amount > 0 ? "+" : "-";
					return (
						<div key={id} className="each_transaction">
							<div>
								<div> {description} </div>
								<p>
									{sign}${Math.abs(amount)}
								</p>
							</div>
							<div> {date} </div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default History;
