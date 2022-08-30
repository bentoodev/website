import heroImage from "../public/pixel_hero.gif";
const Hero = () => {
	return (
		<div
			className="hero min-h-screen"
			style={{ backgroundImage: `url(${heroImage.src})` }}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">Bento dev</h1>
					<p className="mb-5">
						Click the button to learn more about me and my projects.
					</p>
					<button
						className="btn btn-primary"
						onClick={(e) => {
							e.preventDefault();
							// Scroll to about component
							const about = document.getElementById("about");
							about.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Dig in
					</button>
				</div>
			</div>
		</div>
	);
};
export default Hero;
