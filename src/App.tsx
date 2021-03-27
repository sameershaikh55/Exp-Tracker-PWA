// IMPORTING COMPONENTS
import AccoutSummary from "./components/AccoutSummary";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import History from "./components/History";

// IMPORTING CSS
import "./style/sass/main.css";

// IMPORTING GLOBAL-PROVIDER
import { GlobalProvider } from "./context/GlobalContext";

function App() {
	return (
		<>
			<GlobalProvider>
				<div className="web_container">
					<div className="innerWeb_container">
						<Header />

						<div className="inner_body">
							<div className="left_side">
								<Balance />
								<AccoutSummary />
								<AddTransaction />
							</div>
							<div className="right_side">
								<History />
							</div>
						</div>
					</div>
				</div>
			</GlobalProvider>
		</>
	);
}

export default App;
