import Image from "next/image";
import Link from "next/link";
const Contact = () => {
	return (
		<div className="container mx-auto">
			<div className="md:grid md:grid-cols-2">
				<div className="p-4">
					<Image
						src="/pixel-jeff-night-shift.gif"
						alt="Profile"
						height={250}
						width={400}
						layout="responsive"
						className="rounded-md"
					/>
				</div>
				<div className="p-4 flex items-center">
					<p>
						Thanks for taking the time to look at my website. I hope you enjoy
						it.
						<br />
						<br />
						You can find me on{" "}
						<Link href="https://github.com/bentoodev">
							<a className="link link-primary">Github</a>
						</Link>
						,{" "}
						<Link href="https://discordapp.com/users/253798331862482945">
							<a className="link link-primary">Discord</a>
						</Link>{" "}
						and{" "}
						<Link href="https://twitter.com/Devbento">
							<a className="link link-primary">Twitter</a>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Contact;
