// import React, { useState, useEffect } from 'react';
// import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
// import { app, firestore, NoteDB } from './../../firebase';

// interface NoteDB {
//   id: string;
//   date: number;
//   noteText: string;
// }

// const db = collection(firestore, 'notes');

// function NoteApp() {
//   const [notes, setNotes] = useState<NoteDB[]>([]);
//   const [newNote, setNewNote] = useState<string>('');

//   useEffect(() => {
//     const fetchData = async () => {
//       const querySnapshot = await getDocs(db);
//       const data: NoteDB[] = [];
//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() } as NoteDB);
//       });
//       setNotes(data);
//     };

//     fetchData();
//   }, [db]);

//   const handleAddNote = async () => {
//     if (newNote.trim() !== '') {
//       const docRef = await addDoc(db, { date: Date.now(), noteText: newNote });
//       setNotes([...notes, { id: docRef.id, date: Date.now(), noteText: newNote }]);
//       setNewNote('');
//     }
//   };

//   const handleUpdateNote = async (id: string, newText: string) => {
//     await updateDoc(doc(db, id), { noteText: newText });
//     const updatedNotes = notes.map((note) => (note.id === id ? { ...note, noteText: newText } : note));
//     setNotes(updatedNotes);
//   };

//   const handleDeleteNote = async (id: string) => {
//     await deleteDoc(doc(db, id));
//     const updatedNotes = notes.filter((note) => note.id !== id);
//     setNotes(updatedNotes);
//   };

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map((note) => (
//           <li key={note.id}>
//             {note.noteText}
            
//             <br />
//             <button  onClick={() => handleDeleteNote(note.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <input className="input input-bordered w-full max-w-xs" type="text" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
//       <br />
//       <button className="btn btn-neutral" onClick={handleAddNote}>Add Note</button>
//     </div>
//   );
// }

// export default NoteApp;
