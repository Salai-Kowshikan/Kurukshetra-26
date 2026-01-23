import about1 from "@/assets/ceg_logo.png";
import about2 from "@/assets/CTF1.png";
import about3 from "@/assets/logo.png";
import about4 from "@/assets/vyuhaa_logo.png";

const TITLES = [
	"COLLEGE OF ENGINEERING GUINDY",
	"CEG TECH FORUM",
	"KURUKSHETRA",
	"VYUHAA",
];

const IMAGES = [about1, about2, about3, about4];

const PARAGRAPHS = [
	"College of Engineering Guindy (CEG), recognized as Asia's oldest technical institution, stands as one of the nation's most prestigious and historic establishments. Located in the heart of Chennai, the college is equipped with world-class infrastructure and offers a diverse array of courses. With strong ties to industry, cutting-edge research opportunities, and a plethora of extracurricular activities, CEG empowers students to expand their knowledge and skill set. Upholding its legacy, the institution continues to nurture aspiring engineers and scholars, transforming them into highly skilled professionals.",
	"CEG Tech Forum, Anna University's premier ISO 9001:2015 certified student-run organization, was founded in 2006 to promote technical excellence and foster innovation among students. Serving as a platform for showcasing and enhancing technical skills, the forum organizes various events, workshops, and projects, encouraging students to work on real-world multidisciplinary challenges and solve complex engineering problems. With a focus on inspiring creativity and collaboration, the forum connects students with experts in the field, enabling networking and career growth in engineering and technology. Its unparalleled standards and initiatives make it a cornerstone of technological advancement within the CEG community.",
	"Kurukshetra is an international techno-management fest holding a UNESCO patronage. It was named after the apocalyptic battle between Kauravas and Pandavas in an ancient Indian epic, the Mahabharata. All the five Pandavas have different powers and skills which led them to win the battle. So, the different qualities of people will make this a perfect battle. But here, the battle is more interesting because it takes place with brains instead of swords. Its logo, the Cyclotron, symbolizes the celebration of the indomitable spirit of engineering and innovation. That was the battle fought with immense physical powers to conquer the territory but this is the battle of cognitive skills to win the tech world from which the tagline 'The Battle of Brains' was derived.",
	"Vyuhaa is a magnificent techno-management fest exclusively hosted for student of the University Department campuses of Anna University. This idea was set forth with the mission of celebrating the virtuoso of innovation and instilling an incandescent fervor for technology among incoming college freshmen.",
];
export default function About() {
	return (
		<section className="w-full py-12">
			<div className="max-w-5xl mx-auto px-4 space-y-8">
				{TITLES.map((title, i) => (
					/* Gradient border wrapper */
					<div
						key={i}
						className="rounded-xl p-[2px] bg-gradient-to-l from-[#6101FE] to-[#FF00B3]"
					>
						<article className="relative w-full rounded-xl p-12 bg-black/60 backdrop-blur-md">
							{/* Title */}
							<div className="flex justify-center -mt-6">
								<div
									className="px-5 py-1.5 rounded-full
									           bg-gradient-to-l from-[#6101FE] to-[#FF00B3]
									           text-white text-sm md:text-base
									           font-(family-name:--stalinist)"
								>
									{title}
								</div>
							</div>

							<div
								className={`mt-6 flex flex-col md:flex-row items-center gap-6 ${
									i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
								}`}
							>
								<div className="w-full md:w-1/2 flex items-center justify-center">
									<img
										src={IMAGES[i]}
										alt={title}
										className="w-full max-h-64 object-contain rounded"
									/>
								</div>

								<div className="w-full md:w-1/2 text-justify">
									<p className="text-base leading-relaxed text-white/90">
										{PARAGRAPHS[i]}
									</p>
								</div>
							</div>
						</article>
					</div>
				))}
			</div>
		</section>
	);
}
