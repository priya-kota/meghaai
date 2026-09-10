import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/floating-cta.css";

function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
  });

  const [currentMonth, setCurrentMonth] = useState(() => {
    const today = new Date();

    return new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );
  });

  const location = useLocation();

  /* =========================================================
     PAGES WHERE FLOATING CTA SHOULD NOT APPEAR
  ========================================================= */

  const hideFloatingCTA =
    location.pathname === "/contact" ||
    location.pathname === "/leadership";

  /* =========================================================
     AVAILABLE DEMO TIMES
  ========================================================= */

  const availableTimes = [
    "10:00 AM",
    "11:30 AM",
    "2:00 PM",
    "3:30 PM",
    "4:30 PM",
  ];

  /* =========================================================
     HANDLE SCROLL
  ========================================================= */

  useEffect(() => {
    if (hideFloatingCTA) {
      setVisible(false);
      return;
    }

    const handleScroll = () => {
      const threshold = Math.max(
        450,
        Math.round(window.innerHeight * 0.72)
      );

      const footer = document.querySelector("footer");

      if (!footer) {
        setVisible(window.scrollY > threshold);
        return;
      }

      const footerRect = footer.getBoundingClientRect();

      const footerVisible =
        footerRect.top < window.innerHeight &&
        footerRect.bottom > 0;

      setVisible(
        window.scrollY > threshold &&
        !footerVisible
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, [location.pathname, hideFloatingCTA]);

  /* =========================================================
     OPEN / CLOSE BOOKING MODAL
  ========================================================= */

  const openBooking = () => {
    setBookingComplete(false);
    setBookingOpen(true);

    document.body.style.overflow = "hidden";
  };

  const closeBooking = () => {
    setBookingOpen(false);
    setBookingComplete(false);

    document.body.style.overflow = "";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* =========================================================
     GENERATE CALENDAR DAYS
  ========================================================= */

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(
      year,
      month,
      1
    );

    const lastDay = new Date(
      year,
      month + 1,
      0
    );

    const startingDay = firstDay.getDay();
    const totalDays = lastDay.getDate();

    const days = [];

    // Empty cells before month starts
    for (
      let i = 0;
      i < startingDay;
      i++
    ) {
      days.push(null);
    }

    // Actual days
    for (
      let day = 1;
      day <= totalDays;
      day++
    ) {
      days.push(
        new Date(
          year,
          month,
          day
        )
      );
    }

    return days;
  }, [currentMonth]);

  /* =========================================================
     DATE HELPERS
  ========================================================= */

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const isSameDay = (
    date1,
    date2
  ) => {
    if (!date1 || !date2) {
      return false;
    }

    return (
      date1.getFullYear() ===
        date2.getFullYear() &&
      date1.getMonth() ===
        date2.getMonth() &&
      date1.getDate() ===
        date2.getDate()
    );
  };

  const isPastDate = (date) => {
    if (!date) {
      return true;
    }

    const normalized =
      new Date(date);

    normalized.setHours(
      0,
      0,
      0,
      0
    );

    return normalized < today;
  };

  /* =========================================================
     WEEKEND CHECK
  ========================================================= */

  const isWeekend = (date) => {
    if (!date) {
      return true;
    }

    const day = date.getDay();

    return (
      day === 0 ||
      day === 6
    );
  };

  /* =========================================================
     DATE AVAILABILITY
  ========================================================= */

  const isDateAvailable = (date) => {
    return (
      date &&
      !isPastDate(date) &&
      !isWeekend(date)
    );
  };

  /* =========================================================
     FORMAT SELECTED DATE
  ========================================================= */

  const formatSelectedDate = () => {
    if (!selectedDate) {
      return "";
    }

    return selectedDate.toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }
    );
  };

  /* =========================================================
     MONTH NAVIGATION
  ========================================================= */

  const goToPreviousMonth = () => {
    const previousMonth =
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        1
      );

    const currentMonthStart =
      new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      );

    if (
      previousMonth <
      currentMonthStart
    ) {
      return;
    }

    setCurrentMonth(
      previousMonth
    );

    setSelectedDate(null);
    setSelectedTime("");
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        1
      )
    );

    setSelectedDate(null);
    setSelectedTime("");
  };

  /* =========================================================
     SELECT DATE
  ========================================================= */

  const handleDateSelect = (
    date
  ) => {
    if (!isDateAvailable(date)) {
      return;
    }

    setSelectedDate(date);
    setSelectedTime("");
  };

  /* =========================================================
     FORM INPUT HANDLING
  ========================================================= */

  const handleInputChange = (
    event
  ) => {
    const {
      name,
      value,
    } = event.target;

    setFormData(
      (previous) => ({
        ...previous,
        [name]: value,
      })
    );
  };

  /* =========================================================
     SUBMIT BOOKING
     
     MAILTO VERSION
     
     Opens the user's email composer with:
     
     To:
     support@meghaai.in
     
     Subject:
     New Demo Request
  ========================================================= */

  const handleBookingSubmit = (
    event
  ) => {
    event.preventDefault();

    /* -----------------------------------------
       CHECK DATE
    ----------------------------------------- */

    if (
      !selectedDate ||
      !selectedTime
    ) {
      return;
    }

    /* -----------------------------------------
       CHECK REQUIRED FORM FIELDS
    ----------------------------------------- */

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.company.trim()
    ) {
      return;
    }

    /* -----------------------------------------
       EMAIL SUBJECT
    ----------------------------------------- */

    const subject =
      "New Demo Request";

    /* -----------------------------------------
       EMAIL BODY
    ----------------------------------------- */

    const body = `New Demo Request

Full Name: ${formData.fullName}
Work Email: ${formData.email}
Company Name: ${formData.company}

Requested Demo Date: ${formatSelectedDate()}
Requested Demo Time: ${selectedTime}
`;

    /* -----------------------------------------
       CREATE MAILTO LINK
    ----------------------------------------- */

    const mailtoLink =
      `mailto:support@meghaai.in` +
      `?subject=${encodeURIComponent(
        subject
      )}` +
      `&body=${encodeURIComponent(
        body
      )}`;

    /* -----------------------------------------
       OPEN EMAIL COMPOSER
    ----------------------------------------- */

    window.location.href =
      mailtoLink;

    /* -----------------------------------------
       SHOW CONFIRMATION
    ----------------------------------------- */

    setBookingComplete(true);
  };

  /* =========================================================
     RESET BOOKING
  ========================================================= */

  const startNewBooking = () => {
    setBookingComplete(false);

    setSelectedDate(null);

    setSelectedTime("");

    setFormData({
      fullName: "",
      email: "",
      company: "",
    });
  };

  /* =========================================================
     DO NOT RENDER CTA ON:
     
     /contact
     /leadership
  ========================================================= */

  if (hideFloatingCTA) {
    return null;
  }

  return (
    <>
      {/* =====================================================
          DESKTOP FLOATING CTA
      ===================================================== */}

      <button
        type="button"
        className={`floating-cta floating-cta-desktop ${
          visible
            ? "is-visible"
            : ""
        }`}
        onClick={openBooking}
        aria-label="Chat with Us - Schedule a Demo"
      >
        <span className="floating-cta-title">
          Chat with Us
        </span>

        <span className="floating-cta-subtitle">
          Questions? We&apos;re here to help
        </span>
      </button>


      {/* =====================================================
          MOBILE STICKY CTA
      ===================================================== */}

      <div
        className={`floating-cta-mobile-wrap ${
          visible
            ? "is-visible"
            : ""
        }`}
      >
        <button
          type="button"
          className="floating-cta-mobile"
          onClick={openBooking}
          aria-label="Schedule Free Demo"
        >
          <span>
            SCHEDULE FREE DEMO
          </span>

          <span
            className="floating-cta-arrow"
            aria-hidden="true"
          >
            →
          </span>
        </button>
      </div>


      {/* =====================================================
          BOOKING MODAL
      ===================================================== */}

      {bookingOpen && (
        <div
          className="demo-booking-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-booking-title"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeBooking();
            }
          }}
        >

          <div className="demo-booking-modal">

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="demo-booking-header">

              <div>

                <span className="demo-booking-eyebrow">
                  MEGHAAI DEMO
                </span>

                <h2 id="demo-booking-title">
                  Schedule a Demo
                </h2>

                {!bookingComplete && (
                  <p>
                    Choose a convenient
                    time to see
                    MeghaAI in action.
                  </p>
                )}

              </div>


              <button
                type="button"
                className="demo-booking-close"
                onClick={closeBooking}
                aria-label="Close booking window"
              >
                ×
              </button>

            </div>


            {/* =================================================
                SUCCESS
            ================================================= */}

            {bookingComplete ? (

              <div className="demo-booking-success">

                <div className="demo-booking-success-icon">
                  ✓
                </div>

                <h3>
                  Demo Request Ready
                </h3>

                <p>
                  Thanks,{" "}
                  {formData.fullName}.
                </p>

                <p>
                  Your requested demo
                  time is:
                </p>

                <strong>
                  {formatSelectedDate()}
                </strong>

                <strong>
                  {selectedTime}
                </strong>

                <p className="demo-booking-success-note">
                  Your email composer has
                  been opened with your
                  demo request. Please click
                  Send to complete your
                  request.
                </p>

                <button
                  type="button"
                  className="demo-booking-primary"
                  onClick={closeBooking}
                >
                  DONE
                </button>

                <button
                  type="button"
                  className="demo-booking-secondary"
                  onClick={
                    startNewBooking
                  }
                >
                  BOOK ANOTHER TIME
                </button>

              </div>

            ) : (

              <div className="demo-booking-body">

                {/* =============================================
                    CALENDAR
                ============================================= */}

                <div className="demo-calendar">

                  <div className="demo-calendar-heading">

                    <button
                      type="button"
                      onClick={
                        goToPreviousMonth
                      }
                      className="demo-calendar-nav"
                      aria-label="Previous month"
                    >
                      ‹
                    </button>

                    <strong>
                      {currentMonth.toLocaleDateString(
                        "en-US",
                        {
                          month:
                            "long",
                          year:
                            "numeric",
                        }
                      )}
                    </strong>

                    <button
                      type="button"
                      onClick={
                        goToNextMonth
                      }
                      className="demo-calendar-nav"
                      aria-label="Next month"
                    >
                      ›
                    </button>

                  </div>


                  <div className="demo-calendar-weekdays">

                    {[
                      "Sun",
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                      "Sat",
                    ].map(
                      (day) => (
                        <span
                          key={day}
                        >
                          {day}
                        </span>
                      )
                    )}

                  </div>


                  <div className="demo-calendar-grid">

                    {calendarDays.map(
                      (
                        date,
                        index
                      ) => {

                        if (!date) {
                          return (
                            <span
                              key={`empty-${index}`}
                              className="demo-calendar-empty"
                            />
                          );
                        }

                        const unavailable =
                          !isDateAvailable(
                            date
                          );

                        const selected =
                          isSameDay(
                            date,
                            selectedDate
                          );

                        const todayDate =
                          isSameDay(
                            date,
                            today
                          );

                        return (
                          <button
                            type="button"
                            key={date.toISOString()}
                            className={`
                              demo-calendar-day
                              ${
                                selected
                                  ? "selected"
                                  : ""
                              }
                              ${
                                todayDate
                                  ? "today"
                                  : ""
                              }
                              ${
                                unavailable
                                  ? "unavailable"
                                  : ""
                              }
                            `}
                            disabled={
                              unavailable
                            }
                            onClick={() =>
                              handleDateSelect(
                                date
                              )
                            }
                          >
                            {date.getDate()}
                          </button>
                        );
                      }
                    )}

                  </div>


                  <div className="demo-calendar-note">
                    Demo availability
                    is currently
                    Monday–Friday.
                  </div>

                </div>


                {/* =============================================
                    BOOKING DETAILS
                ============================================= */}

                <div className="demo-booking-details">

                  {/* ===========================================
                      TIME
                  =========================================== */}

                  <div className="demo-booking-section">

                    <h3>
                      1. Choose a time
                    </h3>

                    {!selectedDate ? (

                      <p className="demo-booking-helper">
                        Select a date from
                        the calendar to
                        view available
                        times.
                      </p>

                    ) : (

                      <>
                        <p className="demo-booking-selected-date">
                          {formatSelectedDate()}
                        </p>

                        <div className="demo-time-grid">

                          {availableTimes.map(
                            (time) => (

                              <button
                                type="button"
                                key={time}
                                className={`
                                  demo-time-slot
                                  ${
                                    selectedTime ===
                                    time
                                      ? "selected"
                                      : ""
                                  }
                                `}
                                onClick={() =>
                                  setSelectedTime(
                                    time
                                  )
                                }
                              >
                                {time}
                              </button>

                            )
                          )}

                        </div>

                      </>
                    )}

                  </div>


                  {/* ===========================================
                      USER DETAILS
                  =========================================== */}

                  <form
                    className="demo-booking-form"
                    onSubmit={
                      handleBookingSubmit
                    }
                  >

                    <h3>
                      2. Your details
                    </h3>


                    <label>

                      <span>
                        Full Name
                      </span>

                      <input
                        type="text"
                        name="fullName"
                        value={
                          formData.fullName
                        }
                        onChange={
                          handleInputChange
                        }
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                      />

                    </label>


                    <label>

                      <span>
                        Work Email
                      </span>

                      <input
                        type="email"
                        name="email"
                        value={
                          formData.email
                        }
                        onChange={
                          handleInputChange
                        }
                        placeholder="name@company.com"
                        autoComplete="email"
                        required
                      />

                    </label>


                    <label>

                      <span>
                        Company Name
                      </span>

                      <input
                        type="text"
                        name="company"
                        value={
                          formData.company
                        }
                        onChange={
                          handleInputChange
                        }
                        placeholder="Your company"
                        autoComplete="organization"
                        required
                      />

                    </label>


                    <button
                      type="submit"
                      className="demo-booking-primary"
                      disabled={
                        !selectedDate ||
                        !selectedTime
                      }
                    >
                      BOOK MY DEMO

                      <span>
                        →
                      </span>
                    </button>


                    <p className="demo-booking-privacy">
                      No credit card
                      required. Your
                      information is kept
                      confidential.
                    </p>

                  </form>

                </div>

              </div>

            )}

          </div>

        </div>
      )}

    </>
  );
}

export default FloatingCTA;