import { useContext, useState } from "react";
import SingleRange from "../../components/range/range";
import SettingsContext from "../../contexts/settings";

export default function SettingsPage() {
	const { settings, set_settings } = useContext(SettingsContext);
	const [speed, set_speed] = useState(settings);

	const handle_range_change = (name, value) => {
		set_speed((prev) => ({ ...prev, [name]: value[0] }));
	};

	const handle_form_submit = (event) => {
		event.preventDefault();
		set_settings(speed);
	};

	return (
		<>
			<h2>Settings</h2>
			<main>
				<section>
					<h4>Speed Settings</h4>

					<form onSubmit={handle_form_submit}>
						<div>
							<label>Duration of one unit</label>
							<small>
								How long does a dih should last in milliseconds? This forms the
								unit to set other durations.
							</small>
							<SingleRange
								label="dih"
								min={50}
								max={1000}
								initial={settings.dih}
								step={50}
								onChange={handle_range_change.bind(null, "dih")}
							/>
						</div>

						<div>
							<label>Units between each beeps</label>
							<small>
								The time interval between consecutive dih's and dah's
							</small>
							<SingleRange
								label="character"
								min={0}
								max={20}
								initial={settings.character}
								step={1}
								onChange={handle_range_change.bind(null, "character")}
							/>
						</div>

						<div>
							<label>Units between each alphabet</label>
							<small>
								Time interval between two english alphabet while playing morse
								sound
							</small>
							<SingleRange
								label="letter"
								min={1}
								max={20}
								initial={settings.letter}
								step={1}
								onChange={handle_range_change.bind(null, "letter")}
							/>
						</div>

						<div>
							<label>Units between each word</label>
							<small>
								Time interval that spearates the two consecutive words
							</small>
							<SingleRange
								label="word"
								min={1}
								max={20}
								initial={settings.word}
								step={1}
								onChange={handle_range_change.bind(null, "word")}
							/>
						</div>

						<button type="submit">Save Changes</button>
					</form>
				</section>
			</main>
		</>
	);
}
