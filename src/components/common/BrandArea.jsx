
const BrandArea = ({clientele}) => {
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
    // {
    //   id: 9,
    //   img: "/assets/img/brand/sabarmati.webp",
    //   brandClass: "brand__image-item brand__image-item-3",
    // },
  ];

  const updatedClientele = clientele.map((item, index) => ({
    ...item,
    brandClass: brandData[index]?.brandClass || "",
  }));  
  

  return (
    <div>
      <section className="brand__area-3 brand-border">
        <div className="container">
          <div className="brand__wrapper">
            <div className="row g-0">
              {updatedClientele.map((brand) => {
                return (
                  <div
                    key={brand.id}
                    className="col-xl-3 col-lg-3 col-md-3 col-sm-6"
                  >
                    <div className={`${brand.brandClass}`}>
                      <a href="#">
                      <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${brand.filepath}`} alt="" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandArea;
