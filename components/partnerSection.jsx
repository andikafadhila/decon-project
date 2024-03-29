const PartnerSection = () => {
  return (
    <div className="w-full h-[450px] lg:h-[850px] bg-[#202020]">
      <div className="lg:text-4xl text-[24px] flex justify-center">
        <div className="text-[#FFD100] tracking-widest font-bold">
          OUR <span className="text-white">PARTNERS</span>
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-center text-white mx-auto w-[1060px] mt-28">
        <div>
          <img
            className="w-[225px]"
            src="/Mandiri_logo.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div>
          <img
            className="w-[225px]"
            src="/Logo-Pluang.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div>
          <img
            className="w-[225px]"
            src="/Logo-Anteraja.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-center text-white mx-auto w-[900px] mt-20">
        <div>
          <img
            className="w-[225px]"
            src="/Logo_Nobubank.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div>
          <img className="w-[225px]" src="/pacmann.png" alt="" loading="lazy" />
        </div>
        <div>
          <img className="w-[225px]" src="/bitwyre.png" alt="" loading="lazy" />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-4 lg:hidden">
        <div className="flex items-center mx-auto">
          <div>
            <img
              className="w-[150px]"
              src="/Mandiri_logo.png"
              alt=""
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="w-[150px]"
              src="/Logo-Pluang.png"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex items-center mx-auto gap-7">
          <div>
            <img
              className="w-[150px]"
              src="/Logo-Anteraja.png"
              alt=""
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="w-[150px]"
              src="/Logo_Nobubank.png"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex items-center mx-auto gap-5 mt-8">
          <div>
            <img
              className="w-[150px]"
              src="/pacmann.png"
              alt=""
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="w-[150px]"
              src="/bitwyre.png"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
