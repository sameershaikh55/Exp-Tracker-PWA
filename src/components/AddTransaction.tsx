import React from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import { useHooks } from "../hooks/useHooks";

const AddTransaction: React.FC = () => {
	const {
		setSelectedDate,
		selectedDate,
		handleSubmit,
		description,
		setDescription,
		amount,
		setAmount,
	} = useHooks();

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

			<form onSubmit={handleSubmit}>
				<label htmlFor="descritpion">Description:</label>
				<br />
				<input
					type="text"
					id="descritpion"
					placeholder="Enter Description"
					value={description}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setDescription(event.target.value)
					}
				/>

				<br />
				<br />
				<label htmlFor="amount">Amount:</label>
				<br />
				<input
					type="number"
					id="amount"
					placeholder="Enter Amount"
					value={amount}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setAmount(Number(event.target.value))
					}
				/>

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
