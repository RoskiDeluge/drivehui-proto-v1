function Footer() {
    return(
        <div
        className="px-10 pb-10 flex lg:space-x-10 space-y-5 lg:space-y-0 flex-1 justify-around flex-wrap"
        >
            <div
            className="flex flex-col space-y-2 items-center w-full lg:w-auto"
            >
                <a>Home</a>
                <a>FAQ</a>
                <a>Contact US: Member Services</a>
                <a>Terms of Use</a>
                <a>Privacy Policy</a>
                <a>Partnerships</a>
                <a>Member Agreement</a>
                <a>Blog</a>
            </div>
            <div
            className="flex flex-col space-y-2 items-center w-full lg:w-auto"
            >   <h3>Locations</h3>
                <a>Manoa</a>
                <a>Kapolei</a>
                <a>Kaimuki</a>
                <a>Airport</a>
                <a>Ala Moana</a>
                <a>Waikiki</a>
                <a>Downtown</a>
                <a>Kakaako</a>

            </div>
            <div
            className="flex flex-col space-y-2 items-center w-full lg:w-auto"
            >
                <a>Rent a Car Under 25</a>
                <a>Waikiki Parking Guide</a>
                <a>Shaka Guide</a>
                <a>Request a Station</a>
                <hr />
                <a>Do I Need to Rent a Car at HNL</a>
                <hr />
            </div>
            <div
            className="flex flex-col items-center"
            >
                <img src="logo.png"></img>
                <img src="appButtons.png" />
            </div>
        </div>
    )
}

export default Footer;