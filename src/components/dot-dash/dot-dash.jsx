import "./style.css";

const class_name_mapping = {
	".": "dot-dash__span--dot",
	"-": "dot-dash__span--dash",
	" ": "dot-dash__span--space",
};

const color_mapping = {
	".": 0,
	"-": 1,
	" ": 2,
};

// colors = [dot-color, dash-color]
export default function DotDash({
	content,
	colors = [
		"var(--color-rich-black)",
		"var(--color-rich-black)",
		"transparent",
	],
}) {
	return (
		<>
			{content.split("").map((item, index) => (
				<span
					key={index}
					className={`dot-dash__span ${class_name_mapping[item]}`}
					style={{
						backgroundColor: colors[color_mapping[item]],
						color: colors[color_mapping[item]],
					}}
				/>
			))}
		</>
	);
}
