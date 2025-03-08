import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} className="w-full h-auto" />
  </div>
);

const SocialIcon = ({ icon: Icon, label, color }) => (
  <div className={`relative group p-3 flex justify-center items-center bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer`} style={{ backgroundColor: `${color}` }}>
        <Icon className="w-6 h-6 md:w-8 md:h-8 transition-all duration-300 group-hover:text-white" />
        <span
            className={`absolute bg-${color}-500 text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-16 md:group-hover:translate-y-20 transition-all duration-300 delay-200`}
        >
            {label}
        </span>
    </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-10 md:my-20 min-h-96 w-screen px-6 md:px-10">
      <div className="relative rounded-lg bg-black py-16 md:py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-10 top-0 hidden h-full w-40 md:w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox src="/img/contact-2.png" clipClass="contact-clip-path-1" />
          <ImageClipBox src="/img/contact-3.png" clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60" />
        </div>

        <div className="absolute -top-20 left-10 w-40 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox src="/img/contact-1.png" clipClass="sword-man-clip-path md:scale-125" />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-6 md:mb-10 font-general text-[8px] md:text-[10px] uppercase">
            Join Solo leveling
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font text-4xl md:!text-[6.2rem] w-full font-zentry !font-black !leading-[.9]"
          />

          <a href="/">
            <Button title="Contact Us" containerClass="mt-6 md:mt-10 cursor-pointer" />
          </a>
        </div>
        
        <div className="flex mt-4 justify-center items-center">
            <nav className="flex space-x-4 md:space-x-6">
                <Link><SocialIcon icon={FaFacebookF} label="Facebook" color="blue" target="_blank" /></Link>
                <Link to="https://www.linkedin.com/in/sarthak-kesarwani-48b4702a7" target="_blank"><SocialIcon icon={FaLinkedinIn} label="Linkedin" color="blue" /></Link>
                <Link to="https://www.instagram.com/savage_sarthak_07" target="_blank"><SocialIcon icon={FaInstagram} label="Instagram" color="hotpink"/></Link>
            </nav>
        </div>
      </div>
    </div>
  );
};

export default Contact;
