import { useState, useContext } from "react";

// IMPORTING GLOBAL STATE
import { GlobalState } from "../context/GlobalContext";

// IMPORTING TYPES
import { TransactionType } from "../types/type";

export const useHooks = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [description, setDescription] = useState<string>("");
	const [amount, setAmount] = useState<number>(0);
	// let dateFiltered: string = selectedDate.toLocaleDateString();

	const { addTransaction } = useContext<TransactionType>(GlobalState);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 1000000000),
			selectedDate,
			description,
			amount,
		};

		addTransaction(newTransaction);

		setSelectedDate(new Date());
		setDescription("");
		setAmount(0);
	};

	return {
		selectedDate,
		setSelectedDate,
		handleSubmit,
		description,
		setDescription,
		amount,
		setAmount,
	};
};
