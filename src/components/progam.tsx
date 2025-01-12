import './style.css'

function Progam(){
return (
    <>
            
        <div className="w-full text-center mt-24">
            <h1 className="text-neutral text-[40px] font-bold" style={{fontFamily: 'Josefin Sans'}}>Jelajahi Progam kami</h1>
        </div>
    <div className="flex justify-center mb-28 mt-16">
        <div className="flex flex-row justify-evenly w-[85%]">
        <div className="card w-96 h-[16rem]  shadow-xl image-full hover:contrast-125 hover:scale-105 transition delay-100 duration-100 ease-in-out">
            <figure ><img src="/images/science.jpg" alt="Science" /></figure>
            <div className="card-body justify-center">
                <a href="/science" className="text-white text-center text-4xl font-bold hover:text-primary"  style={{fontFamily: 'Josefin Sans'}}>IPA</a>
            </div>
        </div>

        <div className="card w-96 h-[16rem] shadow-xl image-full hover:brightness-125 hover:scale-105 transition delay-100 duration-100 ease-in-out">
            <figure ><img src="/images/social.jpg" alt="Science" /></figure>
            <div className="card-body justify-center">
                <a href="/ips" className="text-white text-center text-4xl font-bold hover:text-primary"  style={{fontFamily: 'Josefin Sans'}}>IPS</a>
            </div>
        </div>

        <div className="card w-96 h-[16rem] shadow-xl image-full hover:brightness-125 hover:scale-105 transition delay-100 duration-100 ease-in-out">
            <figure ><img src="/images/literature.jpg" alt="Science" /></figure>
            <div className="card-body justify-center">
                <a href="/bahasa" className="text-white text-center text-4xl font-bold hover:text-primary"  style={{fontFamily: 'Josefin Sans'}}>Bahasa</a>
            </div>
        </div>
        </div>
    </div>
    </>
)

}

export default Progam;