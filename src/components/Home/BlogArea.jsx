import BlogData from "../../data/blogData";
import Link from "next/link";

const BlogArea = () => {
  return (
    <div>
      <section className="blog__area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__wrapper section__wrapper-2 mb-30 text-center">
                <span className="st-meta-2">News</span>
                <h4 className="section__title">Industry news & insights </h4>
              </div>
            </div>
          </div>
          <div className="row mt-25">
            {BlogData.slice(0, 3).map((blog) => {
              return (
                <div key={blog.id} className="col-xl-4 col-lg-4 col-md-4">
                  <div className="blog__item-2 blog__item-2-df mb-40">
                    <div className="blog__item-2-image">
                      <div className="blog__item-2-image-inner w-img">
                        <Link href="/news">
                          <a>
                            <img src={`${blog.imgTwo}`} alt="blog-img" />
                          </a>
                        </Link>
                      </div>
                      <div className="blog__item-2-date blog__item-2-date-df">
                        {/* <Link href="/news"> */}
                          <a className="month text-decoration-none">
                            {blog.date.substring(4, 6)}
                            <span>{blog.date.substring(0, 3)}</span>
                          </a>
                        {/* </Link> */}
                      </div>
                    </div>
                    <div className="blog__item-2-content">
                      <div className="blog__meta">
                        <div className="blog__author" > 
                          <i className="fal fa-user"></i>
                          <span style={{color:"#004b8f"}}>
                              <label>{blog.authorThree}</label>
                          </span>
                        </div>
                        <div className="blog__catagory">
                          <span>{blog.twominreadslider}</span>
                        </div>
                      </div>
                      <h5 className="blog__sm-title">
                        <Link href="/news">{blog.title}</Link>
                      </h5>
                    </div>
                    <div className="blog__btn-2">
                      <Link href="/news">
                        <a className="link-btn">
                          Read more <i className="fal fa-long-arrow-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArea;
