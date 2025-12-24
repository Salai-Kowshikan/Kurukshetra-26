import { useState, useEffect, useRef } from 'react';

export default function Countdown() {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	const [glitchActive, setGlitchActive] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const eventDate = new Date('2026-03-15T00:00:00').getTime();

		const timer = setInterval(() => {
			const now = new Date().getTime();
			const distance = eventDate - now;

			if (distance < 0) {
				clearInterval(timer);
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
				return;
			}

			setTimeLeft({
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
				minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((distance % (1000 * 60)) / 1000)
			});
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	// Purple cyberpunk glitch bursts (2-4 seconds interval, 300-500ms duration)
	useEffect(() => {
		const triggerGlitch = () => {
			setGlitchActive(true);
			const duration = 300 + Math.random() * 200; // 300-500ms
			setTimeout(() => setGlitchActive(false), duration);
		};

		const scheduleNextGlitch = () => {
			const delay = 2000 + Math.random() * 2000; // 2-4 seconds
			return setTimeout(triggerGlitch, delay);
		};

		let timeoutId = scheduleNextGlitch();

		return () => clearTimeout(timeoutId);
	}, [glitchActive]); // Re-schedule after each glitch completes

	const formatNumber = (num: number) => {
		return String(num).padStart(2, '0').split('');
	};

	const TimeBox = ({ value, label }: { value: number; label: string }) => {
		const digits = formatNumber(value);
		
		return (
			<div className="flex flex-col items-center">
				<div className="relative rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-transparent bg-linear-to-br from-purple-500 via-pink-500 to-purple-600 p-[1.5px] sm:p-0.5">
					<div 
						ref={containerRef}
						className={`bg-black rounded-lg sm:rounded-xl md:rounded-2xl px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-8 flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 relative overflow-hidden retro-scanline ${glitchActive ? 'glitch-active' : ''}`}
					>
						{/* Purple glitch overlay - applied via CSS pseudo-elements on .glitch class */}
						{digits.map((digit, idx) => (
							<span
								key={idx}
								className="glitch text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pixel-border"
								data-text={digit}
								style={{
									fontFamily: "'VT323', monospace",
									fontSize: 'clamp(2.5rem, 8vw, 5rem)',
									letterSpacing: '0.05em',
									color: '#ffffff',
									textShadow: '0 0 15px rgba(168, 85, 247, 0.8), 0 3px 0 rgba(168, 85, 247, 0.5)',
									imageRendering: 'pixelated'
								}}
							>
								{digit}
							</span>
						))}
					</div>
				</div>
				<p 
					className="text-white text-xs sm:text-sm md:text-lg lg:text-xl font-bold mt-2 sm:mt-2.5 md:mt-3 uppercase tracking-wide sm:tracking-wider"
					style={{
						fontFamily: "'Press Start 2P', monospace",
						fontSize: 'clamp(0.625rem, 2vw, 0.875rem)',
						textShadow: '0 2px 4px rgba(0,0,0,0.5)',
						imageRendering: 'pixelated'
					}}
				>
					{label}
				</p>
			</div>
		);
	};

	return (
		<section className="w-full py-8 sm:py-10 md:py-12 lg:py-20 flex flex-col items-centerpx-4 sm:px-6">
			<div className="grid grid-cols-2 gap-3 sm:gap-3 md:flex md:flex-wrap md:items-center md:justify-center md:gap-4 lg:gap-8 max-w-7xl">
				<TimeBox value={timeLeft.days} label="Days" />
				<span className="hidden md:inline-block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 md:mb-8">:</span>
				<TimeBox value={timeLeft.hours} label="Hours" />
				<span className="hidden md:inline-block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 md:mb-8">:</span>
				<TimeBox value={timeLeft.minutes} label="Mins" />
				<span className="hidden md:inline-block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 md:mb-8">:</span>
				<TimeBox value={timeLeft.seconds} label="Sec" />
			</div>
		</section>
	);
}
