import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
  return (
    <div
      id="about"
      className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* HEADING START */}
        <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
          <span>A Web Agency</span>
          <span className="flex items-center gap-2">
            <span>Based</span>
            <img
              src={flag}
              alt=""
              className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
            />
            <span>In India</span>
          </span>
        </Div>
        {/* HEADING END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          Welcome to React Guys Infotech, where creativity meets innovation to
          transform your digital presence! At React Guys Infotech, we take pride
          in being a dynamic web agency dedicated to delivering cutting-edge
          solutions that elevate your brand in the online sphere. With a team of
          passionate and skilled professionals, we embark on a journey to craft
          unique and engaging websites that not only capture attention but also
          drive results.
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          At the heart of our philosophy is a commitment to client satisfaction.
          We understand that every business is unique, and our tailored approach
          ensures that your website reflects the essence of your brand. From
          sleek designs to seamless functionality, we prioritize user experience
          to create a digital footprint that resonates with your target
          audience. Our collaborative process ensures that your vision is not
          only realized but surpassed, as we strive to exceed your expectations
          with every project.
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
          As technology evolves, so do we. React Guys Infotech stays at the
          forefront of the latest trends and innovations, ensuring that your
          website remains not just current, but ahead of the curve. Our team is
          not just a service provider; we are your partners in success. Join us
          on the journey to redefine your online presence and unlock the full
          potential of your business. Welcome to a world where your ideas come
          to life, and your digital dreams become a reality - welcome to React
          Guys Infotech.
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        {/* <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
          What sets me apart is my commitment to providing exceptional customer
          service. I believe in fostering open communication, ensuring that
          clients are involved in the development process from start to finish.
          I am a reliable and detail-oriented professional, dedicated to meeting
          deadlines and delivering high-quality results.
        </Div> */}
        {/* PARAGRAPH END */}
      </Wrapper>
    </div>
  );
};

export default AboutMe;
