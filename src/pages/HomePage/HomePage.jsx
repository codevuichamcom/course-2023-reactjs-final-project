import "./HomePage.css";
import { Banner, Offer, ProductListWithIntro, Slide } from "./components";
export const HomePage = () => {
  return (
    <>
      <main className="home-page__main">
        <Banner />
        <Slide />
        <ProductListWithIntro
          description="Popular Item in the market"
          title="Trending"
          name="Product"
        />
        <Offer />
        <ProductListWithIntro
          description="Popular Item in the market"
          title="Best"
          name="Sellers"
        />
        <ProductListWithIntro
          description="Popular Item in the market"
          title="Latest"
          name="News"
        />
      </main>
    </>
  );
};
