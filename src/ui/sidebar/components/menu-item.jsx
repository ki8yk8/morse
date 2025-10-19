export default function MenuItem({ details, onClick, active = false }) {
	const Icon = details.icon;

	return (
		<button
			className={`sidebar__menu_item ${
				active ? "sidebar__menu_item--active" : ""
			} u-plain`}
			onClick={onClick}
		>
			{Icon && <Icon size="1.2rem" />}
			{!Icon && <p>{details.name.at(0)}</p>}
			<p className="u-capitalize">{details.name}</p>
		</button>
	);
}
