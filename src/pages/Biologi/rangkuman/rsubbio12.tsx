import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { PiNotePencilBold } from "react-icons/pi";
import { MdOutlineKeyboardReturn } from "react-icons/md";

import { BsExplicit } from "react-icons/bs";

function BioSummary12 (){
    return (
        <>
            <div className="container p-8 mb-20 ms-[15%]  w-[70%]">
                <h1 className="text-xl font-bold">1. Prinsip = Prinsip Dasar Klasifikasi</h1>
                <ul className="mt-2 ms-5 text-md font-medium grid gap-2 list-disc">
                        <li>Ciri morfologi adalah ciri yang nampak dari luar, misalnya morfologi bulu pada kucing.</li>
                        <li>Sedangkan ciri anatomi adalah struktur tampak dalam contohnya adalah anatomi jantung, yang berarti bagaimana jantung dari kucing tersebut disusun dan bagian bagiannya
                        Misalnya hewan yang hidup di darat (satu ciri) akan lebih banyak anggotanya dibanding dengan hewan di darat berkaki empat (dua ciri) dan seterusnya.
                        </li>
                        <li>
                            Tingkatan-tingkatan klasifikasi dari tingkat tertinggi (kingdom) sampai 
                            tingkat terendah (spesies) adalah sebagai berikut:
                            <ul className="mt-2 ms-5 text-md font-medium grid gap-2 list-decimal">
                                <li>
                                    Species (Jenis) Jenis (spesies) adalah tingkatan takson yang memiliki sifat-sifat yang sama, 
                                    baik morfologi, fisiologi maupun anatominya, serta memiliki jumlah kromosom yang sama dan umunnya hidup pada habitat yang sama.
                                </li>
                                <li>
                                    Marga adalah tingkatan takson yang mempunyai persamaan dalam struktur alat reproduksi
                                </li>
                                <li>
                                    Sementara itu suku adalah tingkatan takson yang meliputi sejumlah marga dengan jenis-jenis yang dianggap berasal dari nenek moyang yang sama.
                                </li>
                            </ul>
                            <li>
                                Tujuan Klasifikasi
                                <ul className="mt-2 ms-5 text-md font-medium grid gap-2 list-decimal">
                                <li>
                                    Mengelompokkan makhluk hidup berdasarkan persamaan dan ciri-ciri yang dimiliki.
                                </li>
                                <li>
                                    Mendeskripsikan ciri-ciri suatu jenis makhluk hidup untuk membedakannya dengan makhluk hidup jenis yang lain.
                                </li>
                                <li>
                                    Mengetahui hubungan kekerabatan makhluk hidup.
                                </li>
                                <li>
                                    Memberi nama makhluk hidup yang belum diketahui namanya
                                </li>
                                <li>
                                    Menyederhanakan objek studi sehingga mempermudah mempelajarinya.
                                </li>
                                <li>
                                    Mengetahui tingkat evolusi makhluk hidup atas dasar kekerabatannya
                                </li>
                            </ul>
                            </li>
                            <li>
                                Manfaat Klasifikasi
                                <ul className="mt-2 ms-5 text-md font-medium grid gap-2 list-decimal">
                                    <li>
                                        Memudahkan kita dalam mempelajari makhluk hidup yang sangat
                                        beraneka ragam
                                    </li>
                                    <li>
                                        Mengetahui hubungan kekerabatan antara makhluk hidup satu dengan
                                        yang lain.
                                    </li>
                                </ul>
                            </li>
                        </li>
                    </ul>
                    <h1 className="text-xl font-bold mt-8">2. Macam-Macam Klasifikasi</h1>
                    <p className="text-md font-medium ">
                        Pengelompokan makhluk hidup dapat dilakukan dengan berbagai sistem. 
                        Sistem pengelompokan tersebut yaitu :
                    </p>
                    <p className="mt-8 text-md font-bold ">a. Klasifikasi Sistem Alami</p>
                    <p className="mt-2 ms-5 text-md font-medium"> dirintis oleh Michael Adams dan Jean Baptiste de
                        Lamarck. Sistem ini menghendaki terbentuknya kelompok-kelompok takson yang alami. Artinya anggota-anggota yang membentuk unit takson terjadi secara alamiah atau sewajarnya seperti yang dikehendaki oleh alam.
                        lasifikasi sistem alami menggunakan dasar persamaan dan perbedaan morfologi, contohnya seperti Cara geraknya (hewan berkaki dua, berkaki empat, tidak berkaki, hewan 
                        bersayap, hewan bersirip) atau  Penutup tubuh : hewan berbulu, bersisik, berambut , bercangkang
                    </p>
                    <p className="mt-8 text-md font-bold ">b. Klasifikasi Sistem Buatan</p>
                    <p className="mt-2 ms-5 text-md font-medium">
                        Sistem Artifisial adalah klasifikasi yang menggunakan satu atau dua ciri pada makhluk hidup. Sistem ini disusun dengan menggunakan 
                        ciri-ciri atau sifat sifat yang sesuai dengan kehendak manusia, atau sifat lainnya. Adapun ciri yang digunakan berupa struktur morfologi, 
                        anatomi dan fisiologi . Misalnya klasifikasi tumbuhan dapat menggunakan dasar habitat , habitus atau berdasarkan perawakan .
                        Tokoh sistem Artifisial antara lain Aristoteles yang membagi makhluk hidup menjadi dua kelompok (tumbuhan dan hewan) dan 
                        Carolus Linnaeus yang mengelompokkan tumbuhan berdasarkan alat reproduksinya.
                    </p>
                    <p className="mt-8 text-md font-bold ">c. Klasifikasi Sistem Filogenetik </p>
                    <p className="mt-2 ms-5 text-md font-medium">
                        Klasifikasi sistem filogenetik muncul setelah teori evolusi dikemukakan oleh para ahli biologi.
                        Menurut Darwin, terdapat hubungan antara klasifikasi dengan evolusi.
                        Sistem ilogenetik disusun berdasarkan jauh dekatnya kekerabatan antara takson yang satu dengan yang lainnya. Jadi pada dasarnya, 
                        klasifikasi sistem filogenetik disusun berdasarkan persamaan fenotip yang mengacu pada sifat-sifat bentuk luar, faal, tingkah laku yang dapat diamati, 
                        dan pewarisan keturunan yang mengacu pada hubungan evolusioner sejak jenis nenek moyang hingga cabang-cabang keturunannya.
                    </p>
            </div>
             <div className="btm-nav btm-nav-md bg-base-200 grid grid-cols-3">
                <button>
                <a href="/subbio12" className="flex justify-center items-center">< MdOutlineKeyboardReturn size={20} className="me-6"/>Back to the Material</a>
                </button>
                <button className="active bg-base-200 grid-colspan-2">
                <a href="" className="flex justify-center items-center"> <PiNotePencilBold size={20} />Rangkuman</a>
                </button>
               
            </div>
        </>
    )
}

export default BioSummary12;
