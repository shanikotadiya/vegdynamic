import { useState } from "react";
import Link from "next/link";
import portfolioData from "../../data/portfolioData";
import { motion } from "framer-motion";

const portfolioItems = portfolioData;
const uniquePortfolioItem = portfolioItems.filter(
  (arr, index, self) =>
    index === self.findIndex((t) => t.img === arr.img && t.State === arr.State)
);

const NavHeader = () => {
  //  filterPortfolioItem
  const [filterPortfolioItem, setFilterPortfolioItem] =useState(uniquePortfolioItem);
  //   active button
  const [active, setIsActive] = useState("all");
  //   handleFilterPortfolio
  const handleFilterPortfolio = (category) => {
    setIsActive(category);
    if (category === "all") {
      setFilterPortfolioItem(uniquePortfolioItem);
    } else {
      const filterItems = portfolioItems.filter(
        (items) => items.category === category
      );
      setFilterPortfolioItem(filterItems);
    }
  };
  return (
    <>
      <section className="portfolio-area pt-110">
        <div className="container">
          <div className="row">
            {/* <!-- START PORTFOLIO FILTER AREA --> */}
            <div className="col-12">
              <div className="text-center">
                <div className="portfolio-filter mb-40">
                  <button
                    onClick={() => handleFilterPortfolio("all")}
                    className={`${active === "all" ? "active" : ""}`}
                  >
                    Datatable1
                  </button>
                  <button
                    onClick={() => handleFilterPortfolio("Industry")}
                    className={`${active === "Industry" ? "active" : ""}`}
                  >
                    Datatable2
                  </button>
                  <button
                    onClick={() => handleFilterPortfolio("Manufacturing")}
                    className={`${active === "Manufacturing" ? "active" : ""}`}
                  >
                    Datatable3
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- END PORTFOLIO FILTER AREA --> */}
          </div>

        </div>
      </section>
    </>
  );
};

export default NavHeader;
