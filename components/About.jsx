import Image from "next/image";
const About = () => {
	return (
		<div className="container mx-auto" id="about">
			<div className="md:grid md:grid-cols-2">
				<div className="p-4">
					<Image
						src="/pixel-jeff-mario.gif"
						alt="Profile"
						height={250}
						width={400}
						layout="responsive"
						className="rounded-md"
					/>
				</div>
				<div className="p-4 flex justify-center items-center">
					<p>
						I&apos;m a college student based in Singapore who is passionate
						about software development. I wrote my first line of code in Java in
						the first year of college and I fell in love with it.
					</p>
				</div>
			</div>
		</div>
	);
};
export default About;
