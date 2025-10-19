import { createContext, useState } from "react";

const SettingsContext = createContext({
	dih: 100,
	character: 1,
	letter: 3,
	word: 7,
});

export function SettingsContextProvider({ children }) {
	const [settings, set_settings] = useState({
		dih: 100,
		character: 1,
		letter: 3,
		word: 7,
	});

	return (
		<SettingsContext.Provider value={{ settings, set_settings }}>
			{children}
		</SettingsContext.Provider>
	);
}

export default SettingsContext;
