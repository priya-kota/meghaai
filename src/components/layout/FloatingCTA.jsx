import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import meghaaiLogo from "../../assets/MeghaAI_Footer2.png";
import "../../styles/floating-cta.css";

const CHATBOT_API =
  "https://meghaai-chatbot.onrender.com/api/chat";

const suggestedQuestions = [
  "How can MeghaAI prevent costly machine failures?",
  "How does Structural Health Monitoring work? ",
  "How are cobble events predicted?",
  "What can vibration data reveal before a failure?",
  "How can a Digital Twin help my plant?",
];

const initialMessage = {
  role: "assistant",
  content:
    "Hi! I'm the MeghaAI Intelligence Assistant. 👋\n\nI can help you explore condition monitoring, predictive maintenance, vibration monitoring, Structural Health Monitoring, cobble prevention, and Digital Twins.",
};

function FloatingCTA() {
  const location = useLocation();

  const [visible, setVisible] = useState(true);
  const [hideFloatingButton, setHideFloatingButton] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /* =========================================
     OPEN / CLOSE
  ========================================== */

  const openChat = () => {
    setChatOpen(true);
  };

  const closeChat = () => {
    setChatOpen(false);
    setMessage("");
  };

  /* =========================================
     VISIBILITY
  ========================================== */

  useEffect(() => {
    setVisible(true);
  }, [location.pathname]);

  /* =========================================
     AUTO SCROLL
  ========================================== */

  useEffect(() => {
    if (!chatOpen) return;

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading, chatOpen]);

  /* =========================================
     FOCUS INPUT
  ========================================== */

  useEffect(() => {
    if (!chatOpen) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 250);

    return () => clearTimeout(timer);
  }, [chatOpen]);

  /* =========================================
     ESCAPE
  ========================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && chatOpen) {
        closeChat();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [chatOpen]);

  /* =========================================
     PREVENT BACKGROUND SCROLL
  ========================================== */

  useEffect(() => {
    if (!chatOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [chatOpen]);

  /* =========================================
   HIDE BUTTON ON HERO + FOOTER
========================================== */

  useEffect(() => {
    const hero = document.querySelector(
      "#hero, .hero-section, .home-hero, .hero"
    );

    const footer = document.querySelector(
      "footer, .footer, .site-footer"
    );

    if (!hero && !footer) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const sectionVisible = entries.some(
          (entry) => entry.isIntersecting
        );

        setHideFloatingButton(sectionVisible);
      },
      {
        threshold: 0.05,
      }
    );

    if (hero) {
      observer.observe(hero);
    }

    if (footer) {
      observer.observe(footer);
    }

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  /* =========================================
     SEND MESSAGE
  ========================================== */

  const sendMessage = async (question = null) => {
    const text = (question ?? message).trim();

    if (!text || isLoading) {
      return;
    }

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: text,
      },
    ]);

    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(CHATBOT_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Request failed with status ${response.status}`
        );
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(
          data.error || "Unable to get a response."
        );
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            data.answer ||
            "I don't have that information from the MeghaAI website.",
        },
      ]);
    } catch (error) {
      console.error("MeghaAI chatbot error:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't connect right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  /* =========================================
     INPUT
  ========================================== */

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestionClick = (question) => {
    sendMessage(question);
  };

  if (!visible) {
    return null;
  }

  return (
    <>
      {/* =========================================
          FLOATING ASK US BUTTON
      ========================================== */}

      {!hideFloatingButton && (
        <div className="meghaai-floating-chat">
          <button
            type="button"
            className="floating-chat-button"
            onClick={openChat}
            aria-label="Ask Us"
            aria-expanded={chatOpen}
          >
            {/* AI INSIDE GEAR */}
            <svg
              className="meghaai-ai-gear"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Gear */}
              <path
                d="
                M57 35.5
                V28.5
                L51.8 27.3
                C51.3 25.6 50.6 24 49.7 22.5
                L52.7 18.1
                L47.8 13.2
                L43.5 16.2
                C42 15.3 40.3 14.6 38.6 14.1
                L37.4 9
                H30.5
                L29.3 14.1
                C27.6 14.6 26 15.3 24.5 16.2
                L20.2 13.2
                L15.3 18.1
                L18.3 22.5
                C17.4 24 16.7 25.6 16.2 27.3
                L11 28.5
                V35.5
                L16.2 36.7
                C16.7 38.4 17.4 40 18.3 41.5
                L15.3 45.9
                L20.2 50.8
                L24.5 47.8
                C26 48.7 27.6 49.4 29.3 49.9
                L30.5 55
                H37.4
                L38.6 49.9
                C40.3 49.4 42 48.7 43.5 47.8
                L47.8 50.8
                L52.7 45.9
                L49.7 41.5
                C50.6 40 51.3 38.4 51.8 36.7
                L57 35.5Z
              "
                fill="currentColor"
              />

              {/* Inner circle */}
              <circle
                cx="34"
                cy="32"
                r="17"
                fill="#1E8FE1"
              />

              {/* AI */}
              <text
                x="34"
                y="37"
                textAnchor="middle"
                fontSize="13"
                fontWeight="800"
                fontFamily="Arial, Helvetica, sans-serif"
                fill="#ffffff"
              >
                AI
              </text>
            </svg>

            <span className="floating-chat-label">
              Ask Us
            </span>

            <span className="floating-chat-pulse" />
          </button>
        </div>
      )}

      {/* =========================================
          CHATBOT
      ========================================== */}

      {chatOpen && (
        <div
          className="meghaai-chat-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeChat();
            }
          }}
        >
          <section
            className="meghaai-chat-window"
            aria-label="MeghaAI Intelligence Assistant"
          >
            {/* =================================
                HEADER
            ================================== */}

            <header className="meghaai-chat-header">
              <div className="meghaai-chat-brand">
                <div className="meghaai-chat-logo">
                  <img
                    src={meghaaiLogo}
                    alt="MeghaAI"
                  />
                </div>

                <div className="meghaai-chat-brand-text">
                  <h2>MeghaAI Intelligence Assistant</h2>

                  <div className="meghaai-chat-status">
                    <span className="status-dot" />
                    <span>Online</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="meghaai-chat-close"
                onClick={closeChat}
                aria-label="Close chatbot"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </header>

            {/* =================================
                CHAT BODY
            ================================== */}

            <div className="meghaai-chat-body">
              {messages.map((item, index) => (
                <div
                  key={`${item.role}-${index}`}
                  className={`chat-message-row ${item.role === "user"
                      ? "user-message-row"
                      : "assistant-message-row"
                    }`}
                >
                  {item.role === "assistant" && (
                    <div className="assistant-message-avatar">
                      <img
                        src={meghaaiLogo}
                        alt=""
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  <div
                    className={`chat-message ${item.role === "user"
                        ? "user-message"
                        : "assistant-message"
                      }`}
                  >
                    {item.content
                      .split("\n")
                      .map((line, lineIndex) => (
                        <span
                          key={lineIndex}
                          className="chat-message-line"
                        >
                          {line || "\u00A0"}
                        </span>
                      ))}
                  </div>
                </div>
              ))}

              {/* =================================
                  SUGGESTED QUESTIONS
              ================================== */}

              {messages.length === 1 && !isLoading && (
                <div className="chat-suggestions">
                  <div className="suggestions-heading">
                    Explore what's possible
                  </div>

                  <div className="suggestion-list">
                    {suggestedQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        className="suggestion-button"
                        onClick={() =>
                          handleSuggestionClick(question)
                        }
                      >
                        <span>{question}</span>

                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 10H15M11 6L15 10L11 14"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* =================================
                  TYPING INDICATOR
              ================================== */}

              {isLoading && (
                <div className="chat-message-row assistant-message-row">
                  <div className="assistant-message-avatar">
                    <img
                      src={meghaaiLogo}
                      alt=""
                      aria-hidden="true"
                    />
                  </div>

                  <div className="chat-message assistant-message typing-message">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* =================================
                TEXT CHAT INPUT ONLY
            ================================== */}

            <div className="meghaai-chat-input-area">
              <div className="meghaai-chat-input-wrapper">
                <textarea
                  ref={inputRef}
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  onKeyDown={handleInputKeyDown}
                  placeholder="Ask about MeghaAI..."
                  rows={1}
                  disabled={isLoading}
                  aria-label="Message"
                />

                <button
                  type="button"
                  className="meghaai-chat-send"
                  onClick={() => sendMessage()}
                  disabled={
                    !message.trim() || isLoading
                  }
                  aria-label="Send message"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M21 3L10 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M21 3L14 21L10 14L3 10L21 3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="meghaai-chat-footer">
                Answers are based on MeghaAI website information.
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default FloatingCTA;