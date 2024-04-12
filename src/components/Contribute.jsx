
function Contribute() {
   return <div className="h-[90vh] flex flex-col items-center mr-4">
      <div className="flex ml-64 items-center mr-44 ">
         <img src="xtra.svg" alt="contribute to society" className="w-72 min-h-52" />

         <div className="ml-36">
            <h1 className="text-indigo-500 text-5xl font-semibold">Contribute to Solidity</h1>
            <p className="text-white text-base font-semibold mt-8">Solidity contributes to improve with help from our global community. Check out these ways to get involved and contribute to  the Solidity project.</p>
         </div>
      </div>

      <div className="flex gap-10 justify-center mt-20">
         <div className="w-64">
            <h1 className="text-xl text-gray-400 font-semibold font-mono">Reporting issues and vulnerabilities</h1>
            <hr className="border-gray-500 mt-5"/>
            <p className="text-base text-white font-semibold mt-5">To report an issue, please use the GitHub issues tracker. To report a vulnerability, please check out the instructions in the SECURITY.md.</p>
         </div>

         <div className="w-64">
            <h1 className="text-xl text-gray-400 font-semibold font-mono">Translating the documentation</h1>
            <hr className="border-gray-500 mt-5"/>
            <p className="text-base text-white font-semibold mt-5">Translations help developers from all corners of the world to be able to read the documentation and learn Solidity.</p>
         </div>

         <div className="w-64">
            <h1 className="text-xl text-gray-400 font-semibold font-mono">Fixing and responding to issues</h1>
            <hr className="border-gray-500 mt-5"/>
            <p className="text-base text-white font-semibold mt-5">Fixing and responding to issues, especially those tagged as “good first issue”, is a great way to get started for external contributors.</p>
         </div>

         <div className="w-64">
            <h1 className="text-xl text-gray-400 font-mono font-semibold">Contributing to language design</h1>
            <hr className="border-gray-500 mt-5"/>
            <p className="text-base text-white font-semibold mt-5">We welcome Solidity power users, auditors, security experts and tooling developers to get involved in the Solidity language design process. Join the Solidity forum, where existing properties of the language and proposals for new language features can be discussed.</p>
         </div>
      </div>

      <button className="bg-white border-2 font-semibold p-2 mt-12 w-fit">Start Contributing</button>

   </div>
}


export default Contribute;