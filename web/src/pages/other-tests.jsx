import { useState } from 'react';
import axios from 'axios'; 
import './other-tests.css';

function OtherTests() {
  const [dogImage, setDogImage] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [advice, setAdvice] = useState('');
  const [currentApi, setCurrentApi] = useState('');  // Estado para gestionar cuál API se está usando

  const fetchDog = () => {
    setCurrentApi('dog');
    setDogImage('');  
    setPokemonData(null);  
    setAdvice('');  
    
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => setDogImage(response.data.message))
      .catch(err => console.error("Error fetching dog image", err));
  };

  const fetchPokemon = () => {
    setCurrentApi('pokemon');
    setDogImage('');
    setPokemonData(null);
    setAdvice('');
    
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => setPokemonData(response.data))
      .catch(err => console.error("Error fetching Pokémon", err));
  };

  const fetchAdvice = () => {
    setCurrentApi('advice');
    setDogImage('');
    setPokemonData(null);
    setAdvice('');
    
    axios.get('https://api.adviceslip.com/advice')
      .then(response => setAdvice(response.data.slip.advice))
      .catch(err => console.error("Error fetching advice", err));
  };

  const closeApis = () => {
    setDogImage('');
    setPokemonData(null);
    setAdvice('');
    setCurrentApi('');
  };

  return (
    <div className="other-tests-container">
      <div style={{ textAlign: 'center', padding: '20px', marginTop: '60px'}}>
        <h1 className='title'>Click y conócete</h1>

        <div style={{ display: 'flex', marginBottom: '20px', gap: '20%', justifyContent: 'center' }}>
          <div 
            style={boxStyle} 
            onClick={fetchDog}>
            <h3>¿Qué perro eres?</h3>
          </div>
          <div 
            style={boxStyle} 
            onClick={fetchPokemon}>
            <h3>¿Qué Pokemon te representa?</h3>
          </div>
          <div 
            style={boxStyle} 
            onClick={fetchAdvice}>
            <h3>Consejos de 💩</h3>
          </div>
        </div>

        {dogImage && (
          <div style={{ textAlign:'center' }}>
            <h2>Your Dog</h2>
            <img src={dogImage} alt="Dog" style={{ width: '150px', borderRadius: '10px' }} />
            <button className='buttonStyle'onClick={closeApis}>Cerrar API
            </button>
          </div>
        )}

        {pokemonData && (
          <div>
            <h2>Your Pokémon</h2>
            <img 
              src={pokemonData.sprites.front_default} 
              alt="Ditto" 
              style={{ width: '150px', borderRadius: '10px' }} 
            />
            <p>Name: {pokemonData.name}</p>
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
            <button className='buttonStyle'onClick={closeApis}>Cerrar API
            </button>
          </div>
        )}

        {advice && (
          <div>
            <h2>Advice for You</h2>
            <p style={{ fontSize: '18px', fontStyle: 'italic' }}>"{advice}"</p>
            <button className='buttonStyle'onClick={closeApis}>Cerrar API
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const boxStyle = {
  backgroundColor: '#F8F9FA',
  borderRadius: '10px',
  width: '50%',
  padding: '20px',
  cursor: 'pointer',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s',
};

;

export default OtherTests;
