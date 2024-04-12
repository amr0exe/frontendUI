
function Hero() {
   return <div className="h-[90vh] w-full flex flex-col justify-center items-center">

         <div className="flex flex-col items-center  text-white mt-14">
            <p className="text-7xl font-bold">{'{'} solidity {'}'}_</p> 

            <div className="font-semibold text-2xl flex flex-col items-center mt-10">
               <p>A statically-typed curly-braces programming language designed</p>
               <p>for developing smart contracts that run on Ethereum.</p>
            </div>
         </div>

         <div className="flex gap-5 mt-10">
            <button className="bg-white border-2 text-purple-700 font-semibold p-2">Read the docs</button>
            <button className="border-2 flex font-semibold text-white p-2">Repository 22.1K </button>
         </div>
   </div>
}

export default Hero;
