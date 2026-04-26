import HeroVideo from "./components/heroVideo/HeroVideo";
import PhotoGrid from "./components/photoGrid/PhotoGrid";
import ProductCarousel from "./components/productCarousel/ProductCarousel";
import StackingImages from "./components/stackingImages/StackingImages";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <PhotoGrid /> 
      <StackingImages />
      <ProductCarousel />
    </>
  );
}
