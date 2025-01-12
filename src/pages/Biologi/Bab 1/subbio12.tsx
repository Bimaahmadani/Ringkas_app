import { useEffect, useRef } from 'react';
import Clipboard from 'clipboard';

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { PiNotePencilBold } from "react-icons/pi";

import { IoMdCopy } from "react-icons/io";
import Sidebarbio from "../../../components/sidebarbio";

import { BsExplicit } from "react-icons/bs";
function Subbio12(){

    const textToCopyRef = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        const clipboard = new Clipboard('.copy-button', {
        text: () => textToCopyRef.current?.innerText || '', // Use optional chaining and provide a default value
        });

        return () => {
        clipboard.destroy();
        };
    }, []);

    return (
    <>
            <ul className="menu bg-primary text-base-100 rounded-box w-16 absolute mt-40  ms-[-10px] items-center">
                <li>
                    <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </a>
                </li>
                <li>
                    <a className='copy-button'>
                    <IoMdCopy  size={22}/>
                    </a>
                </li>
                <li>
                    <a href="/biosummary11"> 
                     <PiNotePencilBold size={20} />
                    </a>
                </li>
            </ul>
            <Sidebarbio/>
            <div className="container flex justify-center">
                <div className="p-8 mb-20  w-[70%]">
                    <p ref={textToCopyRef}>
                    <h1 className="text-xl font-bold">2. Macam-Macam Klasifikasi</h1>
                    <p className="mt-8  text-md font-medium ">
                        Pengelompokan makhluk hidup dapat dilakukan dengan berbagai sistem. Sistem
                        pengelompokan tersebut yaitu artifisial, natural, dan filogeni. 
                    </p>
                    <p className="mt-8 text-md font-bold ">a. Klasifikasi Sistem Alami</p>
                    <p className="mt-2 ms-5 text-md font-medium ">
                    Klasifikasi sistem alami dirintis oleh Michael Adams dan Jean Baptiste de
                    Lamarck. Sistem ini menghendaki terbentuknya kelompok-kelompok takson
                    yang alami. Artinya anggota-anggota yang membentuk unit takson terjadi
                    secara alamiah atau sewajarnya seperti yang dikehendaki oleh alam.
                    Klasifikasi sistem alami menggunakan dasar persamaan dan perbedaan
                    morfologi (bentuk luar tubuh) secara alami atau wajar. Contoh : a. Hewan
                    dikelompokkan berdasarkan : 
                    </p>
                    <ul className="mt-2 grid gap-2 list-decimal ms-12 font-medium">
                            <li>
                            Cara geraknya : hewan berkaki dua, berkaki empat, tidak berkaki, hewan
                            bersayap, hewan bersirip
                            </li>
                            <li>
                            Penutup tubuh : hewan berbulu, bersisik, berambut , bercangkang. b.
                            Tumbuhan dikelompokkan berdasarkan jumlah keping biji : tumbuhan
                            berkeping biji satu, berkeping biji dua. 
                            </li>
                    </ul>
                    <p className="mt-8 text-md font-bold ">b. Klasifikasi Sistem Buatan</p>
                    <p className="mt-2 ms-5 text-md font-medium ">
                    Sistem Artifisial adalah klasifikasi yang menggunakan satu atau dua ciri pada
                    makhluk hidup. Sistem ini disusun dengan menggunakan ciri-ciri atau sifatsifat yang sesuai dengan kehendak manusia, atau sifat lainnya. Adapun ciri
                    yang digunakan berupa struktur morfologi, anatomi dan fisiologi (terutama
                    alat reproduksi dan habitatnya). Misalnya klasifikasi tumbuhan dapat
                    menggunakan dasar habitat (tempat hidup), habitus atau berdasarkan
                    perawakan (berupa pohon, perdu, semak, ternak dan memanjat).
                    Tokoh sistem Artifisial antara lain Aristoteles yang membagi makhluk hidup
                    menjadi dua kelompok, yaitu tumbuhan (plantae) dan hewan (animalia). Ia
                    pun membagi tumbuhan menjadi kelompok pohon, perdu, semak, terna serta
                    memanjat. Tokoh lainnya adalah Carolus Linnaeus yang mengelompokkan
                    tumbuhan berdasarkan alat reproduksinya.
                    </p>
                    <p className="mt-8 text-md font-bold ">c. Klasifikasi Sistem Filogenetik</p>
                    <p className="mt-2 ms-5 text-md font-medium ">
                    Klasifikasi sistem filogenetik muncul setelah teori evolusi dikemukakan oleh
                    para ahli biologi. Pertama kali dikemukakan oleh Charles Darwin pada tahun
                    1859. Menurut Darwin, terdapat hubungan antara klasifikasi dengan evolusi.
                    Sistem ilogenetik disusun berdasarkan jauh dekatnya kekerabatan antara
                    takson yang satu dengan yang lainnya. Selain mencerminkan persamaan dan
                    perbedaan sifat morfologi dan anatomi maupun fisiologinya, sistem ini pun
                    menjelaskan mengapa makhluk hidup semuanya memiliki kesamaan molekul
                    dan biokimia, tetapi berbeda-beda dalam bentuk susunan dan fungsinya pada
                    setiap makhluk hidup
                    </p>
                    <p className="mt-2 ms-5 text-md font-medium ">                
                    Jadi pada dasarnya, klasifikasi sistem filogenetik disusun berdasarkan
                    persamaan fenotip yang mengacu pada sifat-sifat bentuk luar, faal, tingkah
                    laku yang dapat diamati, dan pewarisan keturunan yang mengacu pada
                    hubungan evolusioner sejak jenis nenek moyang hingga cabang-cabang
                    keturunannya. Sistem klasifikasi filogenik menjadi dasar dalam perkembangan
                    sejarah klasifikasi 5 kingdom.
                    </p>
                    </p>
                </div>
            </div>
            <div className="btm-nav btm-nav-md bg-base-200 ">
                <button>
                <a href="/subbio11" className="flex justify-center items-center"><FaArrowLeft size={20} className="me-6"/>Previous</a>
                </button>
                <button className="active bg-base-200">
                <a href="" className="flex justify-center items-center">Current</a>
                </button>
                <button>
                    <a href="/subbio13" className="flex justify-center items-center">Next<FaArrowRight size={20} className="ms-6"/></a>
                </button>
            </div>
    </>
    )
}

export default Subbio12;