import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes, letters }) => {
    const { id } = useParams();
    const mailbox = mailboxes.find((box) => box._id === parseInt(id));
    const mailboxLetters = letters.filter((letter) => letter.mailboxId === parseInt(id));

    if (!mailbox) {
        return <h2>Mailbox not found</h2>;
    }

    return (
        <div>
            <h2>Mailbox Details: {mailbox.name}</h2>
            <p>
                <strong>Box Number:</strong> {mailbox._id}
            </p>
            <p>
                <strong>Size:</strong> {mailbox.size}
            </p>
            <h3>Letters Sent:</h3>
            {mailboxLetters.length > 0 ? (
                <ul>
                    {mailboxLetters.map((letter) => (
                        <li key={letter._id}>
                            <strong>To:</strong> {letter.recipientName} - <strong>Message:</strong> {letter.message}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No letters sent to this mailbox.</p>
            )}
        </div>
    );
};

export default MailboxDetails;
