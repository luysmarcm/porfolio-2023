import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
		<Html lang="en">
			<Head>
				<meta name="theme-color" content="#191919" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="icon" type="image/png" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
					rel="stylesheet"
					integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
					crossorigin="anonymous"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
