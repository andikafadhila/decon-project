import Image from "next/image";

const FooterSection = () => {
  return (
    <div className="w-full h-[300px] bg-[#333533]">
      <div className="flex justify-center mt-[80px]">
        <div className="flex flex-col items-center gap-6">
          <Image width="110px" height="46px" src="/DECON.svg" alt="" />
          <p className="text-[#D6D6D6] text-[16px] w-[400px] text-center">
            An Ecosystem to navigate in the Future of Digital Economy through
            community
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
