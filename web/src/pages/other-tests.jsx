import { useState } from 'react';
import axios from 'axios'; 

function OtherTests() {
  const [dogImage, setDogImage] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const fetchDog = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => setDogImage(response.data.message))
      .catch(err => console.error("Error fetching dog image", err));
  };


  const fetchPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => setPokemonData(response.data))
      .catch(err => console.error("Error fetching Pokémon", err));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', marginTop: '60px'}}>
      <h1>Choose an API</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <div 
          style={boxStyle} 
          onClick={fetchDog}>
          <h3>What Dog Are You?</h3>
        </div>
        <div 
          style={boxStyle} 
          onClick={fetchPokemon}>
          <h3>What Pokémon Are You?</h3>
        </div>
      </div>

      {dogImage && (
        <div>
          <h2>Your Dog</h2>
          <img src={dogImage} alt="Dog" style={{ width: '300px', borderRadius: '10px' }} />
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
        </div>
      )}
    </div>
  );
}

const boxStyle = {
  backgroundColor: '#A8EDEA',
  borderRadius: '10px',
  width: '30%',
  padding: '20px',
  cursor: 'pointer',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s',
};

export default OtherTests;
