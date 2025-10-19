import { useState } from "react";
import "./app.css";
import Modal from "./ui/modal/modal";
import WelcomeModal from "./ui/welcome-modal/welcome-modal";
import Sidebar from "./ui/sidebar/sidebar";
import SIDEBAR_CONFIG from "./config/sidebar";
import LearnPage from "./pages/learn/learn";
import PracticePage from "./pages/practice/practice";
import TranslatePage from "./pages/translate/translate";
import SendPage from "./pages/send/send";
import SpyToolsPage from "./pages/spy-tools/spy-tools";
import SettignsPage from "./pages/settings/settings";

const PAGE_MAP = {
	learn: LearnPage,
	practice: PracticePage,
	translate: TranslatePage,
	send: SendPage,
	"spy tools": SpyToolsPage,
	settings: SettignsPage,
};

function App() {
	const [show_welcome, set_show_welcome] = useState(true);
	const [page, set_page] = useState("learn");
	const PageComponent = PAGE_MAP[page];

	return (
		<>
			<Modal onClose={() => set_show_welcome(false)} isOpen={show_welcome}>
				<WelcomeModal />
			</Modal>

			<Sidebar config={SIDEBAR_CONFIG} active={page} onClick={set_page} />

			<main>
				<PageComponent />
			</main>
		</>
	);
}

export default App;
