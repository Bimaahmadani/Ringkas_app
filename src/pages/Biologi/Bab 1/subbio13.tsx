import { useEffect, useRef } from 'react';
import Clipboard from 'clipboard';

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { PiNotePencilBold } from "react-icons/pi";

import { IoMdCopy } from "react-icons/io";
import Sidebarbio from "../../../components/sidebarbio";

import { BsExplicit } from "react-icons/bs";
function Subbio13() {

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
      <Sidebarbio />
      <div className="container flex justify-center">
          <div className="p-8 mb-20  w-[70%]">
                <p ref={textToCopyRef}>
                    <h1 className="text-xl font-bold">
                      3. Perkembangan Sejarah Klasifikasi
                   </h1>
                  <p className="mt-8  text-md font-medium ">
                    Sistem Klasifikasi makhluk hidup telah dikenal sejak zaman dulu. Ahli
                    filosof Yunani, Aristoteles (384-322 SM) mengelompokkan makhluk hidup
                    ke dalam dua kelompok besar yaitu kelompok hewan (animalia) dan
                    kelompok tumbuhan (plantae), namun keberadaan organisme mikroskopis
                    belum dikenal pada saat itu. Sistem klasifikasi makhluk hidup terus
                    mengalami kemajuan seiring berkembangnya ilmu pengetahuan dan
                    teknologi. Sistem klasifikasi makhluk hidup dikelompokan dalam
                    satu-satuan kelompok besar yang disebut kingdom.
                  </p>
                  <p className="mt-8  text-md font-medium ">
                    Sistem kingdom yang pertama diperkenalkan oleh Carolus Linnaeus.
                    Sistem kingdom pun terus mengalami perubahan dan perbaikan hingga
                    sekarang dan sering menjadi pro dan kontra bagi para ilmuwan. Beberapa
                    system klasifikasi makhluk hidup yang telah diperkenalkan oleh para
                    ahli adalah :
                  </p>
                  <ul className="mt-2 grid gap-2 text-md font-medium list-disc ms-12">
                    <li>
                      Sistem Dua kingdom Sistem yang dikembangkan oleh ilmuwan Swedia
                      yaitu Carolus Linnaeus tahun 1735. Makhluk hidup dibagi menjadi 2
                      kingdom yaitu :
                      <ul className="grid gap-2 list-decimal ms-12">
                        <li>
                          Kingdom Animalia (Dunia Hewan) Ciri-ciri: tidak memiliki dinding
                          sel, tidak berklorofil, mampu bergerak bebas.
                        </li>
                        <li>
                          Kingdom Plantae (Dunia Tumbuhan) Ciri–ciri: memiliki dinding
                          sel, berklorofil, mampu berfotosintesis.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Sistem Tiga Kingdom Sistem ini dikembangkan oleh ahli Biologi Jerman
                      (Ernst Haeckel) tahun 1866. Makhluk hidup dibagi menjadi 3 kingdom
                      yaitu :
                      <ul className="grid gap-2 list-decimal ms-12">
                        <li>
                          Kingdom Animalia (Dunia Hewan) Ciri-ciri: heterotrof, eukariot
                          multiseluler dan dapat bergerak.
                        </li>
                        <li>
                          Kingdom Plantae (Dunia Tumbuhan) Ciri-ciri: autotrof, eukariot
                          multiseluler, berklorofil dan mampu berfotosintesis.
                        </li>
                        <li>
                          Kingdom Protista Ciri-ciri: organisme bersel satu atau
                          uniseluler dan organisme multiseluler sederhana.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Sistem Empat Kingdom Sistem Ini dikembangkan oleh ahli Biologi
                      Amerika (Herbert Copeland) tahun 1956. Makhluk hidup dibagi menjadi
                      4 kingdom yaitu :
                      <ul className="grid gap-2 list-decimal ms-12">
                        <li>Kingdom Animalia (Dunia Hewan)</li>
                        <li>Kingdom Plantae (Dunia Tumbuhan)</li>
                        <li>Kingdom Protista</li>
                        <li>
                          Kingdom Monera Ciri-ciri memiliki inti tanpa membran inti
                          (prokariotik).
                        </li>
                      </ul>
                    </li>
                    <li>
                      Sistem Lima Kingdom Sistem ini dikembangkan oleh ahli Biologi
                      Amerika (Robert H. Whittaker) tahun 1969. Makhluk hidup dibagi
                      menjadi 5 kingdom yaitu :
                      <ul className="grid gap-2 list-decimal ms-12">
                        <li>Kingdom Monera</li>
                        <li>Kingdom Protista</li>
                        <li>
                          Kingdom Fungi (Dunia Jamur) Ciri-ciri : eukariotik, heterotrof,
                          tidak berklorofil, dinding sel dari zat kitin.
                        </li>
                        <li>Kingdom Plantae (Dunia Tumbuhan)</li>
                        <li>Kingdom Animalia (Dunia Hewan)</li>
                      </ul>
                    </li>
                    <li>
                      Sistem Enam Kingdom Pada tahun 1970-an seorang mikrobiologi bernama
                      Carl Woese dan peneliti lain dari University Of Illinois menemukan
                      suatu kelompok bakteri yang memiliki ciri unik dan berbeda dari
                      anggota kingdom Monera lainnya. Kelompok tersebut dinamakan
                      Archaebacteria. Archaebacteria lebih mendekati makhluk hidup
                      eukariot dibandingkan bakteri lain yang merupakan prokriot. Hal itu
                      menyebabkan terciptanya sistem klasifikasi 6 kingdom pemisah kingdom
                      Archaebacteria dari anggota kingdom Monera lain yang kemudaian
                      disebut Eubacteria. Adapun keenam kingdomnya adalah :
                      <ul className="grid gap-2 list-decimal ms-12">
                        <li>Kingdom Animalia (Dunia Hewan)</li>
                        <li>Kingdom Plantae (Dunia Tumbuhan)</li>
                        <li>Kingdom Protista</li>
                        <li>Kingdom Mycota (Dunia Jamur)</li>
                        <li>Kingdom Eubacteria</li>
                        <li>Kingdom Archaebacteria</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mt-8 ms-5 text-md font-medium ">
                    Namun hingga sekarang yang diakui sebagai sistem klasifikasi standar
                    adalah sistem Lima Kingdom yang ditemukan oleh Whittaker. Berikut ini
                    adalah ciri-ciri umum organisme yang masuk ke dalam klasifikasi 5
                    kingdom.
                  </p>
                  <p className="mt-8 text-md font-bold ">a. Monera</p>
                  <p className="mt-2 ms-5 text-md font-medium ">
                    Monera adalah mahkluk hidup yang tidak membran inti (organisme
                    prokariot). Meskipun tidak memiliki membran inti, organisme ini
                    memiliki bahan inti. Bahan inti itu berupa asam inti atau DNA
                    (Deoxyribo Nucleic Acid atau asam deoksiribonukleat). Kelompok Monera
                    ini terdiri dari Eubacteria (selama ini kita mengenalnya sebagai
                    bakteri) dan Archaebacteria (bakteri yang hidup pada habitat ekstrim).
                  </p>
                  <p className="mt-8 text-md font-bold ">b. Protista</p>
                  <p className="mt-2 ms-5 text-md font-medium ">
                    Protista adalah kingdom mahkluk hidup yang terdiri dari satu sel atau
                    banyak sel yang memiliki membran inti (organisme eukariot). Protista
                    dikelompokan secara seerhana seperti protista mirip hewan (protozoa),
                    protista mirip tumbuhan (alga), dan protista mirip jamur.
                  </p>
                  <p className="mt-8 text-md font-bold ">c. Fungi (Jamur) </p>
                  <p className="mt-2 ms-5 text-md font-medium ">
                    Fungi atau jamur merupakan kingdom mahkluk hidup yang tidak memiliki
                    kloroplas. Tubuh jamur ada yang terdiri dari satu sel, berbentuk
                    benang, atau tersusun dari kumpulan benang. Dinding selnya terdiri
                    dari zat kitin. Oleh karena itu jamur tidak dapat dikelompokkan dalam
                    dunia hewan atau tumbuhan. Kelompok ini terdiri dari semua jamur,
                    kecuali jamur lendir (Myxomycota) dan jamur air (Oomycota).
                  </p>
                  <p className="mt-8 text-md font-bold ">d. Plantae (Tumbuhan) </p>
                  <p className="mt-2 ms-5 text-md font-medium ">
                    Plantae atau kingdom tumbuhan adalah mahkluk hidup bersel banyak yang
                    mempunyai kloroplas. Di dalam kloroplas terkandung klorofil. Oleh
                    karena memiliki klorofil, maka tumbuhan dapat melakukan fotosintesis.
                    Sel tumbuhan termasuk eukariot (memiliki membran inti) dan dinding
                    selnya tersusun dari selulosa. Tumbuhan umumnya memiliki akar, batang,
                    dan daun, kecuali beberapa jenis tumbuhan yang memiliki akar semu
                    (rizoid), seperti pada briophyta (tumbuhan lumut). Perkembangbiakan
                    tumbuhan terjadi secara kawin maupun tak kawin. Tumbuhan terdiri dari
                    tumbuhan lumut (Bryophyta), tumbuhan paku (Pteridophyta), tumbuhan
                    berbiji terbuka (Gymnospermae), dan tumbuhan berbiji tertutup
                    (Angiospermae).
                  </p>
                  <p className="mt-8 text-md font-bold ">e. Animalia </p>
                  <p className="mt-2 ms-5 text-md font-medium ">
                    Animalia atau kingdom hewan. Sel-selnya mempunyai membran inti
                    (eukariot) dan tidak memiliki kloroplas. Selain itu sel hewan tidak
                    memiliki dinding sel. Berbeda dengan tumbuhan, hewan dapat bergerak
                    aktif dan memiliki sitem saraf. Pembagian hewan berdasarkan:
                  </p>
                  <ul className="mt-2 grid gap-2 text-md font-medium list-decimal ms-12">
                    <li>Makanannya :</li>
                    <p className="mt-2 text-md font-medium ">
                      Herbivora adalah golongan hewan pemakan tumbuhan hijau. Memiliki
                      gigi geraham depan (dens premolare) dan geraham belakang (dens
                      molare) yang kuat dan banyak. Memiliki gigi seri (dens incisivus)
                      yang tajam. Tidak mempunyai gigi taring (dens caninus). Memiliki
                      enzim selulase. Contoh : Hewan Mammalia yang hidup di padang rumput.
                      (Jerapah, zebra, Banteng dsb). Karnivora adalah golongan hewan
                      pemakan daging. Memiliki gigi taring (dens caninus) yang tajam.
                      Memiliki kuku yang tajam. Memiliki sisi rahang dan ujung gigi
                      geraham yang saling bertemu. Contoh : Singa, Harimau, Kucing, Buaya
                      dll. Omnivora adalah golongan gewan pemakan daging dan tumbuhan
                      hijau (pamakan segala). Memiliki sifat perpaduan antara herbivora
                      dan carnivora. Contoh : Musang, Beruang, Ayam, Tikus dll.
                      Insectivora adalah golongan hewan pemakan serangga. Contoh : Cecak,
                      Kadal, Bunglon, Kelelawar.
                    </p>
                    <li>Ada tidaknya tulang belakang :</li>
                    <p className="mt-2 text-md font-medium ">
                      Invertebrata yaitu golongan hewan yang tidak mempunyai tulang
                      belakang. Dibagi menjadi 9 phyllum/filum yaitu :
                    </p>
                    <ul className="grid gap-2 list-disc ms-12">
                      <li>Porifera (hewan berpori), contoh : Spongia sp/hewan spon.</li>
                      <li>
                        Coelenterata (hewan berongga), contoh : Hydra viridis, Aurelia
                        aurita (ubur- ubur).
                      </li>
                      <li>
                        Platyhelminthes (cacing pipih), contoh : Planaria maculate, Tania
                        saginata (cacing pita) pada manusia dan sapi.
                      </li>
                      <li>
                        Nemathelminthes (cacing gilig), contoh : Ascaris lumbricoides,
                        Ancylostoma duodenale/cacing tambang pada usus duabelas jari
                        manusia.
                      </li>
                      <li>
                        Annelida (cacing gelang), contoh : Hirudo medicinalis/lintah,
                        Lumbricus terrestris (cacing tanah).
                      </li>
                      <li>
                        Mollusca (hewan bertubuh lunak), contoh : Achatina fulica/siput,
                        Octopus sp (gurita).
                      </li>
                      <li>
                        Arthropoda (hewan berbuku-buku), dibagi menjadi 4 kelas yaitu :
                        Insect (serangga), Crustacea (udang-udangan), Arachidna
                        (laba-laba), myariapoda (lipan).
                      </li>
                      <li>Echinodermata (hewan berkulit duri)</li>
                      <li>
                        Vertebrata yaitu golongan hewan yang mempunyai ruas-ruas tulang
                        belakang. dibagi menjadi 5 kelas yaitu : Pisces (ikan), contoh :
                        Osteoglossum bicirhosum (ikan Arwana). Amphibia (katak), Reptilia
                        (hewan melata/merayap), Aves (unggas), Mammalia (hewan memiliki
                        kelenjar mammae).
                      </li>
                    </ul>
                  </ul>
                </p>
          </div>
      </div>
      <div className="btm-nav btm-nav-md bg-base-200 ">
        <button>
          <a href="/subbio12" className="flex justify-center items-center">
            <FaArrowLeft size={20} className="me-6" />
            Previous
          </a>
        </button>
        <button className="active bg-base-200">
          <a href="" className="flex justify-center items-center">
            Current
          </a>
        </button>
        <button>
          <a href="/" className="flex justify-center items-center">
            Next
            <FaArrowRight size={20} className="ms-6" />
          </a>
        </button>
      </div>
    </>
  );
}

export default Subbio13;
