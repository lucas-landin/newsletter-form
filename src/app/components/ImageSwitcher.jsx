"use client";
import Image from "next/image";
const ImageSwitcher = () => {
  return (
    <>
      <div className="bigScreenImg hidden md:block px-5 pt-5">
        {/* Renderiza essa imagem em telas maiores */}
        <Image
          src="/illustration-sign-up-desktop.svg"
          alt="Imagem Desktop"
          width={600}
          height={550}
          layout="responsive"
        />
      </div>

      <div className=" smallScreenImg md:hidden sm:block">
        {/* Renderiza essa imagem em telas menores */}
        <Image
          src="/illustration-sign-up-mobile.svg"
          alt="Imagem Mobile"
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
    </>
  );
};
export default ImageSwitcher;
