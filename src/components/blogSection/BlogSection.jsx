import "./BlogSection.scss";
import Wrapper from "../wrapper/Wrapper";
import Img1 from "../../assets/blog-1.jpg";
import Img2 from "../../assets/blog-2.jpg";
import Img3 from "../../assets/blog-3.jpg";

const blogs = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    tag: "Product",
    img: Img1,
    date: "May 5,2023",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    tag: "Product",
    img: Img2,
    date: "May 5,2023",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    tag: "Product",
    img: Img3,
    date: "May 5,2023",
  },
];
export default function BlogSection() {
  return (
    <section className="blog">
      <Wrapper>
        <div className="blog__text">
          <h3>Explore our Resources</h3>
          <p>
            Navigate articles,whitepapers, and thought leadership pieces to
            learn more about Sascard
          </p>
        </div>
        <div className="blog__container">
          {blogs.map((blog) => (
            <div className="blog__card" key={blog.title}>
              <div className="blog__card-img">
                <img src={blog.img} alt="" />
              </div>
              <div className="blog__tag">{blog.tag}</div>
              <div className="blog__title">{blog.title}</div>
              <h6>{blog.date}</h6>
            </div>
          ))}
        </div>
        <div className="blog__btn">
          <a href="#" className="button-primary">
            {" "}
            See All Blog
          </a>
        </div>
      </Wrapper>
    </section>
  );
}
