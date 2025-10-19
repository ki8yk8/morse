import {
	LuCog,
	LuFolderLock,
	LuHammer,
	LuLanguages,
	LuNotebookPen,
	LuSend,
} from "react-icons/lu";

const SIDEBAR_CONFIG = {
	id: "main-sidebar",
	logo: {
		large: (
			<h1>
				Morse<span className="u-color-red-pantone">.</span>
			</h1>
		),
		small: (
			<h1>
				M<span className="u-color-red-pantone">.</span>
			</h1>
		),
	},
	items: [
		{
			type: "group",
			name: "main menu",
			children: [
				{
					type: "menu-item",
					name: "learn",
					icon: LuNotebookPen,
				},
				// {
				// 	type: "menu-item",
				// 	name: "practice",
				// 	icon: LuHammer,
				// },
				{
					type: "menu-item",
					name: "translate",
					icon: LuLanguages,
				},
				{
					type: "menu-item",
					name: "send",
					icon: LuSend,
				},
				// {
				// 	type: "menu-item",
				// 	name: "spy tools",
				// 	icon: LuFolderLock,
				// },
			],
		},
		{
			type: "menu-item",
			name: "settings",
			icon: LuCog,
		},
	],
	footer: (
		<small
			className="u-text-center u-font-weight-medium"
			style={{ marginBottom: "0.5rem" }}
		>
			Enjoy Playing <span className="u-font-emoji">🎉</span>
		</small>
	),
};

export default SIDEBAR_CONFIG;
