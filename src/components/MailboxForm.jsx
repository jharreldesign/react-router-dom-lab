import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const MailboxForm = ({ addMailbox }) => {
    const [formData, setFormData] = useState({
        name: '',
        size: 'small'
    });

    const navigate = useNavigate(); // Initialize navigate

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.name.trim()) {
            alert("Name is required");
            return;
        }

        addMailbox(formData);
        setFormData({ name: '', size: 'small' });

        navigate('/mailboxes'); // Redirect to /mailboxes after form submission
    };

    return (
        <>
            <main>
                <h2>New Mailbox</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange} 
                    />
                    
                    <label htmlFor="size">Mailbox Size:</label>
                    <select 
                        name="size" 
                        id="size" 
                        value={formData.size} 
                        onChange={handleChange}
                    >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>

                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    );
};

export default MailboxForm;
