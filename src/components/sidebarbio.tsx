import { FaListUl } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { BiArrowFromLeft } from "react-icons/bi";
import { PiNotePencilBold } from "react-icons/pi";
function Sidebarbio(){
    return (
        <>
            <div className="drawer drawer-end absolute mt-32">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex justify-end  z-0 me-[-20px] ">
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary rounded-full w-20 flex justify-start"><FaListUl size={20} /></label>
                </div> 
                <div className="drawer-side">
                    <ul className="menu p-4 w-96 min-h-full bg-base-200 text-base-content rounded-s-[40px] shadow-xl shadow-slate-800">
                   
                    <li  className="border-b-2 border-slate-100 w-[120%]">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay btn btn-primary rounded-full w-16 grid content-center bg-slate-600 mb-4"><BiArrowFromLeft size={24}/></label>
                    </li>
                    <li>
                     <div className="collapse collapse-arrow bg-base-200 w-[90%] mt-2 z-10">
                        <input type="checkbox" name="my-accordion-2" /> 
                        <div className="collapse-title text-[18px] font-medium flex items-center">
                            Bab 1 Klasifikasi Mahkluk Hidup
                        </div>
                        <div className="collapse-content"> 
                            <ul className="grid gap-4">
                                <li><a href="/subbio11">Prinsip Dasar Klasifikasi</a></li>
                                <li><a href="/subbio12">Macam - Macam Klasifikasi</a></li>
                                <li><a href="/subbio13">Perkembangan Sejarah Klasifikasi</a></li>
                            </ul>
                        </div>
                    </div>
                    </li>
                    <li>
                     <div className="collapse collapse-arrow grid content-start bg-base-200 w-[90%] mt-[-30px]">
                        <input type="checkbox" name="my-accordion-2" /> 
                        <div className="collapse-title text-[18px] font-medium flex items-center">
                           Bab 2 Kunci Determinasi
                        </div>
                        <div className="collapse-content"> 
                            <ul className="grid gap-4">
                                <li>Subbab 1</li>
                                <li>Subbab 2</li>
                                <li>Subbab 3</li>
                            </ul>
                        </div>
                    </div>
                    </li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}

export default Sidebarbio;