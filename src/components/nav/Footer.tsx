import { SocialIcons } from '../../data/navData';
import SocialLinks from './SocialLinks';

const Footer = () => {
	return (
		<footer className='flex flex-col items-center space-y-2 p-4'>
			<p>® ariela in stem - arielainstem.com</p>
			<SocialLinks icons={SocialIcons} />
		</footer>
	);
};

export default Footer;
