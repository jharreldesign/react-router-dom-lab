import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LetterForm from './components/LetterForm';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';
import './App.css';

function App() {
    const [mailboxes, setMailboxes] = useState([]);
    const [letters, setLetters] = useState([]);

    //We create a new function called addMailbox and pass in newMailbox as it's props
    const addMailbox = (newMailbox) => {
        //We call mailboxWithId by using the spread operator and create a new unique ID for the new item in the array
        const mailboxWithId = { ...newMailbox, _id: mailboxes.length + 1 };
        //We then update the state setMailboxes with the new item in the array
        setMailboxes([...mailboxes, mailboxWithId]);
    };

    const addLetter = (newLetter) => {
        const letterWithId = { ...newLetter, _id: letters.length + 1 };
        setLetters([...letters, letterWithId]);
    };

    return (
        <>
            <NavBar />
            <h1>Post Office</h1>
            <Routes>
                <Route path="/" element={<h2>Home Page</h2>} />
                <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
                <Route path="/mailboxes/new" element={<MailboxForm addMailbox={addMailbox} />} />
                <Route path="/mailboxes/:id" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
                <Route path="/letters/new" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
            </Routes>
        </>
    );
}

export default App;
