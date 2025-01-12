import { FaGraduationCap } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { GiPadlockOpen } from "react-icons/gi";

function Hero (){
    return (
      <>
        <div className="container bg-white h-[102vh] grid grid-cols-2 items-center " id="hero">
            <div className="ms-24">
              <h1 className="text-5xl font-bold text-accent" style={{fontFamily: 'Josefin Sans'}}>Learn in Simple Way</h1>
              <p className="mt-8 text-lg font-medium text-white" style={{fontFamily: 'Josefin Sans'}}>Aplikasi RingkasApp adalah aplikasi berbasis web yang ditujukan untuk memudahkan para siswa untuk 
            memahami materi-materi pembelajaran dengan fitur-fitur yang disediakan.</p>
              <button className="btn btn-neutral mt-8">Get Started</button>
            </div>
            <img src="/images/ilushero.jpg" className="w-full h-[100%] border-2 border-b-primary" />     
        </div>
        <div className="container flex justify-center">
          <div className="flex w-[85%] justify-evenly mt-[-60px] items-center">

           <div className="card card-side h-[7rem] w-[22rem] bg-base-100 shadow-xl ring-2 ring-blue-500 hover:scale-105 ease-in-out duration-300" id="chooseus">
                <div className="grid items-center justify-center w-32"><BsBoxes size={50} id="choose" className="text-neutral "/></div>
                  <div className="grid items-center">
                    <div>
                      <h2 className="card-title" id="choosetx" style={{fontFamily: 'Josefin Sans'}}>Fitur Beragam</h2>
                      <p className="text-[15px] mt-2 me-2"  id="choosetx" style={{fontFamily: 'Work Sans'}}>Disertai dengan berbagai fitur yang mempemudah proses belajar !</p>
                    </div>
                </div>
              </div>

              <div className="card card-side h-[7rem] w-[22rem] bg-base-100 shadow-xl ring-2 ring-blue-500 hover:scale-105 ease-in-out duration-300" id="chooseus">
                <div className="grid items-center justify-center w-32"><FaGraduationCap size={50} id="choose" className="text-neutral"/></div>
                  <div className="grid items-center">
                    <div>
                      <h2 className="card-title"  id="choosetx" style={{fontFamily: 'Josefin Sans'}}>Pengajar Bersetifikasi</h2>
                      <p className="text-[15px] mt-2 me-2"  id="choosetx" style={{fontFamily: 'Work Sans'}}>Dengan 60+ pengajar yang ahli dan berpengalaman !</p>
                    </div>
                </div>
              </div>

              <div className="card card-side h-[7rem] w-[22rem] bg-base-100 shadow-xl ring-2 ring-blue-500 hover:scale-105 ease-in-out duration-300" id="chooseus">
                <div className="grid items-center justify-center w-32"><GiPadlockOpen  size={50} id="choose"  className="text-neutral"/></div>
                  <div className="grid items-center">
                    <div>
                      <h2 className="card-title"  id="choosetx" style={{fontFamily: 'Josefin Sans'}}>Mudah Diakses</h2>
                      <p className="text-[15px] mt-2 me-2"  id="choosetx" style={{fontFamily: 'Work Sans'}}>Belajar dimana saja, kapan saja secara gratis</p>
                    </div>
                </div>
              </div>
        </div>
        </div>
        
      </>
    )
}
export default Hero;