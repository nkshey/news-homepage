import ArticlesItem from "./ArticlesItem";

const articlesData = [
  {
    id: 1,
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    image: "./assets/images/image-retro-pcs.jpg",
  },
  {
    id: 2,
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    image: "./assets/images/image-top-laptops.jpg",
  },
  {
    id: 3,
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    image: "./assets/images/image-gaming-growth.jpg",
  },
];

function Articles() {
  return (
    <section className="mb-[3.25rem] lg:mb-0">
      <div className="space-y-[2.125rem] md:flex md:justify-between md:space-y-0">
        {articlesData.map((item) => (
          <ArticlesItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default Articles;
