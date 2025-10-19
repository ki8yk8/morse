import MenuItem from "./menu-item";

export default function Group({ details, onClick, active_item }) {
	return (
		<div>
			<small
				className="u-font-weight-medium u-uppercase"
				style={{
					color: "var(--color-dark-pastel-green)",
					marginLeft: "1rem",
				}}
			>
				{details.name}
			</small>

			<ul>
				{details.children.map((item, index) => (
					<li key={index}>
						<MenuItem
							details={item}
							onClick={onClick.bind(null, item["name"])}
							active={item["name"] === active_item}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
