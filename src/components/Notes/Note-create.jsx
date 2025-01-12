import { addDoc, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import {db} from "../../firebase";
import { GiNotebook } from "react-icons/gi";

import { MdOutlineKeyboardReturn } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";

import WebFont from 'webfontloader';

function NoteCreate (){
    const [newTitle, setNewTitle] = useState("")
    const [newNote, setNewNote] = useState("")

    const [users, setUsers] = useState ([])
    const usersCollectionRef = collection(db, "NoteDB")

    const createUser = async () =>{
        await addDoc(usersCollectionRef, {judul: newTitle, text: newNote});
    }

    useEffect(() => {
        const getUsers =async () => {
            const data = await getDocs(usersCollectionRef)
            // console.log(data)
            setUsers(data.docs.map((doc=>({...doc.data(), id: doc.id}))))
        };

        getUsers();
    }, []);

    useEffect(() => { 
        WebFont.load({
          google: {
            families: ['Josefin Sans', 'Work Sans'],
          },
        });
    
      }, []);
    return(
        <>
        <div className="flex flex-col items-center mt-8 mb-4">
        <h1 className="text-neutral text-[35px] font-bold" style={{fontFamily: 'Josefin Sans'}}>Buat Catatan Anda</h1>
            <form className="card w-[85%] border-2">
                <div className="w-full flex justify-center h-28 border-4 border-b-primary rounded-t-xl">
                    <input type="text" 
                        placeholder="Tanpa Judul..." 
                        className="input w-[95%] mt-8 mx-2 font-bold" 
                        onChange={(event)=>{setNewTitle(event.target.value)}}/>
                </div>
                <div className="w-full flex justify-center h-[40vh]">
                < textarea type="text" 
                    placeholder="Ketik Catatan anda.." 
                    className="textarea  w-[95%] mt-6" 
                    onChange={(event)=>{setNewNote(event.target.value)}}/>
                
                </div>
                <button onClick={createUser} className="btn btn-md btn-neutral text-white w-20 my-4 ms-auto me-[2%]">Simpan</button>
                
            </form>
               
         </div>

         <div className="btm-nav btm-nav-md bg-base-200 grid grid-cols-3">
                <button>
                <a href="/noteread" className="flex justify-center items-center">< MdOutlineKeyboardReturn size={20} className="me-6"/>Kembali</a>
                </button>
                <button className="active bg-base-200 grid-colspan-2">
                 <a href="" className="flex justify-center items-center"> <SlNotebook size={20} />Catatan</a>
                </button>
              </div>
                            
            
            
        </>
        
    )
    
}

export default NoteCreate;