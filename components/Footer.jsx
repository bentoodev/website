import Link from "next/link";
const Footer = () => {
	return (
		<footer className="footer footer-center p-4 bg-base-300 text-base-content">
			<div>
				<p>
					All art used were from{" "}
					<Link href="https://www.artstation.com/pixeljeff1995">
						<a className="link link-secondary">Pixel Jeff</a>
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
