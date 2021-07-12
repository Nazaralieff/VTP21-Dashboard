import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core/";

function AccountNotes() {
  const [NotesList, setNotesList] = useState([
    {
      id: 1,
      note: "Lorem Ipsum Dolor Salah",
    },
    {
      id: 2,
      note: "Dolor Salah Lorem Ipsum",
    },
  ]);

  const [Note, setNote] = useState({
    id: NotesList.length,
    note: "",
  });

  const NewNote = (e) => {
    const noteId = NotesList.length + 1;
    setNote({
      id: noteId,
      note: e.target.value,
    });
  };

  const AddNote = () => {
    setNotesList([...NotesList, Note]);
    setNote({
      id: 0,
      note: "",
    });
  };

  const RemoveNote = (id) => {
    const NewList = NotesList.filter(note => note.id !== id);
    console.log(NewList);
    setNotesList(NewList)
  };

  return (
    <div id="acc-notes">
      <div id="acc-note-add" className="flex">
        <TextField
          id="outlined-basic"
          label="Qeyd"
          variant="outlined"
          value={Note.note}
          className="acc-note-input"
          onChange={NewNote}
        />
        <Button
          id="acc-input-btn"
          variant="contained"
          color="primary"
          onClick={AddNote}
        >
          Əlavə Et
        </Button>
      </div>
      <div id="acc-note-list">
        <ul>
          {NotesList.map((item) => {
            return (
              <li className="flex">
                <p>{item.note}</p>
                <Button variant="contained" color="secondary"
                onClick = {() => {
                    RemoveNote(item.id)
                }}
                >
                  x
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AccountNotes;
