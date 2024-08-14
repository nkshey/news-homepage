function HamburgerButton({ setIsOpen }) {
  return (
    <button onClick={() => setIsOpen(true)}>
      <img src="./assets/images/icon-menu.svg" alt="menu icon" />
    </button>
  );
}

export default HamburgerButton;
