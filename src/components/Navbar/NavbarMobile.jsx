import NavbarLink from "./NavbarLink";

export default function NavbarMobile({ links, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t border-gray-200 shadow-inner">
      <div className="flex flex-col space-y-3 p-4">
        {links.map((link) => (
          <NavbarLink key={link.path} {...link} onClick={onClose} />
        ))}
      </div>
    </div>
  );
}
