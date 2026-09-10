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
  FaLink,
} from "react-icons/fa6";

import { FaUserCircle } from "react-icons/fa";

import Navbar from "../components/layout/Navbar";
import { blogPosts } from "../data/blogPosts";

import "../styles/allposts.css";

const blogs = blogPosts;

const featuredBlogs = blogs.slice(0, 3);

const topicChips = [
  "Predictive Maintenance",
  "Industrial AI",
  "Digital Twins",
  "Process Optimization",
  "Energy Intelligence",
];

export default function AllPosts() {
  const [likes, setLikes] = useState({});
  const [openMenu, setOpenMenu] = useState(null);
  const [showScroll, setShowScroll] = useState(false);

  /* =========================================================
     SCROLL BUTTON
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     LIKE
  ========================================================= */

  const toggleLike = (id) => {
    setLikes((prev) => {
      const current = prev[id] || {
        liked: false,
        count: 0,
      };

      if (current.liked) {
        return {
          ...prev,
          [id]: {
            liked: false,
            count: Math.max(current.count - 1, 0),
          },
        };
      }

      return {
        ...prev,
        [id]: {
          liked: true,
          count: current.count + 1,
        },
      };
    });
  };

  /* =========================================================
     SHARE MENU
  ========================================================= */

  const toggleMenu = (id) => {
    setOpenMenu((current) =>
      current === id ? null : id
    );
  };

  /* =========================================================
     SHARE
  ========================================================= */

  const handleShare = (platform, id) => {
    const url = `${window.location.origin}/blog/${id}`;

    const encoded = encodeURIComponent(url);

    let shareUrl = "";

    if (platform === "facebook") {
      shareUrl =
        `https://www.facebook.com/sharer/sharer.php?u=${encoded}`;
    }

    if (platform === "twitter") {
      shareUrl =
        `https://x.com/intent/post?url=${encoded}`;
    }

    if (platform === "linkedin") {
      shareUrl =
        `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`;
    }

    if (shareUrl) {
      window.open(
        shareUrl,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  /* =========================================================
     COPY LINK
  ========================================================= */

  const handleCopy = async (id) => {
    const url = `${window.location.origin}/blog/${id}`;

    try {
      await navigator.clipboard.writeText(url);

      alert("Link copied!");
    } catch (error) {
      console.error(
        "Unable to copy link:",
        error
      );
    }
  };

  /* =========================================================
     CSS BLOG ART
     
     Every blog receives a different artwork.
     Eight designs are available and automatically repeat.
  ========================================================= */

  const getArtworkClass = (index) => {
    return `post-image-${(index % 8) + 1}`;
  };

  return (
    <>
      <Navbar />

      <main className="allposts-container">

        {/* =====================================================
            PAGE TITLE
        ===================================================== */}

        <motion.h1
          className="allposts-title"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          Blog
        </motion.h1>

        {/* =====================================================
            FEATURED INSIGHTS
        ===================================================== */}

        <section className="blog-spotlight">

          <div className="blog-spotlight-header">

            <span className="blog-kicker">
              FEATURED INSIGHTS
            </span>

            <Link
              to="/allposts"
              className="blog-view-all"
            >
              View all articles →
            </Link>

          </div>

          <div className="blog-spotlight-grid">

            {/* =================================================
                FEATURED LARGE CARD
            ================================================= */}

            {featuredBlogs[0] && (

              <article
                className="
                  blog-feature-card
                  blog-feature-card-large
                "
              >

                <div className="blog-feature-image">

                  <img
                    src={featuredBlogs[0].image}
                    alt={featuredBlogs[0].title}
                  />

                </div>

                <div className="blog-feature-copy">

                  <span className="blog-feature-tag">
                    Featured story
                  </span>

                  <h3>
                    {featuredBlogs[0].title}
                  </h3>

                  <p>
                    {featuredBlogs[0].preview}
                  </p>

                  <Link
                    to={`/blog/${featuredBlogs[0].id}`}
                    className="blog-feature-link"
                  >
                    Read article →
                  </Link>

                </div>

              </article>

            )}

            {/* =================================================
                FEATURED SIDE CARDS
            ================================================= */}

            <div className="blog-side-stack">

              {featuredBlogs
                .slice(1)
                .map((blog) => (

                  <article
                    key={blog.id}
                    className="
                      blog-feature-card
                      blog-feature-card-small
                    "
                  >

                    <div className="blog-feature-image">

                      <img
                        src={blog.image}
                        alt={blog.title}
                      />

                    </div>

                    <div className="blog-feature-copy">

                      <span className="blog-feature-tag">
                        Trending
                      </span>

                      <h3>
                        {blog.title}
                      </h3>

                      <Link
                        to={`/blog/${blog.id}`}
                        className="blog-feature-link"
                      >
                        Read article →
                      </Link>

                    </div>

                  </article>

                ))}

            </div>

          </div>

          {/* =====================================================
              TOPIC CHIPS
          ===================================================== */}

          <div className="blog-topic-row">

            {topicChips.map((topic) => (

              <span
                key={topic}
                className="blog-topic-chip"
              >
                {topic}
              </span>

            ))}

          </div>

        </section>

        {/* =====================================================
            ALL BLOG POSTS
        ===================================================== */}

        <section className="all-blog-posts">

          {blogs.map((blog, index) => (

            <motion.article
              key={blog.id}
              className="post-card"
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >

              {/* =================================================
                  CSS GENERATED BLOG VISUAL

                  IMPORTANT:
                  No blog.image is used here.
              ================================================= */}

              <div
                className={`post-image ${getArtworkClass(index)}`}
                aria-hidden="true"
              >

                <div className="css-blog-art">

                  <span className="art-grid" />

                  <span className="art-orb" />

                  <span className="art-ring art-ring-1" />
                  <span className="art-ring art-ring-2" />
                  <span className="art-ring art-ring-3" />

                  <span className="art-line art-line-1" />
                  <span className="art-line art-line-2" />
                  <span className="art-line art-line-3" />

                  <span className="art-node art-node-1" />
                  <span className="art-node art-node-2" />
                  <span className="art-node art-node-3" />
                  <span className="art-node art-node-4" />
                  <span className="art-node art-node-5" />

                  <span className="art-bars">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </span>

                  <span className="art-wave" />

                  <span className="art-core" />

                </div>

                <div className="css-blog-label">
                  MEGHAAI INTELLIGENCE
                </div>

              </div>

              {/* =================================================
                  BLOG CONTENT
              ================================================= */}

              <div className="post-content">

                {/* =================================================
                    AUTHOR HEADER
                ================================================= */}

                <div className="post-header">

                  <div className="author-info">

                    <FaUserCircle
                      className="author-avatar"
                    />

                    <div>

                      <p className="author-name">
                        meghaai
                      </p>

                      <p className="meta-text">
                        {blog.date} · {blog.readTime}
                      </p>

                    </div>

                  </div>

                  {/* =================================================
                      SHARE MENU
                  ================================================= */}

                  <div className="menu-wrapper">

                    <button
                      type="button"
                      className="three-dots"
                      aria-label={`Share ${blog.title}`}
                      onClick={() =>
                        toggleMenu(blog.id)
                      }
                    >
                      •••
                    </button>

                    {openMenu === blog.id && (

                      <div className="share-menu">

                        <button
                          type="button"
                          aria-label="Share on Facebook"
                          onClick={() =>
                            handleShare(
                              "facebook",
                              blog.id
                            )
                          }
                        >
                          <FaFacebookF />
                        </button>

                        <button
                          type="button"
                          aria-label="Share on X"
                          onClick={() =>
                            handleShare(
                              "twitter",
                              blog.id
                            )
                          }
                        >
                          <FaXTwitter />
                        </button>

                        <button
                          type="button"
                          aria-label="Share on LinkedIn"
                          onClick={() =>
                            handleShare(
                              "linkedin",
                              blog.id
                            )
                          }
                        >
                          <FaLinkedinIn />
                        </button>

                        <button
                          type="button"
                          aria-label="Copy link"
                          onClick={() =>
                            handleCopy(blog.id)
                          }
                        >
                          <FaLink />
                        </button>

                      </div>

                    )}

                  </div>

                </div>

                {/* =================================================
                    BLOG TITLE
                ================================================= */}

                <Link
                  to={`/blog/${blog.id}`}
                  className="post-title-link"
                >

                  <h2 className="post-title">
                    {blog.title}
                  </h2>

                </Link>

                {/* =================================================
                    BLOG SUMMARY
                ================================================= */}

                <p className="post-preview">
                  {blog.preview}
                </p>

                {/* =================================================
                    READ MORE
                ================================================= */}

                <Link
                  to={`/blog/${blog.id}`}
                  className="read-more"
                >
                  Read More →
                </Link>

                {/* =================================================
                    VIEWS / COMMENTS / LIKES
                ================================================= */}

                <div className="post-footer">

                  <div className="stats">

                    {/* =================================================
                        VIEWS
                    ================================================= */}

                    <span className="stat-item">

                      <FaEye
                        className="stat-icon"
                        aria-hidden="true"
                      />

                      <span className="stat-number">
                        {blog.views}
                      </span>

                    </span>

                    {/* =================================================
                        COMMENTS
                    ================================================= */}

                    <span className="stat-item">

                      <FaComment
                        className="stat-icon"
                        aria-hidden="true"
                      />

                      <span className="stat-number">
                        {blog.comments}
                      </span>

                    </span>

                    {/* =================================================
                        LIKE
                    ================================================= */}

                    <button
                      type="button"
                      className={`
                        stat-item
                        like-btn
                        ${
                          likes[blog.id]?.liked
                            ? "liked"
                            : ""
                        }
                      `}
                      onClick={() =>
                        toggleLike(blog.id)
                      }
                      aria-label="Like article"
                    >

                      {likes[blog.id]?.liked ? (

                        <FaHeart
                          className="
                            stat-icon
                            liked-icon
                          "
                        />

                      ) : (

                        <FaRegHeart
                          className="stat-icon"
                        />

                      )}

                      <span className="stat-number">
                        {likes[blog.id]?.count || 0}
                      </span>

                    </button>

                  </div>

                </div>

              </div>

            </motion.article>

          ))}

        </section>

      </main>

      {/* =========================================================
          SCROLL TOP
      ========================================================= */}

      {showScroll && (

        <button
          type="button"
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>

      )}

    </>
  );
}