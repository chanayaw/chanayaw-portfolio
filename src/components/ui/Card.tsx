interface CardProps {
  heading: string;
  content: string;
  href?: string;
  linkText?: string;
}

const Card = ({ heading, content, href, linkText }: CardProps) => {
  return (
    <div className="border-default bg-card shadow-card hover:shadow-pop max-h-70 min-h-50 w-80 space-y-4 rounded-xl border p-5">
      <p className="text-lg font-bold">{heading}</p>
      <p className="text-subtle">{content}</p>

      {href && (
        <div className="flex flex-row justify-end">
          <a href={href} className="text-link inline-flex underline hover:brightness-110">
            {linkText}
          </a>
        </div>
      )}
    </div>
  );
};

export default Card;
