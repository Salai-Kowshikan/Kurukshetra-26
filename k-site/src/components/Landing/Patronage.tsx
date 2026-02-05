import { useState, useEffect } from "react";
import patronage1 from "@/assets/patronage-1.png";
import patronage2 from "@/assets/patronage-2.png";
import patronage3 from "@/assets/unesco-01.jpg.jpeg";
import ieee from "@/assets/ieee_logo.png";

const images = [
	{ src: patronage1, alt: "Patronage 1" },
	{ src: patronage2, alt: "Patronage 2" },
	{ src: patronage3, alt: "Patronage 3" },
	{ src: ieee, alt: "IEEE" },
];

export default function Patronage() {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState<number | null>(null);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	const openCard = (index: number) => {
		setActive(index);
		setOpen(true);
	};

	return (
		<section className="w-full py-12">
			<h3
				className="text-md z-10 text-center md:text-2xl py-4 font-extrabold font-(family-name:--wallpoet) bg-linear-to-r from-[#6101FE] to-[#FF00B3] bg-clip-text text-transparent"
			>
				OUR PATRONAGES AND CERTIFICATIONS
			</h3>
			<div className="max-w-6xl mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{images.map((img, i) => (
						<button
							key={i}
							onClick={() => openCard(i)}
							className="w-full h-48 flex items-center justify-center rounded-xl p-4 bg-white/5 border border-white/10 backdrop-blur-md hover:scale-105 transform transition-shadow duration-200 focus:outline-none"
							aria-label={`Open ${img.alt}`}
						>
							<img
								src={img.src}
								alt={img.alt}
								className="max-h-36 object-contain"
							/>
						</button>
					))}
				</div>
			</div>

			{open && active !== null && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
					onClick={() => setOpen(false)}
					role="dialog"
					aria-modal="true"
				>
					<div
						className="max-w-[90vw] max-h-[90vh] bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-4"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={() => setOpen(false)}
							className="mb-2 text-white text-xl float-right"
							aria-label="Close"
						>
							×
						</button>
						<div className="flex items-center justify-center">
							<img
								src={images[active].src}
								alt={images[active].alt}
								className="max-h-[80vh] max-w-[80vw] object-contain"
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
