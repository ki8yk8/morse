import Group from "./components/group";
import MenuItem from "./components/menu-item";
import "./style.css";

export default function Sidebar({ config }) {
	return (
		<aside className="sidebar">
			<header>{config.logo.small}</header>

			<nav className="sidebar__list__wrapper">
				<ul className="sidebar__list">
					{config.items.map((item, index) =>
						item.type === "group" ? (
							<li key={index}>
								<Group details={item} />
							</li>
						) : (
							<li key={index}>
								<MenuItem details={item} />
							</li>
						)
					)}
				</ul>
			</nav>

			<footer>{config.footer}</footer>
		</aside>
	);
}
