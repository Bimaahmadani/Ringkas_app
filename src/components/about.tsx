import './style.css'
import { IoCheckmark } from "react-icons/io5";

function About() {
 return (
    <div className="container mt-[20vh00] mt-28">
      <div className="grid grid-cols-2">
        <div className='me-8'>
          <h1 className="text-[36px] font-bold text-neutral ms-16" id='abouttitle'>
            Belajar Mudah bersama Aplikasi Ringkas.com
          </h1>
          <p className="font-md ms-16 text-[16px] mt-6" style={{fontFamily: 'Work Sans'}}>
            Aplikasi Ringkas.com adalah aplikasi berbasis web yang ditujukan untuk memudahkan para siswa untuk 
            memahami materi-materi pembelajaran dengan fitur-fitur yang disediakan
          </p>
          <div className='flex flex-row items-center  mt-8 ms-16'>
              <IoCheckmark size={60} className='text-neutral'/>
              <p className="font-md text-[16px] ms-2 mt-3" style={{fontFamily: 'Work Sans'}}>
                Dengan Fitur Peringkas otomatis, mempermudah pengguna dalam membuat catatan dan memahami materi
              </p>
          </div>
          <div className='flex flex-row items-center ms-16'>
              <IoCheckmark size={60} className='text-neutral'/>
              <p className="font-md text-[16px] ms-2 mt-3" style={{fontFamily: 'Work Sans'}}>
                Sejumlah pembimbing handal, komunikatif dan bersetifikasi membantu pengguna dalam proses pembelajaran
              </p>
          </div>
          <div className='flex flex-row items-center ms-16'>
              <IoCheckmark size={60} className='text-neutral'/>
              <p className="font-md text-[16px] ms-2 mt-3" style={{fontFamily: 'Work Sans'}}>
                Belajar kapan saja, dan dimana saja secara online oleh pengguna melalui komputer dan hanphone mereka
              </p>
          </div>
        </div>

        <div>
          <img src="/images/about1.jpg" className='rounded-xl w-full' alt="" />
        </div>
      </div>
    </div>
  );

};

 


export default About;