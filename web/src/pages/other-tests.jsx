import { useState } from "react";
import axios from "axios";
import "./other-tests.css";
import bckgdog from "../assets/imgs/what-dog-are-you.webp";
import bckpig from "../assets/imgs/random-card.webp";
import bckcat from "../assets/imgs/shitty-advice.webp";
import { PageLayout } from "../components";

function OtherTests() {
  const [dogImage, setDogImage] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [advice, setAdvice] = useState("");
  const [currentApi, setCurrentApi] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testQuestions, setTestQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isTestCompleted, setIsTestCompleted] = useState(false);

  const fetchDog = () => {
    setCurrentApi("dog");
    setDogImage("");
    setPokemonData(null);
    setAdvice("");
    setIsModalOpen(true);
    startTest("dog");
  };

  const fetchPokemon = () => {
    setCurrentApi("pokemon");
    setDogImage("");
    setPokemonData(null);
    setAdvice("");
    setIsModalOpen(true);
    startTest("pokemon");
  };

  const fetchAdvice = () => {
    setCurrentApi("advice");
    setDogImage("");
    setPokemonData(null);
    setAdvice("");
    setIsModalOpen(true);
    setTestQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setIsTestCompleted(false);
    fetchRandomAdvice();
  };

  const startTest = (api) => {
    let questions = [];
    if (api === "dog") {
      questions = [
        {
          question: "¿Prefieres estar en casa o paseando por el parque?",
          options: ["Casa", "Parque"],
        },
        {
          question: "¿Eres más de lugares tranquilos o ruidosos?",
          options: ["Tranquilos", "Ruidosos"],
        },
        {
          question: "¿Prefieres un perro pequeño o grande?",
          options: ["Pequeño", "Grande"],
        },
      ];
    } else if (api === "pokemon") {
      questions = [
        {
          question: "¿Prefieres un Pokémon tipo fuego o agua?",
          options: ["Fuego", "Agua"],
        },
        {
          question: "¿Te gusta más un Pokémon rápido o fuerte?",
          options: ["Rápido", "Fuerte"],
        },
        {
          question: "¿Qué te atrae más de un Pokémon?",
          options: ["Su apariencia", "Su poder"],
        }        
      ];
    }

    setTestQuestions(questions);
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...userAnswers, answer];
    setUserAnswers(newAnswers);

    if (newAnswers.length < testQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (currentApi === "dog") {
        fetchRandomDog();
      } else if (currentApi === "pokemon") {
        fetchRandomPokemon();
      }

      setIsTestCompleted(true);
    }
  };

  const fetchRandomDog = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => setDogImage(response.data.message))
      .catch((err) => console.error("Error fetching dog image", err));
  };

  const fetchRandomPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => setPokemonData(response.data))
      .catch((err) => console.error("Error fetching Pokémon", err));
  };

  const fetchRandomAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
      })
      .catch((err) => {
        console.error("Error fetching advice", err);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDogImage("");
    setPokemonData(null);
    setAdvice("");
    setCurrentApi("");
    setTestQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setIsTestCompleted(false);
  };

  return (
    <PageLayout>
      <div className="other-tests-container">
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <h1 className="title">Click y conócete</h1>

          <div
            style={{
              display: "flex",
              marginBottom: "40px",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                ...boxStyle,
                backgroundImage: `url(${bckgdog})`,
                backgroundSize: "cover",
                backgroundPosition: "center 0px",
                height: "515px",
                width: "100%",
                padding: "0px 30px",
              }}
              onClick={fetchDog}
            >
              <h3 className="text-up">¿Qué perro eres?</h3>
            </div>

            <div
              style={{
                ...boxStyle,
                backgroundImage: `url(${bckpig})`,
                backgroundSize: "cover",
                backgroundPosition: "center 0px",
                height: "515px",
                width: "100%",
                padding: "0px 30px",
              }}
              onClick={fetchPokemon}
            >
              <h3 className="text-down">¿Qué Pokémon te representa?</h3>
            </div>

            <div
              style={{
                ...boxStyle,
                backgroundImage: `url(${bckcat})`,
                backgroundSize: "cover",
                backgroundPosition: "center 0px",
                height: "515px",
                width: "100%",
                padding: "0px 30px",
              }}
              onClick={fetchAdvice}
            >
              <h3 className="text-up">Consejos de 💩</h3>
            </div>
          </div>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <button className="close-button" onClick={closeModal}>
                  &times;
                </button>
                {testQuestions.length > 0 &&
                  !isTestCompleted &&
                  currentQuestionIndex < testQuestions.length && (
                    <div>
                      <h2>{testQuestions[currentQuestionIndex].question}</h2>
                      <div className="d-flex flex-row gap-2 justify-content-center">
                        {testQuestions[currentQuestionIndex].options.map(
                          (option, index) => (
                            <button
                              key={index}
                              onClick={() => handleAnswer(option)}
                              className="answer-button"
                            >
                              {option}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )}
                {advice && (
                  <div>
                    <h2>Consejo para ti</h2>
                    <p style={{ fontSize: "18px", fontStyle: "italic" }}>
                      "{advice}"
                    </p>
                  </div>
                )}
                {isTestCompleted && (
                  <>
                    {dogImage && (
                      <div style={{ textAlign: "center" }}>
                        <h2>Este es tu perro</h2>
                        <img
                          src={dogImage}
                          alt="Dog"
                          style={{ width: "300px", borderRadius: "10px" }}
                        />
                      </div>
                    )}

                    {pokemonData && (
                      <div>
                        <h2>Te pareces a</h2>
                        <img
                          src={pokemonData.sprites.front_default}
                          alt="Ditto"
                          style={{ width: "150px", borderRadius: "10px" }}
                        />
                        <p>Name: {pokemonData.name}</p>
                        <p>Height: {pokemonData.height}</p>
                        <p>Weight: {pokemonData.weight}</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

const boxStyle = {
  borderRadius: "35px",
  cursor: "pointer",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default OtherTests;