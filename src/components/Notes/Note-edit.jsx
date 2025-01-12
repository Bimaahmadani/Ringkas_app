import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import {db} from "../../firebase";
import { GiNotebook } from "react-icons/gi";

function NoteUpdate() {
  const [users, setUsers] = useState([]);
  const [newText, setNewText] = useState(""); // State to manage the new text
  const usersCollectionRef = collection(db, "NoteDB");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [usersCollectionRef]);

  const handleTextUpdate = async (userId) => {
    try {
      const userDocRef = doc(usersCollectionRef, userId);
      await updateDoc(userDocRef, { text: newText });
      // Refresh the users list after the update
      getUsers();
      setNewText(""); // Clear the input field after updating
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  // ... existing code ...

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-8 mb-10">
        {/* Existing code... */}

        {users.map((user) => (
          <div key={user.id} className="card card-side shadow-lg mt-10 bg-slate-400 border-r-8 border-primary w-[85%]">
            {/* Existing code... */}
            <div className="card-body">
              <h1 className="card-title text-primary ">{user.judul}</h1>
              <p className=" mt-2 truncate text-white">{user.text}</p>

              {/* Form to update the text */}
              <form className="mt-2" onSubmit={() => handleTextUpdate(user.id)}>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  placeholder="New text..."
                  className="border p-2"
                />
                <button type="submit" className="btn btn-sm btn-neutral text-white mt-2">
                  Update Text
                </button>
              </form>
            </div>
          </div>
        ))}

        {/* Existing code... */}
      </div>

      {/* Existing code... */}
    </>
  );
}

export default NoteUpdate;
