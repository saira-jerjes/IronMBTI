import { Button } from "../components";
function HomePage() {
  return (
  <div style={{ alignItems: 'center', display: 'flex', height: '100vh', paddingLeft: '150px'}}>
    
      <div className="text" style={{ textAlign: 'left', display: 'flex', alignItems: 'left', flexDirection: 'column'}}>
      <h1 style={{ color: "white", textAlign: 'left', marginBottom: '10px', fontSize:'80px', fontWeight: '400' }}>
      ¿Quieres descubrir <br />tú yo verdadero?
      </h1>
      <p style={{ color: "white", textAlign: "left",  width: '60%', fontSize:'20px'}}>
      Atrevete a descubir el ser que vive dentro de ti con
      este test realizado por los mejores ciéntificos.
      </p>
      <Button style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: "#2a637f" }}/>
      </div>
  </div>
  );
}

export default HomePage;
