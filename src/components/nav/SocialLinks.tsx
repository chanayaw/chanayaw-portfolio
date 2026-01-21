import { SocialIcon } from '../../data/navData';

interface SocialLinksProps {
  icons: SocialIcon[];
}

const SocialLinks = ({ icons }: SocialLinksProps) => {
  return (
    <div className="flex items-center space-x-4">
      {icons.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="link h-4 w-4 stroke-0" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
