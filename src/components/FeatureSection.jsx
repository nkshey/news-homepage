import Button from "./ui/Button";

function FeatureSection() {
  return (
    <section className="mb-16 lg:mb-0">
      <picture className="mb-[1.125rem] inline-block lg:mb-[1.875rem]">
        <source
          srcSet="./assets/images/image-web-3-desktop.jpg"
          alt="web 3.0 image"
          media="(min-width: 716px)"
        />
        <img src="./assets/images/image-web-3-mobile.jpg" alt="web 3.0 image" />
      </picture>

      <div className="lg:grid lg:grid-cols-2 lg:gap-[1.875rem]">
        <h1 className="mb-4 text-[2.625rem] font-extrabold leading-none lg:text-[3.5rem]">
          The Bright Future of Web 3.0?
        </h1>

        <div className="lg:flex lg:flex-col lg:items-start lg:justify-between">
          <p className="mb-[1.625rem] text-[0.9375rem] leading-relaxed text-dark-grayish-blue lg:mb-0">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <Button>Read more</Button>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
