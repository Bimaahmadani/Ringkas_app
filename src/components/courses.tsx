import { BiSolidBookmarkAlt } from "react-icons/bi";
import { BiTime } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";


function Courses (){
    return (
        <>
        
        <div className="container mt-[20vh] flex items-center text-center flex-col">
            <div className="w-full">
            <h1 className="text-neutral text-5xl font-bold" style={{fontFamily: 'Josefin Sans'}}>Kelas Terfavorit kami</h1>
            </div>
        <div className="flex flex-row justify-evenly w-[70%] mt-16">
            <div className="card w-80  shadow-xl">
                <figure><img src="/images/biology.jpg" alt=""/></figure>
                <div className="card-body ">
                    <h1 className="card-title ">Biologi</h1>
                    <div className="mt-2 w-40 grid grid-cols-4 gap-3 item-center inline-block align-middle">
                    <BiSolidBookmarkAlt color="#1c375b" size={20}/><p className="col-span-3 text-sm text-start">8 Bab</p>
                    <BiTime color="#1c375b" size={20}/><p className="col-span-3 text-sm text-start" >2 Jam / Hari</p> 
                    <BsPeopleFill color="#1c375b" size={20}/><p className="col-span-3 text-sm text-start" >8.454 Peserta</p>
                    </div>
                    <div className="card-actions justify-end mt-4">
                        <a type="button" href="/subbio11" className="btn  btn-neutral hover:scale-105 btn-sm rounded-full">Learn Now</a>
                    </div>
                </div>
            </div>
            <div className="card w-80  shadow-xl">
                <figure><img src="/images/english.jpg" alt="" /></figure>
                <div className="card-body ">
                    <h1 className="card-title ">Bahasa Inggris</h1>
                    <div className="mt-2 w-40 grid grid-cols-4 gap-3 item-center inline-block align-middle">
                    <BiSolidBookmarkAlt color="#1c375b" size={20}/><p className="col-span-3 text-sm text-start">7 Bab</p>
                    <BiTime color="#1c375b" size={20}/><p className="col-span-3 text-sm text-start" >2 Jam / Hari</p> 
                    <BsPeopleFill color="#1c375b" size={20}/><p className="col-span-3 text-sm text-start" >7.331 Peserta</p>
                    </div>
                    <div className="card-actions justify-end mt-4">
                        <a type="button" href="/material" className="btn  btn-neutral hover:scale-105 btn-sm rounded-full">Learn Now</a>
                    </div>
                </div>
            </div>
            <div className="card w-80  shadow-xl">
                <figure><img src="/images/Math.jpg" alt="" /></figure>
                <div className="card-body ">
                    <h1 className="card-title ">Matematika</h1>
                    <div className="mt-2 w-40 grid grid-cols-4 gap-3 item-center inline-block align-middle">
                    <BiSolidBookmarkAlt color="#1c375b" size={20}/><p className="col-span-3 text-sm text-start">6 Bab</p>
                    <BiTime color="#1c375b" size={20}/><p className="col-span-3 text-sm text-start" >3 Jam / Hari</p> 
                    <BsPeopleFill color="#1c375b" size={20}/><p className="col-span-3 text-sm text-start" >4.652 Peserta</p>
                    </div>
                    <div className="card-actions justify-end mt-4">
                        <a type="button" className="btn  btn-neutral hover:scale-105 btn-sm rounded-full">Learn Now</a>
                    </div>
                </div>
            </div>
        </div>
        
        
        </div>
        </>
    )
    
}

export default Courses;