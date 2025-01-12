import React, { useState } from 'react';

import { PiNotePencilBold } from "react-icons/pi";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";

import { useEffect } from 'react';
import WebFont from 'webfontloader';

function BioSummary11 (){
    useEffect(() => { 
      WebFont.load({
        google: {
          families: ['Josefin Sans', 'Work Sans'],
        },
      });

    }, []);

    const [text, setText] = useState('');
    const [numSentences, setNumSentences] = useState('');
    const [summary, setSummary] = useState('');
  
    const summarizeText = async () => {
      const formdata = new FormData();
      formdata.append("key", "a8687f541185b1af584d16a68bc0eb1d");
      formdata.append("txt", text);
      formdata.append("sentences", numSentences);
  
      const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow' as RequestRedirect
      };
  
      try {
        const response = await fetch("https://api.meaningcloud.com/summarization-1.0", requestOptions);
        const data = await response.json();
        setSummary(data.summary);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(summary);
    };

    return (
        <>
            <h1 className='text-neutral text-4xl font-bold mt-8 text-center' style={{fontFamily: 'Josefin Sans'}}>Peringkas Otomatis</h1>
           <div className='container grid grid-cols-2 justify-items-center'>
              <div className='flex w-full justify-center'>
                <div className='card flex-col w-[90%] h-[90%] mt-8 shadow-xl mb-8 ring-2 ring-primary'>
                      <div className='card-body'>
                        <span className="text-primary font-bold text-start">Peringkas :</span>
                        <textarea className='textarea textarea-primary h-[30vh]' placeholder="Input your note here.." value={text} onChange={(e) => setText(e.target.value)} />
                      </div>
                      <div className='card-body'>
                          <span className="text-primary font-bold text-start">Jumlah Kalimat :</span>
                          <input className='input input-bordered' type="number" value={numSentences} onChange={(e) => setNumSentences(e.target.value)} />
                      </div>
                      <div className="card-actions justify-center mb-4">
                          <button className='btn btn-neutral text-white' onClick={summarizeText}>Ringkas Teks</button>
                      </div>
                    </div>
              </div>

                  <div className='flex w-full justify-center'>
                    <div className='card flex-col w-[90%]  h-[90%] mt-8 mb-8 shadow-xl  ring-2 ring-primary'>
                      <h2 className='text-neutral font-bold ms-6 mt-8' style={{fontFamily: 'Josefin Sans'}}>Hasil Ringkasan:</h2>
                          {summary && (
                            
                                <div className='card-body text-start mt-1 p-6'>
                                  <p className='text-primary'>{summary}</p>
                                </div>
                          )}  
                         <div className="card-actions justify-start ms-4 mb-4 mt-auto">
                          <button className='btn btn-neutral text-white' onClick={copyToClipboard}>Salin Teks</button>
                         </div>   
                           
                      </div>
                  </div>
                  
              </div>

             <div className="btm-nav btm-nav-md bg-base-200 grid grid-cols-3">
                <button>
                <a href="/subbio11" className="flex justify-center items-center">< MdOutlineKeyboardReturn size={20} className="me-6"/>Back to the Material</a>
                </button>
                <button className="active bg-base-200 grid-colspan-2">
                 <a href="" className="flex justify-center items-center"> <PiNotePencilBold size={20} />Rangkuman</a>
                </button>
                <button className="active bg-base-200 grid-colspan-2">
                 <a href="/noteread" className="flex justify-center items-center"> <SlNotebook size={20} />Catatan</a>
                </button>
              </div>
        </>
    )
}

export default BioSummary11;
