import Articles from "./components/articles/Articles";
import FeatureSection from "./components/FeatureSection";
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";

function App() {
  return (
    <main className="px-4 pb-7 pt-[5.25rem] sm:pt-7 lg:max-w-[69.375rem] lg:p-0">
      <Navbar />

      <div className="lg:mb-[4.5rem] lg:grid lg:grid-cols-[45.625rem_1fr] lg:gap-[1.875rem]">
        <FeatureSection />
        <News />
      </div>

      <Articles />
    </main>
  );
}

export default App;
