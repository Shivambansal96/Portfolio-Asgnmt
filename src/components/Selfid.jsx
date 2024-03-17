

function Selfid() {

    const link = "../assets/me.png"

    return(
        <div id="self-id" className="border-2 flex flex-col justify-center items-center">
           <div>
            <img src={link} alt="Profile_pic" height={'150px'} width={'150px'} style={{border:'solid 2px red', borderRadius:'12px'}} />
           </div>

           <div>
            <p>Shivam Bansal</p>   {/*item.name*/}
           </div>

           <div className="flex w-3/4 justify-center items-center gap-3 border-2 rounded-2xl bg-stone-900">
                {/* <img src="" alt="" /> */}
                {/* <i class="fa-brands fa-angellist"></i> */}
                <i class="fa-brands fa-angellist" style={{color: "#74C0FC"}}></i>
                <p className="text-white">Focusing!</p>
           </div>

           <hr />

           <div className="flex">
                <div className="left">
                    {/* <i>AGE ICON</i> */}
                    <i class="fa-solid fa-hourglass-half"></i>
                </div>

                <div className="right flex">
                    <p>AGE</p>
                    <p>25 years</p>
                </div>
           </div>

           <div className="flex text-center border-2">
                <div className="left">
                    {/* <i>LOCATION ICON</i> */}
                    <i class="fa-solid fa-location-dot"></i>
                </div>

                <div className="right">
                    <p>Location</p>
                    <p className="border-2">Siliguri, West Bengal, India</p>
                </div>
           </div>

           <div className="flex">
                <div className="left">
                    {/* <i>person icon</i> */}
                    <i class="fa-solid fa-user"></i>
                </div>

                <div className="right">
                    <p>Personality Type</p>
                    <p>INTJ-T</p>
                </div>
           </div>

           <div className="icons flex justify-center gap-3 w-full border-2">
                <a href="" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
           </div>


           
        </div>
    )
}

export default Selfid;