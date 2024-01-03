export default function Eventspage(){
    return (
<div className="h-screen flex flex-col gap-4 items-center justify-center bg-gradient-to-tl from-black via-zinc-600/20 to-black">

  <a href="#" className="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">

    <p className="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"> UPCOMING </p>

    <div className="grid grid-cols-6 p-5 gap-y-2">

      <div>
        <img src="https://picsum.photos/seed/2/200/200" className="max-w-16 max-h-16 rounded-full" />
      </div>

      <div className="col-span-5 md:col-span-4 ml-4">

        <p className="text-sky-500 font-bold text-xs"> 120+ SPOTS LEFT </p>

        <p className="text-gray-300 font-bold"> Kaggle Competition | NLP </p>

        <p className="text-gray-400"> Sun | January 12 | 4:00 - 9:30 PM </p>

        <p className="text-gray-400"> Competition </p>

      </div>

      <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> FREE</p>
      </div>

    </div>

  </a>

  <a href="#" className="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
  <p className="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"> PAST </p>

    <div className="grid grid-cols-6 p-5 gap-y-2">

      <div>
        <img src="https://picsum.photos/seed/2/200/200" className="max-w-16 max-h-16 rounded-full" />
      </div>

      <div className="col-span-5 md:col-span-4 ml-4">

        <p className="text-sky-500 font-bold text-xs"> 210 Attended </p>

        <p className="text-gray-300 font-bold"> Google Campus Fest </p>

        <p className="text-gray-400">  20th October | 4:00 - 9:30 PM </p>

        <p className="text-gray-400"> Conference </p>

      </div>

      <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> FREE </p>
      </div>

    </div>

  </a>

</div>
 
    )
}