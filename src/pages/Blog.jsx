import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaRegHeart,
  FaHeart,
  FaEye,
  FaComment,
  FaLink
} from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { blogPosts } from "../data/blogPosts";
import "../styles/blog-index.css";

const blogs = blogPosts;
const featuredBlogs = blogs.slice(0, 3);
const topicChips = [
  "Predictive Maintenance",
  "Industrial AI",
  "Digital Twins",
  "Process Optimization",
  "Energy Intelligence",
];

const postCategories = [
  "Industrial AI",
  "Digital Twins",
  "Industry 4.0",
  "Manufacturing",
  "Process Optimization",
  "Energy Intelligence",
  "Predictive Maintenance",
  "Asset Health",
  "Industrial Insights",
];

export default function Blog() {
  const [likes, setLikes] = useState({});
  const [openMenu, setOpenMenu] = useState(null);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Like function (no negative values)
  const toggleLike = (id) => {
    setLikes((prev) => {
      const current = prev[id] || { liked: false, count: 0 };

      if (current.liked) {
        return {
          ...prev,
          [id]: {
            liked: false,
            count: Math.max(current.count - 1, 0)
          }
        };
      } else {
        return {
          ...prev,
          [id]: {
            liked: true,
            count: current.count + 1
          }
        };
      }
    });
  };

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  const handleShare = (platform, id) => {
    const url = `${window.location.origin}/blog/${id}`;
    const encoded = encodeURIComponent(url);
    let shareUrl = "";

    if (platform === "facebook")
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encoded}`;

    if (platform === "twitter")
      shareUrl = `https://x.com/intent/post?url=${encoded}`;

    if (platform === "linkedin")
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`;

    window.open(shareUrl, "_blank");
  };

  const handleCopy = (id) => {
    const url = `${window.location.origin}/blog/${id}`;
    navigator.clipboard.writeText(url);
    alert("Link copied!");
  };

  return (
    <>
    {false && (
    <>
      <main className="blog-index-page">
      <Link
        to="/"
        className="blog-index-close-button"
        aria-label="Close blogs and return to home"
      >
        <span aria-hidden="true">X</span>
      </Link>
      <div className="allposts-container">
        <motion.h1
          className="allposts-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Blogs
        </motion.h1>
        <p className="blog-index-intro">
          Stay ahead with insights, trends, and innovations shaping the future of industrial AI and intelligent manufacturing.
        </p>

        <section className="blog-spotlight">
          <div className="blog-spotlight-header">
            <span className="blog-kicker">FEATURED INSIGHTS</span>
            <Link to="/allposts" className="blog-view-all">
              View all articles
            </Link>
          </div>

          <div className="blog-spotlight-grid">
            <article className="blog-feature-card blog-feature-card-large">
              <img src={featuredBlogs[0].image} alt={featuredBlogs[0].title} />
              <div className="blog-feature-copy">
                <span className="blog-feature-tag">Featured story</span>
                <h3>{featuredBlogs[0].title}</h3>
                <p>{featuredBlogs[0].preview}</p>
                <Link to={`/blog/${featuredBlogs[0].id}`} className="blog-feature-link">
                  Read article →
                </Link>
              </div>
            </article>

            <div className="blog-side-stack">
              {featuredBlogs.slice(1).map((blog) => (
                <article key={blog.id} className="blog-feature-card blog-feature-card-small">
                  <img src={blog.image} alt={blog.title} />
                  <div className="blog-feature-copy">
                    <span className="blog-feature-tag">Trending</span>
                    <h3>{blog.title}</h3>
                    <Link to={`/blog/${blog.id}`} className="blog-feature-link">
                      Read article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="blog-topic-row">
            {topicChips.map((topic) => (
              <span key={topic} className="blog-topic-chip">{topic}</span>
            ))}
          </div>
        </section>

        <section className="blog-index-grid" aria-label="All blog articles">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="post-card blog-index-card"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
              ease: "easeOut"
            }}
          >
            <div className="post-image">
              <img src={blog.image} alt={blog.title} />
            </div>

            <div className="post-content">

              {/* Author + Menu */}
              <div className="post-header">
                <div className="author-info">
                  <FaUserCircle className="author-avatar" />
                  <div>
                    <p className="author-name">meghaai</p>
                    <p className="meta-text">
                      {blog.date} · {blog.readTime}
                    </p>
                  </div>
                </div>

                <div className="menu-wrapper">
                  <span
                    className="three-dots"
                    onClick={() => toggleMenu(blog.id)}
                  >
                    
                  </span>

                  {openMenu === blog.id && (
                    <div className="share-menu">
                      <FaFacebookF onClick={() => handleShare("facebook", blog.id)} />
                      <FaXTwitter onClick={() => handleShare("twitter", blog.id)} />
                      <FaLinkedinIn onClick={() => handleShare("linkedin", blog.id)} />
                      <FaLink onClick={() => handleCopy(blog.id)} />
                    </div>
                  )}
                </div>
              </div>

              <h2>{blog.title}</h2>
              <p className="post-preview">{blog.preview}</p>

              <Link to={`/blog/${blog.id}`} className="read-more">
                Read More →
              </Link>

              <div className="post-footer">
                <div className="stats">
                  <span><FaEye /> {blog.views}</span>
                  <span><FaComment /> {blog.comments}</span>
                </div>

                <div className="actions">
                  <span
                    className="like-btn"
                    onClick={() => toggleLike(blog.id)}
                  >
                    {likes[blog.id]?.liked ? (
                      <FaHeart className="liked" />
                    ) : (
                      <FaRegHeart />
                    )}
                    {likes[blog.id]?.count || 0}
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
        </section>
      </div>
      </main>
 {showScroll && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
    )}
    </>
  );
}