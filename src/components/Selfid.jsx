

function Selfid() {

    // const link = "../assets/me.png"
    const link = 'https://media.licdn.com/dms/image/D4D03AQHgZNOg-kI_lw/profile-displayphoto-shrink_800_800/0/1698914788819?e=1716422400&v=beta&t=aZap1jWkSa6bNiwrvSo-CVwEqkJZHCPjsxjjQjOtHQc'

    return(
        // <div id="div"></div>
        <div id="self-id" className="border-2 flex flex-col justify-center items-center w-96 fixed z-10 py-10">
           <div>
            <img src={link} alt="Profile_pic" height={'150px'} width={'150px'} style={{borderRadius:'12px'}} />
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

           <div className="flex gap-2">
                <div className="left self-center">
                    {/* <i>AGE ICON</i> */}
                    <i className="fa-solid fa-hourglass-half text-xl"></i>
                </div>

                <div className="right">
                    <p>AGE</p>
                    <p>25 years</p>
                </div>
           </div>

           <div className="flex">
                <div className="left">
                    {/* <i>LOCATION ICON</i> */}
                    <i class="fa-solid fa-location-dot"></i>
                </div>

                <div className="right justify-center">
                    <p>Location</p>
                    <p className="">West Bengal, India</p>
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

           <div className="icons flex justify-center gap-3 w-full">
                <a href="https://github.com/Shivambansal96" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/shivam-bansal-a99269275/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
           </div>


           
        </div>
    )
}

export default Selfid;