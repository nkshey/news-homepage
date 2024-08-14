function NavbarItem({ name }) {
  return (
    <li>
      <a
        href="#"
        className="hover:text-soft-red sm:text-dark-grayish-blue text-[1.125rem] transition-all duration-100 sm:text-[0.9375rem]"
      >
        {name}
      </a>
    </li>
  );
}

export default NavbarItem;
