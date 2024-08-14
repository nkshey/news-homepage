function ArticlesItem({ item }) {
  return (
    <article className="flex gap-6 md:max-w-[21.5625rem]">
      <img
        src={item.image}
        alt={item.title}
        className="max-w-[6.25rem] object-cover"
      />

      <div className="flex flex-col justify-between py-0.5">
        <span className="cursor-default select-none text-[2.125rem] font-bold leading-none text-soft-red">
          0{item.id}
        </span>
        <a className="w-fit cursor-pointer text-lg font-extrabold transition-all duration-100 hover:text-soft-red">
          {item.title}
        </a>
        <p className="text-[0.9375rem] text-dark-grayish-blue">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default ArticlesItem;
