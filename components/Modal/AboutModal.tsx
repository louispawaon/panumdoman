import React from "react";

interface AboutModal{
    isOpen: boolean
    onClose:()=>void
  }

export default function AboutModal({isOpen,onClose}:AboutModal){
    return(
        <>
        {isOpen&&
          <><div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-sm">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <div className="font-semibold leading-3">
                  <h3 className="font-lexend text-3xl font-semibold flex-auto text-center">pandumdoman.</h3>
                  <i className="text-xs">(ceb.) [pa.num.dú.man.] n.</i>
                  <h4 className="text-xl">memory, recollection</h4>
                </div>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={onClose}
                >
                  <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                <p>further improved filipino verbal memory test inspired from the human benchmark test, where you need to keep words in short term memory as possible with the twist that it is comprised with the filipino language.</p>
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                   className="bg-transparent hover:bg-slate-100 hover:border-zinc-500 bg-yellow-500 text-zinc-800 font-bold hover:text-zinc-800 py-2 px-4 border hover:border-transparent rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  /*onClick={() => setShowModal(false)}*/
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div><div className="opacity-25 fixed inset-0 z-40 bg-black"></div></>
        }
        </>
    )
}