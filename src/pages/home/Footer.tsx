
import { AiFillFacebook, AiFillInstagram, AiFillAccountBook } from 'react-icons/ai';

const Footer = () => {
    return (
        <div style={{ background: "#0F172A" }}>
            <div className='w-full max-w-[1220px] mx-auto'>
                <footer className="footer p-10 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    <div>
                        <p className='text-3xl font-bold text-center md:text-left'>Event <span style={{color:'#00D4FC'}}>360</span> </p>
                    </div>
                    <nav className='text-center md:text-left'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='text-center md:text-left'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='text-center md:text-left'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav className='text-center md:text-left'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav className='text-center md:text-left'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    
                </footer>
                <footer className="footer px-10 py-4 border-t ">
                    <aside className="items-center grid-flow-col">
                        <p className='text-center md:text-left'> @ 2024. All rights reserved.</p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <a href="#"><AiFillFacebook /></a>
                            <a href="#"><AiFillAccountBook /></a>
                            <a href="#"><AiFillInstagram /></a>
                        </div>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
