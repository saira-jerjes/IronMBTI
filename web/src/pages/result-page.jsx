import { useLocation } from 'react-router-dom';
import './result-page.css'; // Ensure you have the proper styles in this file

function ResultPage() {
  const location = useLocation();
  const { personality, totalScore } = location.state || {};

  const getResultContent = (personality) => {
    switch (personality) {
      case "Introvert":
        return {
          title: "You are an Introvert!",
          description: "You prefer calm, minimally stimulating environments and enjoy spending time alone or with a small group of close friends.",
          image: "/images/introvert.jpg" // Replace with actual image path
        };
      case "Extrovert":
        return {
          title: "You are an Extrovert!",
          description: "You thrive in social situations, enjoy meeting new people, and feel energized by being around others.",
          image: "/images/extrovert.jpg" // Replace with actual image path
        };
      case "Analytical":
        return {
          title: "You are Analytical!",
          description: "You have a logical approach to problem-solving, enjoy details, and excel at critical thinking.",
          image: "/images/analytical.jpg" // Replace with actual image path
        };
      case "Creative":
        return {
          title: "You are Creative!",
          description: "You love thinking outside the box, exploring new ideas, and expressing yourself in unique ways.",
          image: "/images/creative.jpg" // Replace with actual image path
        };
      default:
        return {
          title: "Unknown Result",
          description: "It seems we couldn't determine your personality type.",
          image: "/images/default.jpg" // Default image
        };
    }
  };

  const { title, description, image } = getResultContent(personality);

  return (
    <div className="result-page-container">
      <div className="result-card">
        <h2 className="result-title">{title}</h2>
        <p className="result-description">{description}</p>
        <div className="result-image-container">
          <img src={image} alt={personality} className="result-image" />
        </div>
        <div className="separator-line"></div>
        <p className="result-score">Your total score: {totalScore}</p>
      </div>
    </div>
  );
}

export default ResultPage;
