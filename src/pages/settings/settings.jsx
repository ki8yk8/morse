import SingleRange from "../../components/range/range";

export default function SettingsPage() {
	const handle_range_change = (name, value) => {
		console.log(name, value[0]);
	};

	return (
		<>
			<h2>Settings</h2>
			<main>
				<section>
					<h4>Speed Settings</h4>
					<form>
						<div>
							<label>Duration of one unit</label>
							<small>
								How long does a dih should last in milliseconds? This forms the
								unit to set other durations.
							</small>
							<SingleRange
								lable="dih"
								min={50}
								max={1000}
								initial={100}
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
								lable="characters"
								min={0}
								max={20}
								initial={1}
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
								lable="letter"
								min={1}
								max={20}
								initial={3}
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
								lable="word"
								min={1}
								max={20}
								initial={7}
								step={1}
								onChange={handle_range_change.bind(null, "word")}
							/>
						</div>

						<button>Save Changes</button>
						<button>Cancel</button>
					</form>
				</section>
			</main>
		</>
	);
}
