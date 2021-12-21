import { Link } from "react-router-dom";
import icon from "../image/chibi-nezuko.png"

const Navbar = () => {
    return ( 
        <div className="flex justify-between bg-black text-white items-center sticky top-0 z-50 text-xl">
            <div className="flex flex-row items-center">
                <img className="object-contain w-12 h-13 pl-5" src={ icon } alt="Logo" />
                <Link className="p-3" to="/">Animael</Link>
            </div>
            <div className="">
                <Link className="p-3" to="/favorite">Favorite</Link>
            </div>
        </div>
     );
}
 
export default Navbar;