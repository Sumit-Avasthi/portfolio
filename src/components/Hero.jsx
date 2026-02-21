import Typewriter from "typewriter-effect";
import newImg from "../assets/Extra.jpeg"; 

export default function Hero() {
  return (
    <section className="relative w-screen h-screen bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#000] text-white overflow-hidden">
      
      {/* Moving gloss reflection */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent animate-gloss pointer-events-none z-[5]"></div>

      {/* Background glow behind card */}
      <div className="absolute w-[420px] h-[420px] bg-[#FF5B01]/25 rounded-full blur-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] animate-glow"></div>

      {/* Main container */}
      <div className="relative flex flex-col items-center justify-start h-full px-6 pt-20 text-center lg:justify-center lg:pt-0 lg:text-left lg:px-24">

        {/* First Name */}
       <h1
  className="
    relative
    text-center
    text-[60px] sm:text-[90px] md:text-[120px] lg:text-[170px]
    font-extrabold font-mono tracking-tight leading-none
    text-white
    drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] /* soft white glow */
    animate-slideInLeft
    z-[5]
    lg:absolute
    lg:left-[7%] 
    lg:translate-x-0 
    lg:top-[15%]
    lg:text-left
  "
>
  Sumit
</h1>

        {/* Holder (Desktop only) */}
        <div className="hidden lg:flex flex-col items-center absolute top-[-2%] left-1/2 -translate-x-1/2 z-[21] opacity-0 animate-fadeIn delay-[0.6s]">
          <div className="w-10 h-32 bg-[#FF5B01] rounded-b-lg"></div>
          <div className="w-12 h-10 bg-white rounded-lg -mt-[6px]"></div>
          <div className="w-7 h-7 bg-white rounded-b-md shadow-inner shadow-black/40 -mt-[6px]"></div>
        </div>

        {/* CARD with full photo background */}
        <div className="relative z-[20] mt-10 sm:mt-16 lg:mt-0 opacity-0 animate-fadeIn delay-[0.3s]">
          <div
            className="w-[280px] sm:w-[350px] h-[360px] sm:h-[420px] bg-[#FF9257] border border-white/80 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.6)] overflow-hidden relative flex flex-col justify-end p-6 text-left lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 hover:scale-105 duration-700 ease-out"
            style={{
              backgroundImage: `url(${newImg})`, // 🧡 replace with your photo path
              backgroundSize: "110%",
              backgroundPosition: "center bottom",
            }}
          >
            {/* Overlay tint for orange effect */}
            {/* <div className="absolute inset-0 bg-[#FF9257]/40"></div> */}

            {/* Card text (Name + subtitle) */}
            {/* <div className="relative z-10">
              <h1 className="text-white font-semibold text-[24px] sm:text-[28px]">
                Sumit Avasthi
              </h1>
              <p className="text-white/90 italic text-[14px] sm:text-[16px] mt-1">
                Tech Enthusiast
              </p>
            </div> */}

            {/* Card notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[40px] h-[12px] bg-black rounded-2xl border border-white"></div>
          </div>
        </div>

        {/* Last Name */}
       <h1
  className="
    mt-6 sm:mt-8 lg:mt-0
    text-[70px] sm:text-[120px] lg:text-[150px]
    font-extrabold font-mono tracking-tight leading-none
    text-white
    drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]  /* soft white glow */
    lg:absolute lg:bottom-[19%] lg:right-[2%]
    animate-slideInRight
    z-[20]
  "
>
  Avasthi
</h1>


        {/* Poetic Lines */}
        <p className="mt-8 lg:mt-0 text-[16px] sm:text-[18px] lg:text-[20px] font-light leading-relaxed tracking-wide text-white/90 max-w-[420px] drop-shadow-[1px_1px_3px_rgba(0,0,0,0.3)] lg:absolute lg:top-[38%] lg:left-[17%] opacity-0 animate-fadeIn delay-[0.8s] z-[10]">
          Lines of logic spill like verses, <br />
          Syntax tracing hidden signs. <br />
          In the stack, a silent error, <br />
          Something lost between the lines.
        </p>

        {/* Typewriter Text */}
        <div className="mt-8 lg:mt-0 lg:absolute lg:bottom-[8%] lg:left-1/2 lg:-translate-x-1/2 z-[30] opacity-0 animate-fadeInSlide delay-[1s]">
          <h1 className="text-[28px] sm:text-[45px] lg:text-[70px] font-extrabold font-[Poppins] text-transparent bg-clip-text bg-gradient-to-r from-[#FF5B01] to-[#FF9B57] drop-shadow-[0_0_10px_rgba(255,91,1,0.6)]">
            <Typewriter
              options={{
                strings: ["Tech Enthusiast", "Problem Solver"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 40,
              }}
            />
          </h1>
        </div>
      </div>
    </section>
  );
}
