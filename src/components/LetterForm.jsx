import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = ({ mailboxes, addLetter }) => {
    const [recipientName, setRecipientName] = useState('');
    const [message, setMessage] = useState('');
    const [selectedMailboxId, setSelectedMailboxId] = useState(mailboxes[0]?._id || '');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!recipientName.trim() || !message.trim()) {
            alert("Please fill in all fields");
            return;
        }

        const newLetter = {
            recipientName,
            message,
            mailboxId: selectedMailboxId,
        };
        addLetter(newLetter); 
        navigate(`/mailboxes/${selectedMailboxId}`); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Select Mailbox:
                <select value={selectedMailboxId} onChange={(e) => setSelectedMailboxId(e.target.value)}>
                    {mailboxes.map((mailbox) => (
                        <option key={mailbox._id} value={mailbox._id}>
                            {mailbox.name} (Box #{mailbox._id})
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Recipient Name:
                <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    required
                />
            </label>
            <label>
                Message:
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Send Letter</button>
        </form>
    );
};

export default LetterForm;
