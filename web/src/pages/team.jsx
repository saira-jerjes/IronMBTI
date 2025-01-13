import PageLayout from "../components/layouts/page-layout/page-layout";
import "./team.css";
import amyImg from "../assets/imgs/amyimg.jpeg";
import sairaImg from "../assets/imgs/sairaimg.jpeg";


function TeamPage() {
  return (
    <>
      <PageLayout>
      <div className="team-page">
      <div className="team-container">
        <div className="team-card">
          <img
            src={amyImg}
            alt="Amy Lauren"
            className="team-image-amy"
          />
          <h2 className="team-name">Amy Lauren</h2>
          <p className="team-position">
          <b>Científica N°2</b> <br></br>
          La 1 ya estaba cogido 🙃
          </p>
        </div>
        <div className="team-card">
          <img
            src={sairaImg}
            alt="Saira Jerjes"
            className="team-image-sai"
          />
          <h2 className="team-name">Saira Jerjes</h2>
          <p className="team-position">
          <b>Científica N°1</b> <br></br>
          O algo de eso me han dicho 🤷🏻‍♀️
          </p>
        </div>
      </div>
    </div>
  );
      </PageLayout>
    </>
  );
}

export default TeamPage;
