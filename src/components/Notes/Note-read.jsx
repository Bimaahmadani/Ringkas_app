import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import {db} from "../../firebase";
import { GiNotebook } from "react-icons/gi";

import { PiNotePencilBold } from "react-icons/pi";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";

import WebFont from 'webfontloader';

function NoteRead (){
    const [users, setUsers] = useState ([])
    const usersCollectionRef = collection(db, "NoteDB")

    const deleteNote = async (id)=>{
        const userDoc = doc(db, "NoteDB", id);
        await deleteDoc(userDoc);
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
        <div className="flex flex-col justify-center items-center mt-8 mb-10">
            <h1 className="text-neutral text-[35px] font-bold" style={{fontFamily: 'Josefin Sans'}}>Catatan Anda</h1>
                        {users.map((user)=>
                        {return <div  className="card card-side shadow-lg mt-10 bg-slate-400 border-r-8 border-primary w-[85%]">
                                    <figure className="text-center w-[6rem]"><GiNotebook className="text-primary"  /></figure>
                                    <div className="card-body ">
                                        {""} 
                                                <h1 className="card-title text-primary ">{user.judul}</h1>
                                                <p className=" mt-2  text-white">{user.text}</p>
                                    </div>
                                    <div className="card-actions justify-end mt-auto me-4 mb-4">
                                        <a  className="btn  btn-neutral btn-md rounded-lg"
                                        onClick={()=>{deleteNote(user.id);}}>Hapus</a>
                                    </div>


                                </div>}
                                )}
                    <div className="flex ms-auto me-[7%] mt-10 mb-8">
                        <a href="/notecreate" className="btn btn-md btn-neutral text-white">Buat Catatan</a>
                    </div>
                
        </div>

             <div className="btm-nav btm-nav-md bg-base-200 grid grid-cols-3">
                <button>
                <a href="/biosummary11" className="flex justify-center items-center">< MdOutlineKeyboardReturn size={20} className="me-6"/>Kembali</a>
                </button>
                <button className="active bg-base-200 grid-colspan-2">
                 <a href="" className="flex justify-center items-center"> <SlNotebook size={20} />Catatan</a>
                </button>
              </div>
                            
            
            
        </>
        
    )
    
}

export default NoteRead;