import { FaListUl } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { BiArrowFromLeft } from "react-icons/bi";
import { PiNotePencilBold } from "react-icons/pi";
function Material(){
    return (
        <>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex justify-end mt-28 me-[-20px] ">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-neutral rounded-full w-20 flex justify-start bg-slate-600"><FaListUl size={20} color="#0ea5e9"/></label>
                </div> 
                <div className="drawer-side">
                    <ul className="menu p-4 w-96 min-h-full bg-base-200 text-base-content rounded-s-[40px] shadow-xl shadow-slate-800">
                    {/* Sidebar content here */}
                    <li  className="border-b-2 border-slate-100 w-[120%]">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay btn btn-neutral rounded-full w-16 grid content-center bg-slate-600 mb-4"><BiArrowFromLeft size={24}/></label>
                    </li>
                    <li>
                     <div className="collapse collapse-arrow bg-base-200 w-[90%] mt-2 z-10">
                        <input type="checkbox" name="my-accordion-2" /> 
                        <div className="collapse-title text-[18px] font-medium flex items-center">
                            Bab 1 Menyusun Makalah
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
                    <li>
                     <div className="collapse collapse-arrow grid content-start bg-base-200 w-[90%] mt-[-30px]">
                        <input type="checkbox" name="my-accordion-2" /> 
                        <div className="collapse-title text-[18px] font-medium flex items-center">
                           Bab 2 Karya Ilmiah
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
            <div className="btm-nav btm-nav-md bg-base-200">
                <button>
                <a href="" className="flex justify-center items-center"><FaArrowLeft size={20} className="me-6"/>Previous</a>
                </button>
                <button className="active bg-base-200">
                <a href="" className="flex justify-center items-center">Current</a>
                </button>
                <button>
                    <a href="" className="flex justify-center items-center">Next<FaArrowRight size={20} className="ms-6"/></a>
                </button>
            </div>
            <ul className="menu bg-slate-600 rounded-box w-14 grid justify-center">
                <li>
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" color="#0ea5e9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </a>
                </li>
                <li>
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" color="#0ea5e9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </a>
                </li>
                <li>
                    <a>
                    <PiNotePencilBold size={20} color="#0ea5e9"/>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Material;