import React, { useState } from 'react';
import { useNotes } from '../../hooks/useNotes';

const NotesBox = ({ topicId }) => {
  const { notes, addNote, deleteNote } = useNotes();
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    if (noteText.trim()) {
      addNote(topicId, noteText);
      setNoteText('');
    }
  };

  return (
    <div className="notes-box">
      <h3>My Notes</h3>
      <div className="note-input">
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Add a note..."
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <div className="notes-list">
        {notes && notes.map((note, idx) => (
          <div key={idx} className="note-item">
            <p>{note.text}</p>
            <button onClick={() => deleteNote(idx)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesBox;
