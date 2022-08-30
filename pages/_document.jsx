import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html data-theme="dracula" className="scroll-smooth">
			<Head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Fira+Sans&display=optional"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/bento_favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/bento_favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/bento_favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/bento_favicon/site.webmanifest" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
