import React from "react";
function Loading(props) {
  return <div className="bg-[#121212] min-w-screen min-h-screen flex justify-center items-center">
    <div id="load" className='flex items-center justify-center rounded-full m-auto border-8 border-purple-padrao ring-[4px] ring-purple-padrao shadow-[0_0_25px_5px_rgba(0,0,255,0.5)] transition-transform duration-1000 w-40 h-40 relative'>
    </div>
      <h1 className="tracking-widest text-center text-3xl text-purple-padrao absolute">MG</h1>
      <h1 className="text-white tracking-widest text-center text-2xl text-purple-padrao absolute mt-50">Iniciando...</h1>
  </div>;
}

export default Loading; 