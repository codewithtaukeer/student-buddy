// App.jsx
import React from "react";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";

const App = () => {
  return (
    <div
      style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" }}
    >
      <Header />
      <NavBar />

      <div style={{ padding: "2rem", maxWidth: "1000px", margin: "auto" }}>
        <Section id="resources" title="📚 Academic Resources">
          <Card title="Google Drive link for resources">
            <ul>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1Gw1QFeSe5zYEAPlzW3lyE78DEhEcwLtD"
                  target="_blank"
                  rel="noreferrer"
                >
                  G-Drive link
                </a>
              </li>
            </ul>
          </Card>
          <Card title="Computer Programming">
            <ul>
              <li>
                <a
                  href="https://cs50.harvard.edu/x/"
                  target="_blank"
                  rel="noreferrer"
                >
                  CS50 (Harvard)
                </a>
              </li>
              <li>
                <a href="https://www.geeksforgeeks.org/c-programming-language/">
                  GFG C Language Guide
                </a>
              </li>
            </ul>
          </Card>
          <Card title="Maths for CS">
            <ul>
              <li>
                <a href="https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/">
                  MIT Linear Algebra
                </a>
              </li>
              <li>
                <a href="https://nptel.ac.in/courses/111/104/111104135/">
                  NPTEL Discrete Maths
                </a>
              </li>
            </ul>
          </Card>
        </Section>

        <Section id="mentors" title="🎓 Meet Your Mentors">
          <Card title="Rahul Verma">
            <p>3rd Year CSE | Email: rahul@example.com</p>
            <p>
              Feel free to reach out for course help, coding or campus life
              queries.
            </p>
          </Card>
          <Card title="Anjali Singh">
            <p>2nd Year IT | Email: anjali@example.com</p>
            <p>Happy to help with coding, clubs and hostel tips.</p>
          </Card>
        </Section>

        <Section id="faq" title="📍 Campus FAQs">
          <Card title="Where is the library?">
            <p>It's next to the main academic block, open 9am–9pm.</p>
          </Card>
          <Card title="How's the mess food?">
            <p>Mixed! But there are canteens & cafés nearby too.</p>
          </Card>
          <Card title="What clubs can I join?">
            <p>
              Coding, Music, Drama, E-Cell, Robotics & more. Attend club
              orientations in August.
            </p>
          </Card>
        </Section>

        <Section id="feedback" title="📝 Feedback / Ask a Doubt">
          <Card title="">
            <form>
              <label htmlFor="name">Your Name:</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                style={{ width: "100%", padding: "0.5rem" }}
              />
              <br />
              <br />

              <label htmlFor="message">Your Question / Feedback:</label>
              <br />
              <textarea
                id="message"
                name="message"
                rows="4"
                style={{ width: "100%", padding: "0.5rem" }}
              ></textarea>
              <br />
              <br />

              <button
                type="submit"
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#003580",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Submit
              </button>
            </form>
          </Card>
        </Section>
      </div>

      <Footer />
    </div>
  );
};

export default App;
