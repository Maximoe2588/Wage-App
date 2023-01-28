import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlashcardApp = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    getFlashcards();
  }, []);

  const getFlashcards = async () => {
    const res = await axios.get('http://localhost:5000/flashcards');
    setFlashcards(res.data);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (editing) {
      await axios.put(`http://localhost:5000/flashcards/${id}`, {
        question,
        answer
      });
    } else {
      await axios.post('http://localhost:5000/flashcards', {
        question,
        answer
      });
    }
    setEditing(false);
    setQuestion('');
    setAnswer('');
    getFlashcards();
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/flashcards/${id}`);
    getFlashcards();
  }

  const handleEdit = (flashcard) => {
    setEditing(true);
    setQuestion(flashcard.question);
    setAnswer(flashcard.answer);
    setId(flashcard._id);
  }

  return (
    <div>
      <h1>Flashcard App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input type="text" value={question} onChange={e => setQuestion(e.target.value)} />
        </label>
        <br />
        <label>
          Answer:
          <input type="text" value={answer} onChange={e => setAnswer(e.target.value)} />
        </label>
        <br />
        <button type="submit">{editing ? 'Update' : 'Add'} Flashcard</button>
      </form>
      <br />
      <h2>Flashcards</h2>
      <ul>
        {flashcards.map(flashcard => (
          <li key={flashcard._id}>
            <p>Question: {flashcard.question}</p>
            <p>Answer: {flashcard.answer}</p>
            <button onClick={() => handleEdit(flashcard)}>Edit</button>
            <button onClick={() => handleDelete(flashcard._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashcardApp;
