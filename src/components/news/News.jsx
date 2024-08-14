import NewsItem from "./NewsItem";

const newsData = [
  {
    id: 1,
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: 2,
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: 3,
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

function News() {
  return (
    <section className="bg-very-dark-blue text-off-white mb-16 px-5 pb-6 pt-4 lg:mb-0 lg:px-6 lg:py-[1.625rem]">
      <h2 className="text-soft-orange -mb-1.5 cursor-default select-none text-[2.125rem] font-bold lg:text-[2.375rem]">
        New
      </h2>

      <ul className="divide-dark-grayish-blue space-y-[1.875rem] divide-y">
        {newsData.map((item) => (
          <NewsItem item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}

export default News;
