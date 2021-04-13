import React, { useState, useContext } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";

// IMPORTING GLOBAL STATE
import { GlobalState } from "../context/GlobalContext";

// IMPORTING TYPES
import { TransactionType, Inputs } from "../types/type";

const AddTransaction: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const { register, handleSubmit, errors, reset } = useForm<Inputs>();

	const { addTransaction } = useContext<TransactionType>(GlobalState);

	const onSubmit = (data: Inputs) => {
		const date: string = selectedDate.toLocaleDateString();
		const newTransaction = {
			id: Math.floor(Math.random() * 1000000000),
			...data,
			amount: Number(data.amount),
			date,
		};

		addTransaction(newTransaction);

		setSelectedDate(new Date());

		reset();
	};

	return (
		<div className="addTransaction_section">
			<h2>Add Transaction:</h2>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker
					style={{ background: "white" }}
					autoOk
					variant="inline"
					inputVariant="outlined"
					label="Pick a Date"
					format="MM/dd/yyyy"
					value={selectedDate}
					InputAdornmentProps={{ position: "start" }}
					onChange={(date: any) => setSelectedDate(date)}
				/>
			</MuiPickersUtilsProvider>

			<br />
			<br />

			<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
				<label htmlFor="descritpion">Description:</label>
				<br />
				<input
					className={errors.description && "errorInput"}
					type="text"
					name="description"
					placeholder="Enter Description"
					ref={register({ required: true, minLength: 4, maxLength: 12, pattern: /^([^0-9]*)$/ })}
				/>
				<span className="errors">
					{errors.description &&
						errors.description.type === "required" &&
						"Description is required"}
					{errors.description &&
						errors.description.type === "minLength" &&
						"Minimum 4 Characters required"}
					{errors.description &&
						errors.description.type === "maxLength" &&
						"Maximum 12 Characters Allowed"}
					{errors.description &&
						errors.description.type === "pattern" &&
						"Numbers Not Allowed"}
				</span>

				<br />
				<br />
				<label htmlFor="amount">Amount:</label>
				<br />
				<input
					className={errors.amount && "errorInput"}
					type="number"
					name="amount"
					placeholder="Enter Amount"
					ref={register({ required: true, minLength: 1, maxLength: 12 })}
				/>
				<span className="errors">
					{errors.amount &&
						errors.amount.type === "required" &&
						"Amount is required"}
					{errors.amount &&
						errors.amount.type === "minLength" &&
						"Minimum 1 Digit required"}
					{errors.amount &&
						errors.amount.type === "maxLength" &&
						"Maximum 12 Digits Allowed"}
				</span>

				<br />
				<br />
				<Button type="submit" variant="contained">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default AddTransaction;
