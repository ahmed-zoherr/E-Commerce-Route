import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
// import { getAllCategories } from "../../services/category-ser";
import Loading from "./../Loading/Loading";
import Categories from "./../../Pages/Categories/Categories";
import useCategories from "../../Hooks/useCategories";
import HomeCategoriesSkelton from "../Skelton/HomeCategoriesSkelton";
// import { CategoryContext } from "../../context/Categories.context";

export default function HomeCategories() {
  const { isError, isLoading, categories } = useCategories();
  // console.log("First Category Data:", categories[0]);

  if (isLoading) {
    return <HomeCategoriesSkelton />;
  }
  //* دا معناه الكود بتاع الجي اس اكس اللي تحت دا مش هيشتغل لان في هنا ريتيرن ....
  return (
    <>
      <section>
        <div className="container space-y-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold"> our categories</h2>
            <Link
              className={`flex gap-1.5 items-center text-primary-500 `}
              to={`/categories`}
            >
              <span>View all categories </span>
              <FontAwesomeIcon
                className="text-primary-500"
                icon={faArrowRight}
              />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-col-4 xl:grid-cols-6 gap-3.5 ">
            {categories?.map((cataegory) => (
              <Link
                to={`/category/${cataegory._id}`}
                key={cataegory._id}
                className="card flex shadow-xl bg-white p-6 rounded-lg flex-col items-center gap-4 hover:shadow-md hover:transition-shadow hover:duration-200"
              >
                <img
                  className="size-22 cursor-pointer rounded-full object-cover"
                  src={cataegory.image}
                  alt=""
                />
                <h3 className="">{cataegory.name} </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
