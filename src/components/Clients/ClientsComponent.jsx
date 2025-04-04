const Clients = () => {
  const brandData = [
    {
      id: 1,
      img: "/assets/img/brand/L&T.png",
      brandClass:
        "brand__image-item brand__image-item-3 brand__image-item-br brand__image-item-bb",
    },
    {
      id: 2,
      img: "/assets/img/brand/gujrat_metro.png",
      brandClass:
        "brand__image-item brand__image-item-3 brand__image-item-br brand__image-item-bb",
    },
    {
      id: 3,
      img: "/assets/img/brand/iskcon.png",
      brandClass:
        "brand__image-item brand__image-item-3 brand__image-item-br brand__image-item-bb",
    },
    {
      id: 4,
      img: "/assets/img/brand/infosys.png",
      brandClass: "brand__image-item brand__image-item-3 brand__image-item-bb",
    },
    {
      id: 5,
      img: "/assets/img/brand/kec.png",
      brandClass: "brand__image-item brand__image-item-3 brand__image-item-br",
    },
    {
      id: 6,
      img: "/assets/img/brand/msetcl.png",
      brandClass: "brand__image-item brand__image-item-3 brand__image-item-br",
    },
    {
      id: 7,
      img: "/assets/img/brand/Neelkanth.png",
      brandClass: "brand__image-item brand__image-item-3 brand__image-item-br",
    },
    {
      id: 8,
      img: "/assets/img/brand/Jio.png",
      brandClass: "brand__image-item brand__image-item-3",
    },
    {
      id: 9,
      img: "/assets/img/brand/L&T.png",
      brandClass:
        "brand__image-item brand__image-item-3 brand__image-item-br brand__image-item-bb",
    },
    {
      id: 10,
      img: "/assets/img/brand/gujrat_metro.png",
      brandClass:
        "brand__image-item brand__image-item-3 brand__image-item-br brand__image-item-bb",
    },
    {
      id: 11,
      img: "/assets/img/brand/iskcon.png",
      brandClass:
        "brand__image-item brand__image-item-3 brand__image-item-br brand__image-item-bb",
    },
    {
      id: 12,
      img: "/assets/img/brand/infosys.png",
      brandClass: "brand__image-item brand__image-item-3 brand__image-item-bb",
    },
    {
      id: 13,
      img: "/assets/img/brand/kec.png",
      brandClass: "brand__image-item brand__image-item-3 brand__image-item-br",
    },
    {
      id: 14,
      img: "/assets/img/brand/msetcl.png",
      brandClass: "brand__image-item brand__image-item-3 brand__image-item-br",
    },
    {
      id: 15,
      img: "/assets/img/brand/Neelkanth.png",
      brandClass: "brand__image-item brand__image-item-3 brand__image-item-br",
    },
    {
      id: 16,
      img: "/assets/img/brand/Jio.png",
      brandClass: "brand__image-item brand__image-item-3",
    },
  ];
  return (
    <div>
      <section className="brand-border pt-90 pb-90">
        <div className="container">
          <div className="brand__wrapper">
            <div className="row g-0">
              {brandData.map((brand) => {
                return (
                  <div
                    key={brand.id}
                    className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
                  >
                    <div className={`${brand.brandClass}`}>
                      <a href="#">
                        <img src={`${brand.img}`} alt="" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          
          </div>
          <div className="pagination">
              <a href="#" className="prev">
                &laquo; Prev
              </a>
              <a href="#" className="page">
                1
              </a>
              <a href="#" className="page">
                2
              </a>
              <a href="#" className="page">
                3
              </a>
              <a href="#" className="next">
                Next &raquo;
              </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
