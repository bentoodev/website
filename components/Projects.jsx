import Image from "next/image";
import Link from "next/link";
const Projects = () => {
	return (
		<div className="container mx-auto">
			<div className="md:grid md:grid-cols-2">
				<div className="p-4 flex justify-center items-center">
					<p>
						I ran a small CNFT project called HIMA high school, which I was the
						co-founder and also developer for, throughout this project I learnt
						alot of new things. I built a website for this project using Python,
						Flask and Bootstrap. I also built multiple Discord bots that
						interact with a SQLite database via a API I built with FastAPI.
						<br />
						<br />
						Currently I&apos;m working on learning React, Next.js and
						Javascript. This site is built with React, NextJS, Tailwind and
						DaisyUI.
						<br />
						<br />
						You can find more of my projects on my{" "}
						<Link href="https://github.com/bentoodev">
							<a className="link link-primary">github</a>
						</Link>
					</p>
				</div>
				<div className="p-4">
					<Image
						src="/pixel-jeff-witch.gif"
						alt="Profile"
						height={250}
						width={400}
						layout="responsive"
						className="rounded-md"
					/>
				</div>
			</div>
		</div>
	);
};
export default Projects;
