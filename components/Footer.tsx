// components/Footer.tsx
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="main-container flex w-[1920px] flex-col justify-center items-center flex-nowrap bg-[#212121] relative mx-auto my-0">
      <div className="flex w-[1518px] flex-col gap-[63px] items-start shrink-0 flex-nowrap relative">
        {/* Divider */}
        <div className="h-[2px] self-stretch shrink-0 bg-[url(/assets/images/ddf2d0b9-199d-4f99-913e-2fd65f821bdc.png)] bg-cover bg-no-repeat relative z-[1]" />

        {/* Main Content */}
        <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[2]">
          {/* Company, Contact, Legal */}
          <div className="flex w-[607px] justify-between items-start shrink-0 flex-nowrap relative z-[3]">
            {/* Company Section */}
            <div className="flex w-[92px] flex-col gap-[40px] items-start shrink-0 flex-nowrap relative z-[4]">
              <span className="text-[22px] font-bold leading-[26px] text-[#fff]">
                Company
              </span>
              <div className="flex w-[67px] flex-col gap-[16px] text-12px items-start">
                <FooterLink label="About us" />
                <FooterLink label="Team" />
                <FooterLink label="Careers" />
                <FooterLink label="Blog" />
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex w-[115px] flex-col gap-[40px] items-start">
              <span className="text-[22px] font-bold leading-[26px] text-[#fff]">
                Contact
              </span>
              <div className="flex w-[115px] flex-col text-12 gap-[16px] items-start">
                <FooterLink label="Help & Support" />
                <FooterLink label="Partner with us" />
                <FooterLink label="Ride with us" />
              </div>
            </div>

            {/* Legal Section */}
            <div className="flex w-[167px] flex-col gap-[40px] items-start">
              <span className="text-[22px] font-bold leading-[26px] text-[#fff]">
                Legal
              </span>
              <div className="flex w-[167px] text-12 flex-col gap-[16px] items-start">
                <FooterLink label="Terms & Conditions" />
                <FooterLink label="Refund & Cancellation" />
                <FooterLink label="Privacy Policy" />
                <FooterLink label="Cookie Policy" />
              </div>
            </div>
          </div>

          {/* Follow Us & Subscription */}
          <div className="flex w-[483px] flex-col gap-[43px] items-start">
            {/* Follow Us Section */}
            <div className="flex w-[101px] flex-col gap-[40px] items-start">
              <span className="text-[18px] font-bold opacity-60 leading-[21.6px] text-[#f5f5f5] uppercase">
                Follow Us
              </span>
              {/* <div className="flex w-[101px] h-[24px] bg-[url(/assets/images/aa440801-fb18-4232-bd31-c8da31ffbbb8.png)] bg-cover bg-no-repeat" /> */}
              <div className="flex gap-[16px] items-center self-stretch">
                <Image
                  src="https://img.icons8.com/?size=100&id=60014&format=png&color=ffffff"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[24px] h-[24px] shrink-0 relative"
                />
                <Image
                  src="https://img.icons8.com/?size=100&id=32292&format=png&color=ffffff"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[24px] h-[24px] shrink-0 relative"
                />
                <Image
                  src="https://img.icons8.com/?size=100&id=118468&format=png&color=ffffff"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[24px] h-[24px] shrink-0 relative"
                />
              </div>
            </div>

            {/* Subscription Section */}
            <div className="flex flex-col gap-10 items-start w-full">
              <span className="text-lg font-bold leading-6 text-gray-400">
                Receive exclusive offers in your mailbox
              </span>
              <div className="flex gap-4 items-center w-full">
                <div className="flex items-center flex-grow bg-gray-700 rounded-lg overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter Your email"
                    aria-label="Email Address"
                    className="w-full h-12 px-4 bg-transparent border-none text-white placeholder-gray-400 outline-none"
                  />
                </div>
                <button className="flex justify-center items-center w-[133px] py-3 px-6 bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 transition-shadow duration-200">
                  <span className="text-lg font-bold text-white">
                    Subscribe
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex h-[53px] flex-col items-start self-stretch">
          <div className="h-[2px] self-stretch bg-[url(/assets/images/b74c75b1-6659-468a-b6d4-ef5db702bc1d.png)] bg-cover bg-no-repeat" />
          <div className="flex justify-between items-start self-stretch">
            <div className="flex items-start">
              <span className="text-[15px] font-normal text-[#f5f5f5]">
                All rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterLink: React.FC<{ label: string }> = ({ label }) => (
  <span className="text-[18px] font-normal leading-[18px] text-[#f5f5f5]">
    {label}
  </span>
);

export default Footer;
