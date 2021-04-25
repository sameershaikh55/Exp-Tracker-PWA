import React, { useState, useContext } from "react";
// import IconButton from "@material-ui/core/IconButton";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import { GrMoreVertical } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

// IMPORTING GLOBAL STATE
import { GlobalState } from "../context/GlobalContext";

// IMPORTING TYPES
// import { ContextType } from "../types/type";

const History: React.FC = () => {
	// const [anchorEl, setAnchorEl] = useState<null>(null);

	const { transactions, deleteTransaction } = useContext(GlobalState);

	// const options = ["Edit", "Trash", "Delete"];

	// const open = Boolean(anchorEl);

	// const handleClick = (event) => {
	// 	setAnchorEl(event.currentTarget);
	// };

	// const handleClose = (data) => {
	// 	setAnchorEl(null);
	// };

	const deleteBtn = (id: number) => {
		deleteTransaction(id);
	};

	return (
		<>
			<div className="transaction_history">
				<h1>Transaction History</h1>
				{(transactions.length && (
					<div className="TH-body">
						{transactions.map((prev) => {
							const { id, description, amount, date } = prev;
							const sign = amount > 0 ? "+" : "-";
							return (
								<div key={id} className="each_transaction">
									<div className="EALeft_side">
										{/* <IconButton
									aria-label="more"
									aria-controls="long-menu"
									aria-haspopup="true"
									onClick={handleClick}
								>
									<GrMoreVertical />
								</IconButton>
								<Menu
									anchorEl={anchorEl}
									keepMounted
									open={open}
									onClose={handleClose}
									PaperProps={{
										style: {
											maxHeight: 48 * 4.5,	
											width: "20ch",
										},
									}}
								>
									{options.map((option) => (
										<MenuItem
											key={option}
											selected={option === "Pyxis"}
											onClick={() => handleClose(option)}
										>
											{option}
										</MenuItem>
									))}
								</Menu> */}
										<button
											onClick={() => deleteBtn(id)}
											style={{
												background: "transparent",
												border: "none",
												outline: "none",
												cursor: "pointer",
												fontSize: "22px",
												color: "#ff1515",
												paddingTop: "10px",
												paddingLeft: "8px",
												borderRadius: "50%",
											}}
										>
											<MdDelete />
										</button>
									</div>
									<div className="EARight_side">
										<div>
											<div className="desc">{description}</div>
											<div className="date"> {date} </div>
										</div>
										<div className="amount">
											{sign}${Math.abs(amount)}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				)) || <div className="noDataFound"> No History Found! </div>}
			</div>
		</>
	);
};

export default History;
