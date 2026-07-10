import MenuIcon from '../../assets/icons/menu.svg';

interface MenuButtonProps {
  onClick: () => void;
}

const MenuButton = ({ onClick }: MenuButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open navigation"
      className="ring-brand border-default bg-surface text-foreground shadow-card hover:bg-surface-soft inline-flex h-10 w-10 items-center justify-center rounded-full border transition lg:hidden"
    >
      <MenuIcon className="h-5 w-5 stroke-current" aria-hidden="true" />
    </button>
  );
};

export default MenuButton;
