import PageLayout from "../components/layouts/page-layout/page-layout";
import "./team.css";
import julioImg from "../assets/imgs/result/Julio.webp";
import carlosImg from "../assets/imgs/result/Carlos.webp";


function TeamPage() {
  return (
    <>
      <PageLayout>
        <div className="info-page-container d-flex align-items-center justify-content-center vh-100">
          <div className="position-relative w-100 h-100">
            <div
              className="card amy-card position-absolute"
              style={{
                top: "190px",
                left: "50px",
                maxWidth: "80%",
                height: "250px",
                padding: "20px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <div className="row align-items-center">
                <div className="col-md-3">
                  <img
                    src={carlosImg} 
                    className="img-fluid rounded-start profile-pic"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">Amy Lauren</h4>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card saira-card position-absolute"
              style={{
                bottom: "80px",
                right: "50px",
                maxWidth: "80%",
                height: "250px",
                padding: "20px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">Saira Jerjes</h4>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <img
                    src={julioImg} 
                    className="img-fluid rounded-start profile-pic"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default TeamPage;
