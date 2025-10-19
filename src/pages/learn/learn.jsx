import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { MORSE_MAPPING } from "../../utils/convert";
import useMorseSound from "../../hooks/use-morse-sound/use-morse-sound";
import DotDash from "../../components/dot-dash/dot-dash";

export default function LearnPage() {
	const playMorse = useMorseSound();

	return (
		<>
			<h2>Learn Morse Code</h2>
			<main style={{ marginTop: "1rem", overflow: "auto" }}>
				<ul style={{ display: "flex", flexWrap: "wrap", gap: "1rem 0.5rem" }}>
					{Object.entries(MORSE_MAPPING)
						.filter((item) => item[0] !== " ")
						.map((item, index) => (
							<li
								key={index}
								style={{
									width: "220px",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between"
								}}
							>
								<div style={{display: "flex", flexWrap: "wrap"}}>
									<button
										style={{ marginRight: "0.25rem" }}
										onClick={playMorse.bind(null, item[1])}
									>
										<HiOutlineSpeakerWave size="1rem" />
									</button>
									<DotDash content={item[1]} />
								</div>
								<span>{item[0]}</span>
							</li>
						))}
				</ul>
			</main>
		</>
	);
}
