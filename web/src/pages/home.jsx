import { Button } from "../components";
import header from "/src/assets/header-mountains-desktop.svg";
function HomePage() {
  return (
  <div style={{ backgroundColor: "#4298b4" }}>
    
      <div className="text" style={{ padding: '120px 0px 40px', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <h1 style={{ color: "white", textAlign: 'center', marginBottom: '10px' }}>
        Descubre qué personaje eres
      </h1>
      <p style={{ color: "white", textAlign: "center", padding: '0px 150px', marginBottom: '30px',  width: '60%'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ut
        nisi dicta exercitationem accusantium dolores quo provident cupiditate
        nostrum suscipit minima necessitatibus placeat reiciendis, repudiandae
        adipisci expedita enim! Corporis, atque.
      </p>
      <Button style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}/>
      </div>
      <div style={{ backgroundImage: `url(${header})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', padding: '200px', zIndex: '1'}}> </div>
   
    </div>
  );
}

export default HomePage;
