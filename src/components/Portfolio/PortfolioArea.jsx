import { useState } from "react";
import Link from "next/link";
import portfolioData from "../../data/portfolioData";
import { motion } from "framer-motion";

// const portfolioItems = portfolioData;
// const uniquePortfolioItem = portfolioItems.filter(
//   (arr, index, self) =>
//     index === self.findIndex((t) => t.img === arr.img && t.State === arr.State)
// );

const PortfolioArea = () => {
  const itemsPerPage = 6; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate total pages
  const totalPages = Math.ceil(portfolioData.length / itemsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = portfolioData.slice(startIndex, endIndex);

  // //  filterPortfolioItem
  // const [filterPortfolioItem, setFilterPortfolioItem] =
  //   useState(uniquePortfolioItem);
  // //   active button
  // const [active, setIsActive] = useState("all");
  // //   handleFilterPortfolio
  // const handleFilterPortfolio = (category) => {
  //   setIsActive(category);
  //   if (category === "all") {
  //     setFilterPortfolioItem(uniquePortfolioItem);
  //   } else {
  //     const filterItems = portfolioItems.filter(
  //       (items) => items.category === category
  //     );
  //     setFilterPortfolioItem(filterItems);
  //   }
  // };
  return (
    <div>
      <section className="portfolio-area pt-110 pb-110">
        <div className="container">
          {/* <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="portfolio-filter mb-40">
                  <button
                    onClick={() => handleFilterPortfolio("all")}
                    className={`${active === "all" ? "active" : ""}`}
                  >
                    All Works
                  </button>
                  <button
                    onClick={() => handleFilterPortfolio("Industry")}
                    className={`${active === "Industry" ? "active" : ""}`}
                  >
                    Industry
                  </button>
                  <button
                    onClick={() => handleFilterPortfolio("Manufacturing")}
                    className={`${active === "Manufacturing" ? "active" : ""}`}
                  >
                    Manufacturing
                  </button>
                  <button
                    onClick={() => handleFilterPortfolio("RennovaTion")}
                    className={`${active === "RennovaTion" ? "active" : ""}`}
                  >
                    Rennova tion
                  </button>
                  <button
                    onClick={() => handleFilterPortfolio("MaterialsMaking")}
                    className={`${
                      active === "MaterialsMaking" ? "active" : ""
                    }`}
                  >
                    Materials Making
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          <motion.div layout id="portfolio-grid" className="row">
            {currentData.map((portfolio) => (
              <motion.div
                key={portfolio.id}
                className="col-lg-4 col-md-6"
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="portfolio-item mb-30">
                  <div className="portfolio-wrapper">
                    <div className="portfolio-image w-img">
                      <img src={`${portfolio.img}`} alt={portfolio.title} />
                    </div>
                    <div className="portfolio-caption">
                      <h6>{portfolio.title}</h6>
                      <p>{portfolio.company}</p>
                      {/* <p>{portfolio.year}</p> */}
                      <p>{portfolio.location}</p>
                    </div>
                    <div className="portfolio-caption-top">
                      <h6>{portfolio.title}</h6>
                      <p>{portfolio.company}</p>
                      {/* <p>{portfolio.year}</p> */}
                      <p>{portfolio.location}</p>
                    </div>
                    {/* <div className="portfolio-caption-bottom">
                      <Link href="/project-details">
                        <a>
                          <i className="fa-light fa-arrow-right-long"></i>
                        </a>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* <div className="more-pt-button text-center mt-10">
            <Link href="#">
              <a className="tp-btn">
                Load More <i className="fa-light fa-plus"></i>
              </a>
            </Link>
          </div> */}
          <div className="tp-pagination">
            <nav className="d-flex justify-content-end">
              <ul>
                <li>
                  <a
                    onClick={() =>
                      setCurrentPage(
                        currentPage != 1 ? currentPage - 1 : currentPage
                      )
                    }
                  >
                    <i className="far fa-angle-left"></i>
                  </a>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index + 1}>
                    <span
                      className={currentPage == index + 1 ? "current" : ""}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </span>
                  </li>
                ))}
                <li>
                  <a
                    onClick={() =>
                      setCurrentPage(
                        currentPage != totalPages
                          ? currentPage + 1
                          : currentPage
                      )
                    }
                  >
                    <i className="far fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioArea;
