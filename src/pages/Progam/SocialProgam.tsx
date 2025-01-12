import "../../components/style.css"
import Kaki from "../../components/footer";
import Navbar from "../../components/navbar";

import { BiSolidBookmarkAlt } from "react-icons/bi";
import { BiTime } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";

import React, { useEffect } from 'react';
import WebFont from 'webfontloader';


const SocialProgam= () => {

        useEffect(() => { 
          WebFont.load({
            google: {
              families: ['Josefin Sans', 'Work Sans'],
            },
          });
      
        }, []);
    return (
        <>
        <Navbar></Navbar>
        <div className="flex flex-col h-[300px] bg-primary">
                
            <h1 className="text-5xl font-bold text-accent mt-24 ms-28" style={{fontFamily: 'Josefin Sans'}}>JURUSAN IPS</h1>
        
            <div className="text-md font-medium breadcrumbs text-neutral mt-8 ms-28">
                <ul>
                    <li><a>Home</a></li> 
                    <li><a>Progam</a></li> 
                    <li><a>Social</a></li>
                </ul>
            </div>
        </div>

            <div className="container flex items-center text-center flex-col">

                    <div className="grid grid-cols-4 place-items-center gap-y-4 w-[90%] my-16">

                        <div className="card w-[18rem]  shadow-xl">
                            <figure><img src="/images/sociology.jpg" alt=""/></figure>
                            <div className="card-body ">
                                <h1 className="card-title ">Sosiologi</h1>
                                <div className="mt-2 w-40 grid grid-cols-4 gap-3 item-center inline-block align-middle">
                                <BiSolidBookmarkAlt color="#1c375b" size={20}/><p className="col-span-3 text-sm text-start">8 Bab</p>
                                <BiTime color="#1c375b" size={20}/><p className="col-span-3 text-sm text-start" >2 Jam / Hari</p> 
                                <BsPeopleFill color="#1c375b" size={20}/><p className="col-span-3 text-sm text-start" >8.454 Peserta</p>
                                </div>
                                <div className="card-actions justify-end mt-4">
                                    <a type="button" href="" className="btn  btn-neutral hover:scale-105 btn-sm rounded-full">Learn Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="card w-[18rem]  shadow-xl">
                            <figure><img src="/images/sejarah.jpg" alt="" /></figure>
                            <div className="card-body ">
                                <h1 className="card-title ">Sejarah</h1>
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

                        <div className="card w-[18rem]  shadow-xl">
                            <figure><img src="/images/geografi.jpg" alt="" /></figure>
                            <div className="card-body ">
                                <h1 className="card-title ">Geografi</h1>
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

                        <div className="card w-[18rem]  shadow-xl">
                            <figure><img src="/images/ekonomi.jpg" alt="" /></figure>
                            <div className="card-body ">
                                <h1 className="card-title ">Ekonomi</h1>
                                <div className="mt-2 w-40 grid grid-cols-4 gap-3 item-center inline-block align-middle">
                                <BiSolidBookmarkAlt color="#1c375b" size={20}/><p className="col-span-3 text-sm text-start">8 Bab</p>
                                <BiTime color="#1c375b" size={20}/><p className="col-span-3 text-sm text-start" >2.5 Jam / Hari</p> 
                                <BsPeopleFill color="#1c375b" size={20}/><p className="col-span-3 text-sm text-start" >1.652 Peserta</p>
                                </div>
                                <div className="card-actions justify-end mt-4">
                                    <a type="button" className="btn  btn-neutral hover:scale-105 btn-sm rounded-full">Learn Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="card w-[18rem]  shadow-xl">
                            <figure><img src="/images/wirausaha.jpg" alt=""/></figure>
                            <div className="card-body ">
                                <h1 className="card-title ">Kewirausahaan</h1>
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

                        <div className="card w-[18rem]  shadow-xl">
                            <figure><img src="/images/akuntansi.jpg" alt="" /></figure>
                            <div className="card-body ">
                                <h1 className="card-title ">Akuntansi</h1>
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

                        <div className="card w-[18rem]  shadow-xl">
                            <figure><img src="/images/flag-indonesia.jpg" alt="" /></figure>
                            <div className="card-body ">
                                <h1 className="card-title ">Pendidikan Kewarganegaraan</h1>
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
        
        <Kaki></Kaki>
        </>
    )
    
}

export default SocialProgam;