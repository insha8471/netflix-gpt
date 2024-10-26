import logo from "../image/logo.png";

const Header = () => {
    return (
        <div className="fixed w-full lg:px-12 md:px-8 px-4 py-6 bg-black md:bg-transparent md:bg-gradient-to-b md:from-black flex justify-between z-50">
            <img className="mt-4 w-36 md:w-40" src={logo} alt="coverImg"/>
        </div>
    )
}

export default Header;