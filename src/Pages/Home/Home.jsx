import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import HomeFeatures from "../../components/HomeFeatured/HomeFeatures";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import HomeDeals from "../../components/HomeDeals/HomeDeals";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import MetaData from "../../components/MetaData/MetaData";

export default function Home() {
  return (
    <>
      <MetaData title="Home Page" />
      <HomeSlider />
      <HomeFeatures />
      {/* <HomeCategories /> */}
      <HomeDeals />
      <FeaturedProducts />
    </>
  );
}
