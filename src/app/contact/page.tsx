export default function ContactPage(){
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
          <div className="container">
            <div className=" rounded-lg shadow-lg p-5 md:p-20 mx-2">
              <div className="text-center">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-grey-200 sm:text-5xl sm:leading-none md:text-6xl">
                  CONTACT <span className="text-grey-600">US</span>
                </h2>
                <p className="text-md md:text-xl mt-10"><a className="hover:underline" href="https://www.quicktoolz.com">REACH OUT </a>TO BAIS COMMUNITY FOR SUPPPORT THROUGH THESE LINKS</p>
              </div>
              <div className="flex flex-wrap mt-10 justify-center">
 
                <div className="m-3">
                  <a href="https://www.linkedin.com/company/ais-bu/" title="Linkedin"
                     className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                    <span className="mx-auto">Linkedin</span>
                  </a>
                </div>
                <div className="m-3">
                  <a href="#" title="Mail"
                     className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                    <span className="mx-auto">Gmail</span>
                  </a>
                </div>
                <div className="m-3">
                  <a href="https://discord.gg/MMJRVqkJ" title="Discord"
                     className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-700 hover:border-blue-700 hover:bg-blue-700 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                    <span className="mx-auto">Discord</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>    
        )
}