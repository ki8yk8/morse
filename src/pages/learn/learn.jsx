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
				<ul
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(4, 1fr)",
						gap: "0.5rem 1rem",
					}}
				>
					{Object.entries(MORSE_MAPPING)
						.filter((item) => item[0] !== " ")
						.map((item, index) => (
							<li
								key={index}
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<div style={{ display: "flex", flexWrap: "wrap" }}>
									<button
										style={{ marginRight: "0.25rem", whiteSpace: "nowrap" }}
										onClick={playMorse.bind(null, item[1])}
										className="u-hover-no-scale"
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
