import MenuIcon from '../../assets/icons/menu.svg';

interface MenuButtonProps {
  onClick: () => void;
}
const MenuButton = ({ onClick }: MenuButtonProps) => {
  return (
    <MenuIcon
      className="stroke-foreground h-6 w-6 cursor-pointer fill-current lg:hidden"
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

export default MenuButton;
