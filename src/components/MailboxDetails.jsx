import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes, letters }) => {
    const { id } = useParams();
    const mailbox = mailboxes.find((box) => box._id === id);
    const mailboxLetters = letters.filter((letter) => letter.mailboxId === id);

    return (
        <div>
            <h2>Mailbox Details: {mailbox ? mailbox.name : 'Mailbox not found'}</h2>
            <h3>Letters Sent:</h3>
            <ul>
                {mailboxLetters.length > 0 ? (
                    mailboxLetters.map((letter) => (
                        <li key={letter._id}>
                            <strong>To:</strong> {letter.recipientName} - <strong>Message:</strong> {letter.message}
                        </li>
                    ))
                ) : (
                    <li>No letters sent to this mailbox.</li>
                )}
            </ul>
        </div>
    );
};

export default MailboxDetails;
