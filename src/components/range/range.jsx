import { useState } from "react";
import { Range } from "react-range";

export default function SingleRange({
	label,
	min = 0,
	max = 100,
	initial = 0,
	step = 10,
	onChange,
}) {
	const [range_value, set_range_value] = useState([initial]);

	return (
		<Range
			label={label}
			step={step}
			min={min}
			max={max}
			values={range_value}
			onChange={(v) => {
				set_range_value(v);
				onChange?.(v);
			}}
			renderTrack={({ props, children }) => (
				<div
					{...props}
					style={{
						...props.style,
						height: "12px",
						width: "100%",
						border: "1px solid var(--color-rich-black)",
						position: "relative",
						padding: "2px",
					}}
				>
					<div
						style={{
							position: "absolute",
							left: "1px",
							top: "1px",
							width: `${((range_value[0] - min) / (max - min)) * 100}%`,
							height: "calc(100% - 2px)",
							backgroundColor: "var(--color-rich-black)",
						}}
					/>
					{children}
				</div>
			)}
			renderThumb={({ props }) => {
				const { key, ...rest_props } = props;

				return (
					<div
						{...rest_props}
						key={key}
						style={{
							...rest_props.style,
							height: "16px",
							width: "16px",
							backgroundColor: "var(--color-red-pantone)",
						}}
					/>
				);
			}}
		/>
	);
}
