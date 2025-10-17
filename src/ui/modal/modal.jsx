import { AiOutlineCloseSquare } from "react-icons/ai";

export default function Modal({ onClose, children, isOpen = false }) {
	if (!isOpen) return;

	return (
		<div
			style={{
				position: "absolute",
				height: "100vh",
				width: "100vw",
				zIndex: 10,
				backgroundColor: "transparent",
				backdropFilter: "blur(1.5px)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<section
				style={{
					border: "2px solid var(--color-rich-black)",
					padding: "0.5rem 1rem",
					maxWidth: "90vw",
					maxHeight: "90vh",
				}}
			>
				<header style={{
					display: "flex",
					justifyContent: "flex-end",
				}}>
					<button className="u-plain" onClick={onClose}>
						<AiOutlineCloseSquare size="1.25rem" color="var(--color-red-pantone)"/>
					</button>
				</header>

				<main>{children}</main>
			</section>
		</div>
	);
}
