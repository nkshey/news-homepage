function CloseButton({ isOpen, setIsOpen }) {
  return (
    <button
      className={`fixed top-7 z-20 transition-all duration-500 ${isOpen ? "right-[1.25rem]" : "-right-full"}`}
      onClick={() => setIsOpen(false)}
    >
      <img src="./assets/images/icon-menu-close.svg" alt="close icon" />
    </button>
  );
}

export default CloseButton;
