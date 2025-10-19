export default function MenuItem({ details }) {
	const Icon = details.icon;

	return (
		<div className="sidebar__menu_item">
			{Icon && <Icon size="1.2rem" />}
			{!Icon && <p>{details.name.at(0)}</p>}
			<p className="u-capitalize">{details.name}</p>
		</div>
	);
}
