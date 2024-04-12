
function GetStarted() {
   return <div className="h-[60vh] w-full flex items-start mt-52 gap-40">
      <div className="ml-44">
         <h1 className="text-indigo-500 text-5xl font-medium tracking-tighter">Solidity is evolving rapidly</h1>

         <div className="text-base text-white font-semibold mt-8">
            <p>We aim for a regular (non-breaking) release every month, with approximately one breaking </p>
            <p>release per year. You can follow the implementation status of new features in the <span className="font-bold">Solidity GitHub </span></p>
            <p className="font-bold">project.</p>
         </div>

         <button className="bg-white border-2 text-purple-700 font-semibold p-2 mt-8">Get Started</button>
      </div>

      <div className="">
         <img src="/nextOne.svg" alt="again not here"  className="w-64 object-cover"/>
      </div>
   </div>
}


export default GetStarted;