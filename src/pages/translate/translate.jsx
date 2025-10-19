import { useState } from "react";
import { english2Morse, morse2English } from "../../utils/convert";

import "./style.css";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import useMorseSound from "../../hooks/use-morse-sound/use-morse-sound";

export default function TranslatePage() {
	const [inputs, set_inputs] = useState({
		english: "Hello World",
		morse: english2Morse("Hello World"),
	});
	const playMorse = useMorseSound();

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
				<section>
					<small>English</small>
					<textarea
						value={inputs.english}
						onChange={handle_text_change.bind(null, "english")}
					/>
				</section>

				<section>
					<small>Morse</small>
					<textarea
						value={inputs.morse}
						onChange={handle_text_change.bind(null, "morse")}
					/>
					<footer>
						<button className="u-hover-no-scale">
							<HiOutlineSpeakerWave onClick={() => playMorse(inputs.morse)} />
						</button>
					</footer>
				</section>
			</main>
		</>
	);
}
