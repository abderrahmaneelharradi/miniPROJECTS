import react, { useState } from 'react';

const Color = () => {
  const [color, setColor] = useState();

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div class='design' style={{ padding: '1rem' }}>
        <h1>Color Choice</h1>
        <label htmlFor="select-couleur">Choose a color : </label>
        <select id="select-couleur" onChange={handleChange} value={color}>
        <option value=""> Select </option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
      </select>

      {color && (
        <p style={{ color: color }}>
        you chose : {color}
        </p>
      )}
    </div>
  );
};

export default Color;