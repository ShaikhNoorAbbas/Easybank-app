import Image from "next/image";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className="bg-gray-500">
        <div className={`py-24 Customcontainer ${styles.footerContainer}`}>
          {/* left */}
          <div className={` ${styles.linksResponsive}`}>
            {/* Logo container */}
            <div className="flex flex-col items-center justify-between gap-10">
              {/* Logo Image */}
              <div>
                <Image
                  src="/assets/images/logo.svg"
                  alt="logo"
                  width={200}
                  height={200}
                />{" "}
              </div>
              {/* Social Media Links */}
              <ul className="flex items-center gap-3">
                <li>
                  <Image
                    src={"/assets/images/icon-facebook.svg"}
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src={"/assets/images/icon-youtube.svg"}
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src={"/assets/images/icon-twitter.svg"}
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src={"/assets/images/icon-pinterest.svg"}
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </li>
                <li>
                  <Image
                    src={"/assets/images/icon-instagram.svg"}
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </li>
              </ul>
            </div>
            {/* Primary Links */}
            <div>
              <ul className="flex flex-col gap-4 text-center text-white lg:text-start">
                <li className="cursor-pointer hover:text-bold hover:text-black">
                  About Us
                </li>
                <li className="cursor-pointer hover:text-bold hover:text-black">
                  Contact
                </li>
                <li className="cursor-pointer hover:text-bold hover:text-black">
                  Blog
                </li>
              </ul>
            </div>
            {/* Secondary Links */}
            <div>
              <ul className="flex flex-col gap-4 text-center text-white lg:text-start">
                <li className="cursor-pointer hover:text-bold hover:text-black">
                  Careers
                </li>
                <li className="cursor-pointer hover:text-bold hover:text-black">
                  Support
                </li>
                <li className="cursor-pointer hover:text-bold hover:text-black">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>
          {/* right */}
          <div
            className={`flex items-center justify-end w-full ${styles.footerBtn}`}
          >
            <div className="flex px-8 py-3 text-white rounded-full shadow-lg hover:shadow-2xl Custom-btn-bg">
              <button className="inline-block">Request Invite</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
