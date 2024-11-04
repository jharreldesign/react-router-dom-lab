import { Link } from 'react-router-dom';
import './MailboxList.css';

const MailboxList = ({ mailboxes }) => {
  return (
    <div className="mailbox-list">
      {mailboxes.map((mailbox) => (
        <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id} className="mailbox-container">
          <h3>Box #{mailbox._id}</h3>
          <p>{mailbox.name}</p>
          <p>Size: {mailbox.size}</p>
        </Link>
      ))}
    </div>
  );
};

export default MailboxList;