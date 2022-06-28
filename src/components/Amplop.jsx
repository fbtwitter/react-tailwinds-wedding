import { useSearchParams } from 'react-router-dom'
import LeafLeft from '../assets/png/leaf-leftt.png'
import LeafRight from '../assets/png/leaf-rightt.png'

const Amplop = ({ openInvitation, setOpenInvitation }) => {
  const [searchParams] = useSearchParams({
    to: 'My Bestie',
  })
  const to = searchParams.get('to')

  return (
    <>
      <div
        className={`${
          openInvitation
            ? 'absolute top-0 bottom-0 right-0 left-0'
            : 'hidden -translate-y-full transition-all'
        }`}
      >
        <main className="absolute top-0 bottom-0 right-0 left-0">
          <div className="relative w-screen h-screen flex flex-col justify-center items-center bg-[url('../assets/png/bg-abs-green.png')] bg-cover">
            <img
              src={LeafLeft}
              alt="top-left"
              className="w-5/12 h-5/12 absolute top-0 left-0 z-0 opacity-90 xl:w-3/12 xl:h-3/12"
            />
            <img
              src={LeafRight}
              alt="bottom-right"
              className="w-5/12 h-5/12 absolute bottom-0 right-0 z-0 opacity-90 xl:w-3/12 xl:h-3/12"
            />
            <div className="container px-4 ">
              <div className="flex flex-col justify-center items-center">
                <h2 className="font-['Dancing_Script'] font-semibold text-2xl my-2 text-teal-800 text-center max-w-2xl opacity-50">
                  The Wedding Of
                </h2>
                <div className="bride flex justify-center items-center mb-5 ">
                  <h1 className="font-['Dancing_Script'] font-bold text-5xl my-5 text-teal-900">
                    Iqlima
                  </h1>
                  <h2 className="mx-4 font-['Dancing_Script'] font-bold text-3xl text-slate-300">
                    &
                  </h2>
                  <h1 className="font-['Dancing_Script'] font-bold text-5xl my-5 text-teal-900">
                    Reza
                  </h1>
                </div>

                <h2 className="font-['Raleway'] font-semibold text-base my-2  text-teal-800 text-center max-w-2xl sm:text-2xl">
                  Kepada Bapak/Ibu/Saudara/i
                </h2>

                <span className="font-['Raleway'] block font-bold tracking-wide my-4 w-full text-3xl uppercase text-teal-900 sm:text-4xl border p-4 rounded-md bg-slate-100/60 text-center">
                  {to}
                </span>

                <button
                  className="font-['Raleway'] text-base font-semibold text-white bg-teal-700 py-3 px-8 rounded-xl hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out animate-pulse"
                  onClick={() => setOpenInvitation(!openInvitation)}
                >
                  Buka Undangan
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Amplop
