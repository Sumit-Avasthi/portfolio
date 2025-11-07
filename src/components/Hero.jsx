import Typewriter from "typewriter-effect";

export default function Hero() {
    
  return (
    <div className="w-screen h-screen bg-[#000] relative">




      {/* Holder-start */}
      <div className="Holder">
      <div className="absolute left-1/2 -translate-x-1/2 w-10 h-30 bg-[#FF5B01] z-1 rounded-b-lg"></div>
      <div className="absolute w-12 h-10 bg-white left-1/2 -translate-x-1/2 z-2 top-28 rounded-lg"></div>
      <div className="absolute w-7 h-7 bg-white left-1/2 -translate-x-1/2 top-38 z-1 rounded-b-sm shadow-inner shadow-black/40"></div>
      </div>
      {/* Holder-end */}


      {/* First Name */}
      <div>
         <h1 className="absolute top-30 left-25 text-[170px] font-extrabold text-white tracking-tight leading-none drop-shadow-[2px_4px_6px_rgba(0,0,0,0.4)] font-mono">
        Sumit
      </h1>
      </div>

       <h1 className="absolute left-1/2 -translate-x-1/2 bottom-10 text-[70px] md:text-[70px] font-extrabold text-white drop-shadow-[3px_3px_8px_rgba(0,0,0,0.4)] font-[Poppins] mb-6">
        <Typewriter
          options={{
            strings: ["Tech Enthusiast", "Problem Solver"],
            autoStart: true,
            loop: true,
            delay: 80,
            deleteSpeed: 40,
          }}
        />
      </h1>



      {/* Poetic Lines Below */}
      <div>
        <p className="absolute top-70 left-70 text-[20px] font-light leading-relaxed tracking-wide text-white/90 max-w-[420px] drop-shadow-[1px_1px_3px_rgba(0,0,0,0.3)]">
          Lines of logic spill like verses, <br />
          Syntax tracing hidden signs. <br />
          In the stack, a silent error, <br />
          Something lost between the lines.
        </p>
      </div>


      {/* LastName */}
      <div>
        <h1 className="absolute top-107 right-6 text-[150px] font-extrabold text-white tracking-tight leading-none drop-shadow-[2px_4px_6px_rgba(0,0,0,0.4)] font-mono">
        Avasthi
      </h1>
      </div>
      
      {/* Card Start */}
      <div className="w-[350px] h-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF9257] border border-white rounded-2xl shadow-lg shadow-black/40">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[40px] h-[12px] bg-[#FF5B01] rounded-2xl border border-white"></div>
      </div>
     {/* Card end */}


    </div>
  );
}
