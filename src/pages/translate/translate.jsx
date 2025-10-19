import { useState } from "react";
import { english2Morse, morse2English } from "../../utils/convert";

import "./style.css";

export default function TranslatePage() {
	const [inputs, set_inputs] = useState({
		english: "Hello World",
		morse: english2Morse("Hello World"),
	});

	const handle_text_change = (type, event) => {
		const input = event.target.value;
		if (type === "morse") {
			set_inputs({
				morse: input,
				english: morse2English(input),
			});
		} else {
			set_inputs({
				morse: english2Morse(input),
				english: input,
			});
		}
	};

	return (
		<>
			<h2>Translate</h2>
			<main style={{ display: "flex" }} className="translate_page">
				<textarea
					value={inputs.english}
					onChange={handle_text_change.bind(null, "english")}
				/>
				<textarea
					value={inputs.morse}
					onChange={handle_text_change.bind(null, "morse")}
				/>
			</main>
		</>
	);
}
