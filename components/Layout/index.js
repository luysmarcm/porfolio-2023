import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
	return (
		<>
			<Header />
			<div className="max-w-max m-auto overflow-hidden w-full">
				{props.children}
			</div>
			<Footer />
		</>
	);
};

export default Layout;