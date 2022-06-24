/* eslint-disable jsx-a11y/media-has-caption */
import WeddingSong from '../assets/mp3/teman-hidup.mp3'
import LeafLeft from '../assets/png/leaf-left.png'
import LeafRight from '../assets/png/leaf-right.png'
import { useState } from 'react'
import MessageForm from '../components/MessageForm'
import Messagelist from '../components/MessageList'
import MessageProperties from '../components/MessageProperties'
import { MessageProvider } from '../context/MessageContext'
// import { useParams } from 'react-router-dom'

function Home() {
  const [openInvitation, setOpenInvitation] = useState(true)
  const [openMessage, setOpenMessage] = useState(false)

  return (
    <>
      {openMessage && (
        <div className="absolute z-20 top-0 bottom-0 left-0 right-0 bg-white">
          <img
            src={LeafLeft}
            alt="top-left"
            className="w-5/12 h-5/12 absolute top-0 left-0 z-10 opacity-90 xl:w-3/12 xl:h-3/12"
          />
          <img
            src={LeafRight}
            alt="bottom-right"
            className="w-5/12 h-5/12 absolute bottom-0 right-0 z-10 opacity-90 xl:w-3/12 xl:h-3/12"
          />
          <MessageProvider>
            <div className="container px-4 max-w-screen-md mx-auto">
              <MessageForm />
              <MessageProperties />
              <Messagelist />
              <button onClick={() => setOpenMessage(!openMessage)}>
                Tutup Message
              </button>
            </div>
          </MessageProvider>
        </div>
      )}
      <div
        className={`${
          openInvitation
            ? 'absolute top-0 bottom-0 right-0 left-0'
            : 'hidden -translate-y-full transition-all'
        }`}
      >
        {/* <div className="absolute top-0 bottom-0 right-0 left-0 bg-no-repeat bg-[url('../assets/png/bg-abs-green.png')] bg-cover"></div> */}
        <main className="absolute top-0 bottom-0 right-0 left-0">
          <div className="relative w-screen h-screen flex flex-col justify-center items-center">
            <img
              src={LeafLeft}
              alt="top-left"
              className="w-5/12 h-5/12 absolute top-0 left-0 z-10 opacity-90 xl:w-3/12 xl:h-3/12"
            />
            <img
              src={LeafRight}
              alt="bottom-right"
              className="w-5/12 h-5/12 absolute bottom-0 right-0 z-10 opacity-90 xl:w-3/12 xl:h-3/12"
            />
            <div className="container px-4">
              <div className="flex flex-col justify-center items-center">
                <h2 className="font-['Dancing_Script'] font-semibold text-2xl my-2 text-teal-800 text-center max-w-2xl opacity-50">
                  Wedding Of
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

                <h2 className="font-['Arvo'] font-semibold text-xl my-2 text-teal-800 text-center max-w-2xl sm:text-2xl">
                  Kepada Yth :
                  <span className="block font-bold tracking-widest uppercase mt-5 text-2xl text-teal-800 sm:text-4xl">
                    Nita Dwi Imroatun
                  </span>
                  <span className="block mt-5 font-['Arvo'] font-light tracking-widest text-center text-sm text-teal-800 mb-5 sm:text-lg">
                    Tanpa mengurangi rasa hormat, Kami mengundang
                    Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri
                    acara pernikahan kami.
                  </span>
                </h2>
                <button
                  className="text-base font-semibold text-white bg-teal-700 py-3 px-8 rounded-xl hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                  onClick={() => setOpenInvitation(!openInvitation)}
                >
                  Buka Undangan
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className={`${openInvitation ? 'hidden' : ''}`}>
        {/* <div className="absolute top-0 bottom-0 right-0 left-0 bg-no-repeat bg-[url('../assets/png/bg-abs-green.png')] bg-cover"></div> */}
        <main className="absolute top-0 bottom-0 right-0 left-0">
          <div className="relative w-screen h-screen z-10 flex flex-col justify-center items-center text-center">
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
            <div className="container px-4">
              <div className=" flex flex-col justify-center items-center text-center">
                <div
                  className="bride flex flex-col justify-center items-center mb-5 sm:mb-10
          "
                >
                  <h1 className="font-['Dancing_Script'] font-bold text-3xl sm:text-6xl mb-5 text-teal-900">
                    Iqlima Syahara, A.P.
                  </h1>
                  <p className="font-['Dancing_Script'] tracking-widest font-bold text-lg sm:text-3xl text-teal-700 opacity-70">
                    Putri dari Bp. H. Mujiono Raharjo, S.Pd. (Alm) dan Ibu Hj.
                    Sutami
                  </p>
                  <h2 className="font-['Dancing_Script'] font-bold text-xl sm:text-4xl my-3 sm:my-5 text-slate-500">
                    &
                  </h2>
                  <h1 className="font-['Dancing_Script'] font-bold text-3xl sm:text-6xl mb-5 text-teal-900">
                    Reza Fauzi Augusdi, S.Tr.Kom.
                  </h1>
                  <p className="font-['Dancing_Script'] tracking-widest font-bold text-lg sm:text-3xl mb-5 text-teal-700 opacity-70">
                    Putra dari Bp. Ir. H. Rudy Skundar Oktarijanto dan Ibu Hj.
                    Ina Herlina
                  </p>
                </div>

                <div className="event flex flex-col mb-10">
                  <h3 className="font-['Arvo'] font-light tracking-widest text-center  text-lg sm:text-2xl uppercase text-teal-800 mb-3 sm:mb-5">
                    Are Getting Married
                  </h3>
                  <p className="font-['Arvo'] font-light tracking-widest text-center text-lg sm:text-xl uppercase text-teal-800">
                    On{' '}
                    <span className="font-bold text-slate-900">
                      14 JULY 2022
                    </span>
                    , AT{' '}
                    <span className="font-bold text-slate-900">
                      bride&apos;s house
                    </span>{' '}
                    JABUNG, Malang
                  </p>

                  <div className="flex mt-5 sm:mt-10 justify-evenly">
                    <div className="flex flex-col items-center gap-2">
                      <h4 className="font-['Arvo'] text-lg sm:text-xl uppercase font-light text-teal-800">
                        Akad
                      </h4>
                      <h4 className="font-['Arvo'] text-lg sm:text-2xl font-light text-slate-600">
                        08.30
                      </h4>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <h4 className="font-['Arvo'] text-lg sm:text-xl uppercase font-light text-teal-800">
                        Resepsi
                      </h4>
                      <h4 className="font-['Arvo'] text-lg sm:text-2xl font-light text-slate-600">
                        10.00 - 12.00
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-y-8">
                  <a
                    href="https://goo.gl/maps/ThYCzDdbhEHRqYrt7"
                    className="font-['Arvo'] text-base sm:text-xl uppercase font-light text-teal-800 inline-block border border-teal-800 py-3 px-8 rounded-xl hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out hover:bg-teal-800 hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Buka Maps
                  </a>
                </div>
              </div>
              <div className="fixed bottom-4 right-4">
                <button
                  className="w-12 h-12 mr-3 rounded-full flex justify-center items-center bg-teal-700 text-white"
                  onClick={() => setOpenMessage(!openMessage)}
                >
                  <svg
                    width={'20'}
                    className="fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LiveChat</title>
                    <path d="M23.849 14.91c-.24 2.94-2.73 5.22-5.7 5.19h-3.15l-6 3.9v-3.9l6-3.9h3.15c.93.03 1.71-.66 1.83-1.59.18-3 .18-6-.06-9-.06-.84-.75-1.47-1.56-1.53-2.04-.09-4.2-.18-6.36-.18s-4.32.06-6.36.21c-.84.06-1.5.69-1.56 1.53-.21 3-.24 6-.06 9 .09.93.9 1.59 1.83 1.56h3.15v3.9h-3.15a5.644 5.644 0 01-5.7-5.19c-.21-3.21-.18-6.39.06-9.6a5.57 5.57 0 015.19-5.1c2.1-.15 4.35-.21 6.6-.21s4.5.06 6.63.24a5.57 5.57 0 015.19 5.1c.21 3.18.24 6.39.03 9.57z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      {!openInvitation && (
        <div className="music">
          <audio src={WeddingSong} id="my_audio" loop="loop"></audio>
        </div>
      )}
    </>
  )
}

export default Home
