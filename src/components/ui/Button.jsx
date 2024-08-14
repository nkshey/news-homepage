function Button({ children }) {
  return (
    <button className="bg-soft-red hover:bg-very-dark-blue hover:text-off-white px-[1.875rem] py-[0.9375rem] text-sm font-bold uppercase tracking-[.28em] transition-all duration-100">
      {children}
    </button>
  );
}

export default Button;
