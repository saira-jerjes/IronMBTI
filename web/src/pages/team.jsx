import PageLayout from "../components/layouts/page-layout/page-layout";
import "./team.css";
import julioImg from "../assets/imgs/result/Julio.webp";
import carlosImg from "../assets/imgs/result/Carlos.webp";


function TeamPage() {
  return (
    <>
      <PageLayout>
      <div className="team-page">
      <h2 className="team-title">Our Team</h2>
      <div className="team-container">
        <div className="team-card">
          <img
            src={julioImg}
            alt="Michael Doe"
            className="team-image"
          />
          <h3 className="team-name">Michael Doe</h3>
          <p className="team-position">
            Chief Product Officer at Moon Studios
          </p>
          <div className="team-socials">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="team-card">
          <img
            src={carlosImg}
            alt="Valeria Doe"
            className="team-image"
          />
          <h3 className="team-name">Valeria Doe</h3>
          <p className="team-position">
            Product Owner at Zilla Themes
          </p>
          <div className="team-socials">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
      </PageLayout>
    </>
  );
}

export default TeamPage;
