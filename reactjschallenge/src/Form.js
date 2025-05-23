import React, { useState } from 'react';

function Form() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div class='design'>
            <label onSubmit={handleSubmit}>
                <div>
                    <label>
                        Firstname:
                        <input 
                            type="text" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </label>

            {submitted && (
                <p>Merci {firstName}, votre email {email} a bien été enregistré.</p>
            )}
        </div>
    );
}

export default Form;