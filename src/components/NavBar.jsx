import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/mailboxes">Mailboxes</Link>
            <Link to="/mailboxes/new">New Mailbox</Link>
            <Link to="/letters/new">New Letter</Link>
        </nav>
    );
};

export default NavBar;
