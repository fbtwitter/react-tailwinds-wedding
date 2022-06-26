/* eslint-disable jsx-a11y/media-has-caption */
import WeddingSong from '../assets/mp3/teman-hidup.mp3'
import LeafLeft from '../assets/png/leaf-left.png'
import LeafRight from '../assets/png/leaf-right.png'
import { useState } from 'react'
import MessageForm from '../components/MessageForm'
import Messagelist from '../components/MessageList'
import MessageProperties from '../components/MessageProperties'
import { MessageProvider } from '../context/MessageContext'
import { useSearchParams } from 'react-router-dom'

function Home() {
  const [openInvitation, setOpenInvitation] = useState(true)
  const [openMessage, setOpenMessage] = useState(false)
  const [searchParams] = useSearchParams({
    to: 'My Bestie',
  })

  let to = searchParams.get('to')

  if (openMessage) {
    return (
      <>
        <div className="absolute top-0 bottom-0 left-0 right-0  bg-no-repeat bg-[url('../assets/png/bg-abs-green.png')] bg-cover">
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
      </>
    )
  }

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

                <h2 className="font-['Arvo'] font-semibold text-lg my-2 tracking-wide text-teal-800 text-center max-w-2xl sm:text-2xl">
                  Kepada Bapak/Ibu/Saudara/i
                </h2>

                <span className="font-sans block font-bold tracking-wide my-4 w-full text-3xl uppercase text-teal-900 sm:text-4xl border p-4 rounded-md bg-slate-100 text-center">
                  {to}
                </span>

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
        <main className="relative top-0 bottom-0 right-0 left-0">
          <div className="absolute w-screen flex flex-col justify-center items-center text-center">
            <img
              src={LeafLeft}
              alt="top-left"
              className="w-5/12 h-5/12 absolute top-0 left-0 z-0 opacity-90 xl:w-3/12 xl:h-3/12"
            />
            <div className="container p-4 bg-amber-50">
              <div className="flex flex-col justify-center items-center text-center">
                <div className="h-screen flex flex-col justify-center mb-5">
                  <h3 className="text-2xl font-['Dancing_Script'] tracking-widest px-2 text-teal-900">
                    &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                    menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
                    agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
                    menjadikan di antaramu rasa kasih dan sayang&quot;
                    <span className="block">(QS. Ar-Rum : 21)</span>
                  </h3>
                </div>
                <div className="flex flex-col justify-center mb-36">
                  <h2 className="text-3xl font-['Dancing_Script'] tracking-wide px-2 text-teal-900 mb-10">
                    السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّهِ وَبَرَكاتُهُ‎
                  </h2>
                  <h3 className="font-['Arvo'] font-light tracking-widest text-lg text-teal-900 mx-4">
                    Dengan memohon Rahmat Allah SWT dan dengan segenap
                    kerendahaan hati, kami bermaksud akan menyelenggarakan ikat
                    janji suci kami
                  </h3>
                </div>
                <div className="mb-36 bride flex flex-col justify-center items-center sm:mb-10">
                  <h1 className="font-['Dancing_Script'] font-bold text-3xl sm:text-6xl mb-5 text-teal-900">
                    Iqlima Syahara, A.P.A.Pj
                  </h1>
                  <p className="font-['Arvo'] tracking-widest font-bold text-base sm:text-3xl text-teal-700 opacity-70 mb-4">
                    Putri dari Mujiono Raharjo, S.Pd. (Alm) dan Ibu Sutami
                    (Almh.)
                  </p>
                  <p className="font-['Arvo'] tracking-wide text-base text-teal-700 font-light opacity-70">
                    {' '}
                    Jalan Dahlia 23 RT 007 RW 001, Slamparejo, Kec. Jabung,
                    Kabupaten Malang, Jawa Timur 65155
                  </p>
                  <h2 className="font-['Dancing_Script'] font-bold text-3xl sm:text-4xl my-8 sm:my-5 text-slate-500">
                    &
                  </h2>
                  <h1 className="font-['Dancing_Script'] font-bold text-3xl sm:text-6xl mb-5 text-teal-900">
                    Reza Fauzi Augusdi, S.Tr.Kom.
                  </h1>
                  <p className="font-['Arvo'] tracking-widest font-bold text-base sm:text-3xl mb-5 text-teal-700 opacity-70">
                    Putra dari Ir. H. Rudy Skundar Oktarijanto dan Ibu Hj. Ina
                    Herlina
                  </p>
                  <p className="font-['Arvo'] tracking-wide text-base text-teal-700 font-light opacity-70">
                    {' '}
                    Perum Graha Indah Baturan Blok G No 6 Colomadu, Karanganyar,
                    Jawa Tengah 57171
                  </p>
                </div>

                <div className="event flex flex-col justify-center align-items mb-4">
                  <h3 className="font-['Arvo'] font-medium tracking-widest text-center text-lg sm:text-2xl text-teal-800 mb-3 sm:mb-5 max-w-xs">
                    InsyaAllah akan diselenggarakan pada
                  </h3>
                  <p className="font-['Arvo'] font-light tracking-widest text-center text-xl sm:text-xl uppercase text-teal-800">
                    <span className=" font-bold text-3xl text-teal-900 underline-offset-4">
                      14 JULI 2022
                    </span>
                  </p>
                </div>

                <div className="max-w-base border my-8 mx-4 p-8 rounded-md bg-slate-100/60 flex flex-col gap-6">
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <h4 className="font-['Dancing_Script'] text-5xl sm:text-xl font-light text-teal-800">
                        Akad Nikah
                      </h4>
                      <span className="bg-slate-800 w-full h-[0.01rem] my-4"></span>
                      <h4 className="font-['Arvo'] text-lg sm:text-2xl ont-light text-slate-600">
                        08.30 WIB
                      </h4>
                    </div>
                  </div>

                  <h3 className="max-w-2xl mx-auto font-['Arvo'] font-normal tracking-wider text-slate-900 text-base">
                    Jalan Dahlia 23 RT 007 RW 001, Slamparejo, Kec. Jabung,
                    Kabupaten Malang, Jawa Timur 65155
                  </h3>

                  <div className="max-w-fit mx-auto">
                    <a
                      href="https://goo.gl/maps/ThYCzDdbhEHRqYrt7"
                      className="font-['Arvo'] text-base sm:text-xl uppercase font-light text-teal-800 flex gap-4 border border-teal-800 py-3 px-4 rounded-xl hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out hover:bg-teal-800 hover:text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        width={'18'}
                        className="fill-current"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Google Maps</title>
                        <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z" />
                      </svg>
                      Buka Maps
                    </a>
                  </div>
                </div>

                <div className="max-w-base border my-sm mx-4 p-8 rounded-md bg-slate-100/60 flex flex-col gap-6">
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <h4 className="font-['Dancing_Script'] text-5xl sm:text-xl font-light text-teal-800">
                        Syukuran
                      </h4>
                      <span className="bg-slate-800 w-full h-[0.01rem] my-4"></span>
                      <h4 className="font-['Arvo'] text-lg sm:text-2xl ont-light text-slate-600">
                        10.00 - 12.00 WIB
                      </h4>
                    </div>
                  </div>

                  <h3 className="max-w-2xl mx-auto font-['Arvo'] font-normal tracking-wider text-slate-900 text-base">
                    Jalan Dahlia 23 RT 007 RW 001, Slamparejo, Kec. Jabung,
                    Kabupaten Malang, Jawa Timur 65155
                  </h3>

                  <div className="max-w-fit mx-auto">
                    <a
                      href="https://goo.gl/maps/ThYCzDdbhEHRqYrt7"
                      className="font-['Arvo'] text-base sm:text-xl uppercase font-light text-teal-800 flex gap-4 border border-teal-800 py-3 px-4 rounded-xl hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out hover:bg-teal-800 hover:text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        width={'18'}
                        className="fill-current"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Google Maps</title>
                        <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z" />
                      </svg>
                      Buka Maps
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center my-60">
                <p className="font-['Arvo'] font-light text-lg tracking-widest text-teal-900 mx-4">
                  Sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
                  berkenan memberikan doa terbaik untuk pernikahan kami.
                </p>
              </div>
              <div className="event flex flex-col justify-center align-items mb-10">
                <h2 className="font-['Arvo'] font-semibold text-xl my-2 text-teal-800 text-center max-w-2xl opacity-50">
                  Kami yang berhabagia,
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
              </div>
              <footer className="my-4 font-['Arvo'] ">
                <h2 className="font-medium text-left text-base sm:text-2xl text-teal-800 sm:mb-5">
                  &copy; Reza Fauzi Augusdi
                </h2>
              </footer>

              <div className="fixed bottom-4 right-4 z-10">
                <button
                  className="px-4 h-12 mr-3 rounded-full flex justify-center items-center bg-teal-700 text-white"
                  onClick={() => setOpenMessage(!openMessage)}
                >
                  <span className="mr-2 font-semibold">Kirim Pesan</span>

                  <svg
                    width={'20'}
                    className="fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Kirim Pesan</title>
                    <path d="M23.849 14.91c-.24 2.94-2.73 5.22-5.7 5.19h-3.15l-6 3.9v-3.9l6-3.9h3.15c.93.03 1.71-.66 1.83-1.59.18-3 .18-6-.06-9-.06-.84-.75-1.47-1.56-1.53-2.04-.09-4.2-.18-6.36-.18s-4.32.06-6.36.21c-.84.06-1.5.69-1.56 1.53-.21 3-.24 6-.06 9 .09.93.9 1.59 1.83 1.56h3.15v3.9h-3.15a5.644 5.644 0 01-5.7-5.19c-.21-3.21-.18-6.39.06-9.6a5.57 5.57 0 015.19-5.1c2.1-.15 4.35-.21 6.6-.21s4.5.06 6.63.24a5.57 5.57 0 015.19 5.1c.21 3.18.24 6.39.03 9.57z" />
                  </svg>
                </button>
              </div>
            </div>
            <img
              src={LeafRight}
              alt="bottom-right"
              className="w-5/12 h-5/12 absolute bottom-0 right-0 z-0 opacity-90 xl:w-3/12 xl:h-3/12"
            />
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
