import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <header className="h-24 " style={{background:"#02011B"}}>
            <nav className="w-full text-white  h-full max-w-[1300px] px-[24px] mx-auto flex justify-between items-center" >
                <span className="text-3xl">EVENT 360</span>
                <ul className="space-x-5 ">
                    <NavLink to= "/">Home</NavLink>
                    <NavLink to= "/about">About</NavLink>
                    <NavLink to= "/contact">Contact</NavLink>
                    {/* <NavLink to= "/admin">Dashboard</NavLink> */}
                    
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;