import Logo from './components/Logo'
import Navigation from './components/Navigation'

export const metadata = {
	title: 'The Wild Oasis',
}

function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<header>
					<Logo />
					<Navigation />
				</header>
				<main>{children}</main>
				<footer>Copyright by The Wlid Oasis</footer>
			</body>
		</html>
	)
}

export default RootLayout
