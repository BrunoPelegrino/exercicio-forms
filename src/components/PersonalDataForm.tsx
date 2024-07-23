import { useState } from 'react';

function PersonalFormData() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toUpperCase();
    if (inputValue.length <= 40) {
      setName(inputValue);
    }
}

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 50) {
          setEmail(inputValue);
        }
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 11) {
      setCpf(inputValue);
    }
};

  return (
    <form>
      <fieldset>
        <legend>Dados Pessoais</legend>

        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            maxLength={40}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            maxLength={50}
            required
          />
        </div>
        <div>
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={handleCpfChange}
            maxLength={11}
            required
          />
        </div>
      </fieldset>
    </form>
  );
}


export default PersonalFormData;
