import "./style.css";

const class_name_mapping = {
	".": "dot-dash__span--dot",
	"-": "dot-dash__span--dash",
	"/": "dot-dash__span--space",
};

const color_mapping = {
	".": 0,
	"-": 1,
	"/": 2,
};

// colors = [dot-color, dash-color]
// content = space between letters = / and space between words = //
export default function DotDash({
	content,
	colors = [
		"var(--color-rich-black)",
		"var(--color-rich-black)",
		"transparent",
	],
}) {
	return (
		<p className="dot-dash">
			{content.split("//").map((word, index) => (
				<>
					{word.split("").map((item, i) => (
						<span
							key={`${index}-${i}`}
							className={`dot-dash__span ${class_name_mapping[item]}`}
							style={{
								backgroundColor: colors[color_mapping[item]],
								color: colors[color_mapping[item]],
							}}
						/>
					))}
					{index !== content.split("//").length - 1 && (
						<span
							className={`dot-dash__span dot-dash__span--gap`}
							style={{
								backgroundColor: colors[color_mapping["/"]],
								color: colors[color_mapping["-"]],
							}}
						>
							//
						</span>
					)}
				</>
			))}
		</p>
	);
}
