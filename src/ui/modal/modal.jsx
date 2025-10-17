import { createPortal } from "react-dom";
import { AiOutlineCloseSquare } from "react-icons/ai";

import "./modal.css";

export default function Modal({ onClose, children, isOpen = false }) {
	if (!isOpen) return;

	return createPortal(
		<div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				height: "100vh",
				width: "100vw",
				zIndex: 10,
				backgroundColor: "transparent",
				backdropFilter: "blur(1.5px)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			className="modal__wrapper"
		>
			<section
				style={{
					border: "2px solid var(--color-rich-black)",
					padding: "0.5rem 1rem 1rem 1rem",
				}}
				className="modal"
			>
				<header
					style={{
						display: "flex",
						justifyContent: "flex-end",
					}}
				>
					<button className="u-plain" onClick={onClose}>
						<AiOutlineCloseSquare
							size="1.25rem"
							color="var(--color-red-pantone)"
						/>
					</button>
				</header>

				<main>{children}</main>
			</section>
		</div>,
		document.getElementById("modal-root")
	);
}
