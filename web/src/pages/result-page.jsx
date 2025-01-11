import { useLocation } from 'react-router-dom';
import './result-page.css'; 
import { PageLayout } from '../components';
import poolImg from "../assets/imgs/result/Pool.webp";
import cristianImg from "../assets/imgs/result/Cristian.webp";
import julioImg from "../assets/imgs/result/Julio.webp";
import carlosImg from "../assets/imgs/result/Carlos.webp";

function ResultPage() {
  const location = useLocation();
  const { personality, totalScore } = location.state || {};

  const getResultContent = (personality) => {
    switch (personality) {
      case "Pool":
        return {
          title: "Es Batman? SuperMan? No, eres Pool!",
          description: "El ninja silencioso, pero efectivo. No habla mucho y rara vez se mete en problemas. Siempre está ahí, como un ninja en modo sigilo, observando y manteniendo el orden sin hacer ruido. Si necesitas ayuda, te la dará… pero a su manera: breve, concisa y sin dramas.",
          image: poolImg 
        };
      case "Cristian":
        return {
          title: "Que tu gato no te apague el pc como a Cristian",
          description: "El friki de los gatos y maestro del lenguaje mímico. Amante de los gatos, de lo friki y de las normas. Si faltas a clase, él ya te puso la falta antes de que te dieras cuenta. Cuando el profe hace preguntas y nadie tiene ni idea, ahí está él, haciendo gestos y mímicas discretas para echarte un cable sin que se note demasiado. Es el aliado que todos querrían en una partida de charadas.",
          image: cristianImg 
        };
      case "Julio":
        return {
          title: "Ahora eres de Huelva, como Julio",
          description: "El tímido velocista, maestro del Copilot. Empieza tímido, casi como si se estuviera camuflando entre los alumnos, pero cuando agarra confianza, se transforma en un vacilón con certificado. No sabe vivir sin Copilot, su fiel compañero de aventuras, y escribe código a tal velocidad que los alumnos solo pueden observar y asentir, rezando por entender algo.",
          image: julioImg 
        };
      case "Carlos":
        return {
          title: "Te encantan las vacas, eres Carlos",
          description: "El profe alegre y sufrido, héroe sin capa. Es el alma de la clase: siempre con una sonrisa y un chiste en el bolsillo, pero por dentro llora cuando nadie entiende la explicación por tercera vez. Aunque todo el mundo le quiere, no pierde la oportunidad de ver sufrir a sus alumnos vaqueándolos con preguntas sorpresa. Disfruta de esa confusión... pero con cariño.",
          image: carlosImg
        };
      default:
        return {
          title: "Ni tu sabes quien eres",
          description: "Ven a IronHack y descubre que tipo de persona puedes llegar a ser.",
          image: "https://i.pinimg.com/originals/80/7b/5c/807b5c4b02e765bb4930b7c66662ef4b.gif" 
        };
    }
  };

  const { title, description, image } = getResultContent(personality);

  return (
  <PageLayout>
    <div className="result-page-container">
      <div className="result-card">
      <div className="result-image-container">
          <img src={image} alt={personality} className="result-image" />
        </div>
        <h2 className="result-title">{title}</h2>
        <p className="result-description">{description}</p>
        <div className="separator-line"></div>
        <p className="result-score">Tu puntuación final: {totalScore}</p>
      </div>
    </div>
    </PageLayout>
  );
}

export default ResultPage;
