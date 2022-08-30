import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export default function Home() {
	return (
		<>
			<Head>
				<title>Bento dev</title>
			</Head>
			<Hero />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}
