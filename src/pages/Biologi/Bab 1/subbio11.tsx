import { useEffect, useRef } from 'react';
import Clipboard from 'clipboard';

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { PiNotePencilBold } from "react-icons/pi";
import { IoMdCopy } from "react-icons/io";
import Sidebarbio from "../../../components/sidebarbio";
function Subbio11(){

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
                   <h1 className="text-xl font-bold">1. Prinsip = Prinsip Dasar Klasifikasi</h1>
                    <p  className="mt-8 text-md font-medium ">
                        Prinsip mendasar klasifikasi adalah adanya perbedaan dan persamaan setiap
                        mahluk hidup. Selain itu manfaat mahluk hidup tersebut juga berpengaruh.
                        Begitupula dengan ciri morfologi, anatomi, dan biokimianya. Ciri morfologi adalah
                        ciri yang nampak dari luar, misalnya morfologi bulu pada kucing. Sedangkan
                        ciri anatomi adalah struktur tampak dalam contohnya adalah anatomi jantung,
                        yang berarti bagaimana jantung dari kucing tersebut disusun dan bagianbagiannya.
                        Pasti kalian tidak asing lagi dengan situasi di pasar. Kalian akan melihat buahbuah akan ditempatkan dalam satu lokasi, demikian juga dengan sayursayuran. Tidak akan ditemukam bahan pangan disatu wadahkan dengan
                        bahan pembersih. Mengapa Demikian?? Pasti ada tujuan pengelompokkan ini.
                        Apa dasar pengelompokkan dan manfaatnya? Untuk lebih jelas kita baca
                        uraian materi secara seksama berikut ini!
                    </p>
                    <p className="mt-8 text-md font-medium ">
                        Kelompok mahluk hidup yang anggotanya hanya menunjukkan sedikit persamaan
                        ciri dan sifat, jumlah anggotanya lebih besar dibandingkan kelompok mahluk
                        hidup yang anggotanya mempunyai lebih banyak persamaan ciri dan sifat.
                        Misalnya hewan yang hidup di darat (satu ciri) akan lebih banyak anggotanya
                        dibanding dengan hewan di darat berkaki empat (dua ciri) dan seterusnya.
                        Kelompok mahluk hidup yang terbentuk dari hasil pengklasifikasian disebut
                        taksaon. Pembentukkan takson berjenjang secara teratur. Untuk setiap takson
                        diberi nama tertentu. Tingkatan-tingkatan klasifikasi dari tingkat tertinggi
                        (kingdom) sampai tingkat terendah (spesies) adalah sebagai berikut:
                        <ul className="mt-2 grid gap-2">
                            <li>a. Kingdom</li>
                            <li>b. Phylum (Filum) digunakan untuk hewan, untuk tumbuhan dinamakan Diovisio</li>
                            <li>c. Classis (Kelas)</li>
                            <li>d. Ordo ( Bangsa)</li>
                            <li>e. Familia (Suku)</li>
                            <li>f. Genus (Marga)</li>
                            <li>g. Species (Jenis)</li>
                        </ul>
                    </p>
                    <p className="mt-8 text-md font-medium ">
                        Jenis (spesies) adalah tingkatan takson yang memiliki sifat-sifat yang sama, baik
                        morfologi, fisiologi maupun anatominya, serta memiliki jumlah kromosom yang
                        sama dan umunnya hidup pada habitat yang sama. Marga adalah tingkatan takson
                        yang mempunyai persamaan dalam struktur alat reproduksi. Sementara itu suku
                        adalah tingkatan takson yang meliputi sejumlah marga dengan jenis-jenis yang
                        dianggap berasal dari nenek moyang yang sama.
                    </p>
                    <p className="mt-8 text-md font-bold ">a. Tujuan Klasifikasi</p>
                    <ul className="mt-2 grid gap-2 list-decimal ms-8 font-medium">
                            <li>
                            Mengelompokkan makhluk hidup berdasarkan persamaan dan ciri-ciri
                            yang dimiliki.
                            Kamu tentu saja tahu, kalau di dunia ini ada banyak sekali organisme yang
                            masing-masing memiliki ciri khusus sebagai pembeda dari organisme
                            lainnya? Nah, organisme-organisme tersebut akan dikelompokkan dengan
                            ciri-ciri khususnya itu dalam klasifikasi makhluk hidup.
                            </li>
                            <li>
                            Mendeskripsikan ciri-ciri suatu jenis makhluk hidup untuk
                            membedakannya dengan makhluk hidup jenis yang lain.
                            Apakah kamu pernah mendengar istilah seperti tanaman pangan, tanaman
                            obat, tanaman sayur, dan sebagainya? Istilah-istilah ini muncul berkat
                            adanya klasifikasi makhluk hidup yang kemudian mendeskripsikan
                            makhluk hidup.
                            </li>
                            <li>
                            Mengetahui hubungan kekerabatan makhluk hidup.
                            Dengan mengetahui persamaan ciri yang dimiliki oleh berbagai organisme
                            maka kita bisa tahu hubungan kekerabatannya.
                            Jadi semakin banyak persamaan yang dimiliki maka ke dua oorganisme
                            tersebut semakin dekat hubungan kekerabatannya.
                            </li>
                            <li>
                            Memberi nama makhluk hidup yang belum diketahui namanya.
                            Dari sekian banyak organisme di dunia ini, tentu tidak mengherankan jika
                            beberapa di antaranya belum memiliki nama. Dengan memberi nama pada
                            suatu organisme maka orang - orang dari negara mana saja akan tahu
                            organisme yang dimaksud. Nah, dengan melakukan klasifikasi, organisme
                            anonim juga bisa memiliki nama.
                            </li>
                            <li>
                            Menyederhanakan objek studi sehingga mempermudah mempelajarinya.
                            Karena makhluk hidup itu sangat banyak dan untuk mempelajarinya itu
                            sangat sulit maka perlu disederhanakan dengan cara mengelompokkan
                            sesuai ciri-ciri yang dimiliki sehingga kita lebih mudah mempelajarinya
                            </li>
                            <li>
                            Mengetahui tingkat evolusi makhluk hidup atas dasar kekerabatannya.
                            </li>
                        </ul>
                        <p className="mt-8 text-md font-bold ">b. Manfaat Klasifikasi</p>
                        <ul className="mt-2 grid gap-2 list-decimal ms-8 font-medium ">
                            <li>
                            Memudahkan kita dalam mempelajari makhluk hidup yang sangat
                            beraneka ragam.
                            </li>
                            <li>
                            Mengetahui hubungan kekerabatan antara makhluk hidup satu dengan
                            yang lain
                            </li>
                        </ul>
                   </p>
                </div>
                
             </div>
            <div className="btm-nav btm-nav-md bg-base-200 ">
                <button>
                <a href="" className="flex justify-center items-center"><FaArrowLeft size={20} className="me-6"/>Previous</a>
                </button>
                <button className="active bg-base-200">
                <a href="" className="flex justify-center items-center">Current</a>
                </button>
                <button>
                    <a href="/subbio12" className="flex justify-center items-center">Next<FaArrowRight size={20} className="ms-6"/></a>
                </button>
            </div>
        </>
    )
}

export default Subbio11;