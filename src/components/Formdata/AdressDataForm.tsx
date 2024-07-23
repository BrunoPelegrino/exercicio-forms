import { useState } from 'react';
import countryStates from '../../countryStates';

function AdressDataForm() {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState]= useState(countryStates[0]);
  const [type, setType] = useState('Casa');

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^a-zA-Z0-9\s]/g, '');
    if (inputValue.length <= 200) {
      setAddress(inputValue);
    }
  }

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 28) {
      setCity(inputValue);
    }
  }

  const handleCityBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^\d/.test(inputValue)) {
      setCity('');
    }
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const inputValue = e.target.value;
    setState(inputValue);
  }

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  return (
    <form>
      <fieldset>
      <legend>Dados de endereço</legend>
        <div>
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            maxLength={200}
            required
          />
        </div>
        <div>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
            onBlur={handleCityBlur}
            maxLength={28}
            required
          />
        </div>
        <div>
          <label htmlFor="state">Estado</label>
          <select
            id="state" 
            onChange={handleStateChange}
            value={state} >
            {countryStates.map((state, index) => (
              <option value={state} key={index}>{state}</option>
            ))}
          </select>
        </div>
        <div className="radio-group">
          <label>Tipo</label>
          <div>
            <input
              id="casa"
              type="radio"
              name="type"
              value="Casa"
              checked={type === "Casa"}
              onChange={handleTypeChange}
            />
            <label htmlFor="casa" className="radio-label">Casa</label>
          </div>
          <div>
            <input
              id="apartamento"
              type="radio"
              name="type"
              value="Apartamento"
              checked={type === "Apartamento"}
              onChange={handleTypeChange}
            />
            <label htmlFor="apartamento" className="radio-label">Apartamento</label>
          </div>
        </div>
        <button type="submit">Enviar</button>
      </fieldset>
    </form>
  );
}

export default AdressDataForm;
