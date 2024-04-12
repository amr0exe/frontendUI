
function Banner() {
   return <div className="flex justify-center">
      <div className="border-y border-x border-white text-white w-[65vw] -mt-6 flex items-center  p-10 font-semibold gap-5 text-sm">
         <p className="font-normal text-2xl text-gray-400">Solidity <br/> v0.8.25</p>
         <div className="text-base ml-4">
            <p>Solidity 0.8.25 Introducing the newest version of the Solidity Compiler: v0.8.25. This is a minor release <br/>
            following teh Dencun hard-fork on Ethereum mainnet that occurred on March 13, 2024 at 13:55 UTC.
            </p>
         </div>
      </div>
   </div>
}

export default Banner;