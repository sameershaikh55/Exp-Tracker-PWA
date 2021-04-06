import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import { GrMoreVertical } from "react-icons/gr";

// IMPORTING GLOBAL STATE
import { GlobalState } from "../context/GlobalContext";

// IMPORTING TYPES
import { TransactionType } from "../types/type";

const History: React.FC = () => {
	const { transactions } = useContext<TransactionType>(GlobalState);

	const options = ["Edit", "Trash", "Delete"];

	const ITEM_HEIGHT = 48;

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="transaction_history">
			<h1>Transaction History</h1>
			<div className="TH-body">
				{transactions.map((prev) => {
					const { id, description, amount, date } = prev;
					const sign = amount > 0 ? "+" : "-";
					return (
						<div key={id} className="each_transaction">
							<div>
								<div className="right">
									<div>
										<IconButton
											aria-label="more"
											aria-controls="long-menu"
											aria-haspopup="true"
											onClick={handleClick}
										>
											<GrMoreVertical />
										</IconButton>
										<Menu
											id="long-menu"
											anchorEl={anchorEl}
											keepMounted
											open={open}
											onClose={handleClose}
											PaperProps={{
												style: {
													maxHeight: ITEM_HEIGHT * 4.5,
													width: "20ch",
												},
											}}
										>
											{options.map((option) => (
												<MenuItem
													key={option}
													selected={option === "Pyxis"}
													onClick={handleClose}
												>
													{option}
												</MenuItem>
											))}
										</Menu>
									</div>
									<div>
										<div>{description}</div>
										<div> {date} </div>
									</div>
								</div>
								<p>
									{sign}${Math.abs(amount)}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default History;
