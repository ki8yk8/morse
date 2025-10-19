import { useState } from "react";
import StegCloak from "stegcloak";

import "./style.css";

export default function SpyToolsPage() {
	const [stage, set_stage] = useState(0);
	const [data, set_data] = useState({
		secret: "",
		password: "",
		cover: "",
		spoofed: "",
	});
	const stegcloak = new StegCloak();

	const handle_stage_toggle = (target) => {
		set_data({
			secret: "",
			cover: "",
			spoofed: "",
		});
		set_stage(target);
	};

	const handle_text_on_textarea = (name, event) => {
		set_data((prev) => ({ ...prev, [name]: event.target.value }));
	};

	const handle_message_spoof = (event) => {
		event.preventDefault();
		console.log(stegcloak.hide(data.secret, data.password, data.cover))
	};

	const handle_reveal_message = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<h2>Secret Page for Spies</h2>
			<p>
				Cloak your secret message inside a normal looking text using zero-width
				characters.
			</p>
			<small>
				You can send the message in popular messaging apps like WhatsApp.
			</small>

			<main className="spy">
				<div className="spy__button">
					<button
						className={`u-plain ${stage === 0 ? "active" : ""}`}
						onClick={handle_stage_toggle.bind(null, 0)}
					>
						Hide the message
					</button>
					<button
						className={`u-plain ${stage === 1 ? "active" : ""}`}
						onClick={handle_stage_toggle.bind(null, 1)}
					>
						Reveal the message
					</button>
				</div>

				{stage === 0 && (
					<section>
						<form onSubmit={handle_message_spoof}>
							<div>
								<small className="u-font-weight-medium">Cover Text</small>
								<textarea
									placeholder="Something that you want everyone to see"
									onChange={handle_text_on_textarea.bind(null, "cover")}
								/>
							</div>
							<div>
								<small className="u-font-weight-medium">Secret Message</small>
								<textarea
									placeholder="The hidden message"
									onChange={handle_text_on_textarea.bind(null, "secret")}
								/>
							</div>
							<div>
								<small className="u-font-weight-medium">Pasword</small>
								<input
									placeholder="Super secret phrase"
									onChange={handle_text_on_textarea.bind(null, "password")}
								/>
							</div>

							<div>
								<button type="submit">Get spoofed message</button>
							</div>
						</form>
					</section>
				)}
				{stage === 1 && (
					<section>
						<form onSubmit={handle_reveal_message}>
							<div>
								<small className="u-font-weight-medium">Spoofed Message</small>
								<textarea
									placeholder="Message with hidden secret"
									onChange={handle_text_on_textarea.bind(null, "spoofed")}
								/>
							</div>
							<div>
								<small className="u-font-weight-medium">Pasword</small>
								<input
									placeholder="Super secret phrase"
									onChange={handle_text_on_textarea.bind(null, "password")}
								/>
							</div>
							<div>
								<button type="submit">Reveal the Secret</button>
							</div>
						</form>
					</section>
				)}
			</main>
		</>
	);
}
