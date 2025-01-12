import { IoCheckmark } from "react-icons/io5";

function Benefit (){
    return (
        <>
            <div className="container my-28">
                <div className="grid grid-cols-2">

                    <div className="grid place-items-center">
                        <div className="card bg-neutral w-[650px] grid place-items-center opacity-95 rounded-tl-[60px]  rounded-br-[60px]">
                            <img src="/images/benefit.jpg" className='rounded-tl-[50px]  rounded-br-[50px] w-[600px] my-4 border-2 border-primary' alt="" />
                        </div>
                        
                    </div>

                    <div className='me-24'>
                        <h1 className="text-[36px] font-bold text-neutral ms-16" id='abouttitle'>
                            Keuntungan Belajar di aplikasi Ringkas.com
                        </h1>
                        <div className='grid grid-cols-10  items-center  mt-8 ms-16'>
                            <IoCheckmark size={50} className='text-neutral'/>
                            <p className="font-md text-[16px] ms-2 mt-3 col-span-9" style={{fontFamily: 'Work Sans'}}>
                                Mudah digunakan dan  efektif sehingga menghemat waktu penggunannya
                            </p>
                        </div>
                        <div className='grid grid-cols-10 items-center ms-16'>
                            <IoCheckmark size={50} className='text-neutral'/>
                            <p className="font-md text-[16px] ms-2 mt-3 col-span-9" style={{fontFamily: 'Work Sans'}}>
                                Terdapat berbagai pilihan materi yang mudah untuk diakses dan dipelajari
                            </p>
                        </div>
                        <div className='grid grid-cols-10 items-center ms-16'>
                            <IoCheckmark size={50} className='text-neutral'/>
                            <p className="font-md text-[16px] ms-2 mt-3 col-span-9" style={{fontFamily: 'Work Sans'}}>
                               Terdapat fitur peringkas otomatis, yang memungkinkan pengguna untuk mringkas materi yang dipilih
                            </p>
                        </div>
                   </div>

                </div>
           </div>

        </>
    )
}

export default Benefit;