function NewsItem({ item }) {
  return (
    <li>
      <a className="hover:text-soft-orange mb-2 mt-[1.875rem] inline-block cursor-pointer text-xl font-bold transition-all duration-100">
        {item.title}
      </a>
      <p className="text-grayish-blue text-[0.9375rem] leading-relaxed">
        {item.description}
      </p>
    </li>
  );
}

export default NewsItem;
