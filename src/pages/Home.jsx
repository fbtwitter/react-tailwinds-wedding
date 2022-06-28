/* eslint-disable jsx-a11y/media-has-caption */
import WeddingSong from '../assets/mp3/teman-hidup.mp3'
import LeafLeft from '../assets/png/leaf-left.png'
import LeafRight from '../assets/png/leaf-right.png'
import { useEffect, useState } from 'react'
import MessageForm from '../components/MessageForm'
import Messagelist from '../components/MessageList'
import MessageProperties from '../components/MessageProperties'
import { MessageProvider } from '../context/MessageContext'
import wdImage from '../assets/png/wd-2.png'
import {
  getDoc,
  doc,
  addDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
  getDocs,
} from 'firebase/firestore'
import { db } from '../firebase.config'
import Button from '../components/shared/Button'
import Card from '../components/shared/Card'
import Amplop from '../components/Amplop'
import { ReactComponent as GMapsIcon } from '../assets/svg/gmaps.svg'
import { ReactComponent as MessageIcon } from '../assets/svg/message.svg'

function Home() {
  const [openInvitation, setOpenInvitation] = useState(true)
  const [openMessage, setOpenMessage] = useState(false)
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    message: '',
  })

  const { name, message, attendance } = formData

  const onSubmit = async (e) => {
    e.preventDefault()

    const formDataCopy = {
      ...formData,
      timestamp: serverTimestamp(),
    }

    await addDoc(collection(db, 'confirmation'), formDataCopy)
  }

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.id]: e.target.value,
  //   }))
  // }

  useEffect(() => {
    setLoading(true)
    const fetchListing = async () => {
      const listingRef = collection(db, 'confirmation')

      const q = query(listingRef, orderBy('timestamp', 'desc'))

      const querySnap = await getDocs(q)

      const listings = []

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      setListing(listings)
      setLoading(false)
    }

    fetchListing()
  }, [])

  const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  function getFormattedDate(date, prefomattedDate = false, hideYear = false) {
    const day = date.getDate()
    const month = MONTH_NAMES[date.getMonth()]
    const year = date.getFullYear()
    const hours = date.getHours()
    let minutes = date.getMinutes()

    if (minutes < 10) {
      // Adding leading zero to minutes
      minutes = `0${minutes}`
    }

    if (prefomattedDate) {
      // Today at 10:20
      // Yesterday at 10:20
      return `${prefomattedDate} at ${hours}:${minutes}`
    }

    if (hideYear) {
      // 10. January at 10:20
      return `${day}. ${month} at ${hours}:${minutes}`
    }

    // 10. January 2017. at 10:20
    return `${day}. ${month} ${year}. at ${hours}:${minutes}`
  }

  // --- Main function
  function timeAgo(dateParam) {
    if (!dateParam) {
      return null
    }

    const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam)
    const DAY_IN_MS = 86400000 // 24 * 60 * 60 * 1000
    const today = new Date()
    const yesterday = new Date(today - DAY_IN_MS)
    const seconds = Math.round((today - date) / 1000)
    const minutes = Math.round(seconds / 60)
    const isToday = today.toDateString() === date.toDateString()
    const isYesterday = yesterday.toDateString() === date.toDateString()
    const isThisYear = today.getFullYear() === date.getFullYear()

    if (seconds < 5) {
      return 'now'
    } else if (seconds < 60) {
      return `${seconds} seconds ago`
    } else if (seconds < 90) {
      return 'about a minute ago'
    } else if (minutes < 60) {
      return `${minutes} minutes ago`
    } else if (isToday) {
      return getFormattedDate(date, 'Today') // Today at 10:20
    } else if (isYesterday) {
      return getFormattedDate(date, 'Yesterday') // Yesterday at 10:20
    } else if (isThisYear) {
      return getFormattedDate(date, false, true) // 10. January at 10:20
    }

    return getFormattedDate(date) // 10. January 2017. at 10:20
  }

  return (
    <div className="max-w-sm">
      <Amplop
        openInvitation={openInvitation}
        setOpenInvitation={setOpenInvitation}
      />
      <div className={`${openInvitation ? 'hidden' : ''}`}>
        <main className="relative top-0 bottom-0 right-0 left-0">
          <div className="absolute w-screen bg-[url('../assets/png/bg-abs-green.png')] bg-cover">
            <img
              src={LeafLeft}
              alt="top-left"
              className="w-5/12 h-5/12 absolute top-0 left-0 z-0 opacity-90 xl:w-2/12 xl:h-2/12"
            />
            <img
              src={LeafRight}
              alt="bottom-right"
              className="w-5/12 h-5/12 absolute bottom-0 right-0 z-0 opacity-90 xl:w-2/12 xl:h-2/12"
            />
            <div
              className={`container p-4 ${openMessage ? 'hidden' : 'visible'}`}
            >
              <div className="flex flex-col justify-center items-center text-center">
                <h1 className="sr-only">Wedding Iqlima & Reza</h1>
                <section className="my-60">
                  <h2 className="text-2xl font-['Dancing_Script'] tracking-widest text-teal-900">
                    &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                    menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
                    agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
                    menjadikan di antaramu rasa kasih dan sayang&quot;
                    <span className="block">(QS. Ar-Rum : 21)</span>
                  </h2>
                </section>
                <section className="flex flex-col justify-center">
                  <h2 className="text-3xl font-['Dancing_Script'] tracking-normal font-bold text-teal-900/80 mb-8">
                    السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّهِ وَبَرَكاتُهُ
                  </h2>
                  <h3 className="font-['Raleway'] font-bold tracking-wide text-lg text-teal-900/90 mx-4">
                    Dengan memohon Rahmat Allah SWT dan dengan segenap
                    kerendahaan hati, kami bermaksud akan menyelenggarakan ikat
                    janji suci kami
                  </h3>
                </section>
                <section className="my-36 flex flex-col justify-center items-center sm:mb-10">
                  <h2 className="font-['Dancing_Script'] font-bold text-3xl sm:text-6xl mb-5 text-teal-900">
                    Iqlima Syahara, A.P.A.Pj
                  </h2>
                  <p className="font-['Raleway'] font-semibold text-lg sm:text-3xl mb-5 text-teal-700/70">
                    Putri dari Mujiono Raharjo, S.Pd. (Alm) dan Ibu Sutami
                    (Almh.)
                  </p>
                  <p className="font-['Raleway'] text-base text-teal-800">
                    {' '}
                    Jalan Dahlia 23 RT 007 RW 001, Slamparejo, Kec. Jabung,
                    Kabupaten Malang, Jawa Timur 65155
                  </p>
                  <h3 className="font-['Dancing_Script'] font-bold text-3xl sm:text-4xl my-8 sm:my-5 text-slate-500">
                    &
                  </h3>
                  <h2 className="font-['Dancing_Script'] font-bold text-3xl sm:text-6xl mb-5 text-teal-900">
                    Reza Fauzi Augusdi, S.Tr.Kom.
                  </h2>
                  <p className="font-['Raleway'] font-semibold text-lg sm:text-3xl mb-5 text-teal-700/70">
                    Putra dari Ir. H. Rudy Skundar Oktarijanto dan Ibu Hj. Ina
                    Herlina
                  </p>
                  <p className="font-['Raleway'] text-base text-teal-800">
                    {' '}
                    Perum Graha Indah Baturan Blok G No 6 Colomadu, Karanganyar,
                    Jawa Tengah 57171
                  </p>
                </section>

                <section className="flex flex-col justify-center align-items mb-2">
                  <h3 className="font-['Raleway'] font-medium tracking-wider text-center text-xl sm:text-2xl text-teal-700 mb-4 sm:mb-5 max-w-xs">
                    InsyaAllah akan diselenggarakan pada
                  </h3>
                  <p className="font-['Arvo'] tracking-widest text-center font-bold text-3xl text-teal-900 sm:text-xl uppercase">
                    14 JULI 2022
                    <span className="block max-w-[3rem] mx-auto bg-teal-800 w-full h-[0.1rem] my-4 animate-ping"></span>
                  </p>
                </section>

                <section className="flex flex-col gap-8 sm:flex sm:flex-row">
                  <div className="max-w-base border mx-4 p-8 rounded-md bg-slate-100/60 flex flex-col gap-6">
                    <div className="flex justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <h4 className="font-['Dancing_Script'] text-5xl sm:text-5xl font-light text-teal-800">
                          Akad Nikah
                        </h4>
                        <span className="bg-slate-800 w-full h-[1px] my-4"></span>
                        <h4 className="font-['Raleway'] text-xl sm:text-2xl ont-light text-slate-600">
                          08.30 WIB
                        </h4>
                      </div>
                    </div>
                    <h3 className="max-w-2xl mx-auto font-['Raleway'] font-medium tracking-wider text-slate-900 text-base">
                      Jalan Dahlia 23 RT 007 RW 001, Slamparejo, Kec. Jabung,
                      Kabupaten Malang, Jawa Timur 65155
                    </h3>

                    <a
                      href="https://goo.gl/maps/ThYCzDdbhEHRqYrt7"
                      className="font-['Arvo'] text-base sm:text-xl uppercase font-light text-teal-800 flex gap-4 border border-teal-800 py-3 px-4 rounded-xl hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out hover:bg-teal-800 hover:text-white max-w-fit mx-auto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GMapsIcon width={'18'} className="fill-current" />
                      Buka Maps
                    </a>
                  </div>
                  <div className="max-w-base border mx-4 p-8 rounded-md bg-slate-100/60 flex flex-col gap-6">
                    <div className="flex justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <h4 className="font-['Dancing_Script'] text-5xl sm:text-5xl font-light text-teal-800">
                          Syukuran
                        </h4>
                        <span className="bg-slate-800 w-full h-[1px] my-4"></span>
                        <h4 className="font-['Raleway'] text-xl sm:text-2xl ont-light text-slate-600">
                          10.00 - 12.00 WIB
                        </h4>
                      </div>
                    </div>
                    <h3 className="max-w-2xl mx-auto font-['Raleway'] font-medium tracking-wider text-slate-900 text-base">
                      Jalan Dahlia 23 RT 007 RW 001, Slamparejo, Kec. Jabung,
                      Kabupaten Malang, Jawa Timur 65155
                    </h3>

                    <a
                      href="https://goo.gl/maps/ThYCzDdbhEHRqYrt7"
                      className="font-['Arvo'] text-base sm:text-xl uppercase font-light text-teal-800 flex gap-4 border border-teal-800 py-3 px-4 rounded-xl hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out hover:bg-teal-800 hover:text-white max-w-fit mx-auto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GMapsIcon width={'18'} className="fill-current" />
                      Buka Maps
                    </a>
                  </div>
                </section>

                <section className="mt-32 mb-16">
                  <p className="font-['Raleway'] font-semibold tracking-wider text-lg text-teal-900">
                    Sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
                    berkenan memberikan doa terbaik untuk pernikahan kami.
                  </p>
                </section>
                <section className="w-full">
                  {loading ? (
                    <h1>Loading...</h1>
                  ) : listing && listing.length > 0 ? (
                    <>
                      <ul className="divide-y divide-slate-400/10 overflow-y-scroll max-h-[32rem] rounded-lg mx-4 bg-slate-100/60">
                        {listing.map((item) => (
                          <li key={item.id} className="w-full p-4 text-left">
                            {/* <div className="font-['Raleway']">
                              <p className="text-sm font-semibold text-slate-900">
                                {item.data.name}
                              </p>
                              <p className="text-sm font-medium text-slate-500">
                                {item.data.message}
                              </p>
                            </div> */}
                            <div className="flex justify-between space-x-3">
                              <div className="min-w-0 flex-1">
                                <p className="text-left text-base font-medium text-gray-900 truncate">
                                  {item.data.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  Hadir
                                </p>
                              </div>
                              <time
                                dateTime={item.data.timestamp.seconds}
                                className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                              >
                                {timeAgo(item.data.timestamp.seconds * 1000)}
                                {/* {console.log(new Date(Date.now()))}
                                {console.log(
                                  Math.floor(
                                    new Date(
                                      item.data.timestamp.seconds
                                    ).getTime() / 1000.0
                                  )
                                )} */}
                                {/* {console.log(item.data.timestamp.seconds)} */}
                                {/* {console.log(
                                  new Date(item.data.timestamp.seconds * 1000)
                                )} */}
                                {/* {console.log(
                                  new Date(
                                    item.data.timestamp.seconds * 1000
                                  ).getDate() +
                                    '/' +
                                    new Date(
                                      item.data.timestamp.seconds * 1000
                                    ).getDate(),
                                  new Date(
                                    item.data.timestamp.seconds * 1000
                                  ).getFullYear()
                                )} */}

                                {/* {console.log(
                                  new Date(Date.now()).getDate() -
                                    new Date(
                                      item.data.timestamp.seconds * 1000
                                    ).getDate()
                                )} */}
                                {/* {console.log(
                                  new Date(
                                    item.data.timestamp.seconds * 1000
                                  ).toLocaleTimeString()
                                )} */}
                                {/* {timeSince(new Date(Date.now()))}
                                {console.log(new Date(Date.now()))} */}
                              </time>
                            </div>
                            <div className="mt-1">
                              <p className="line-clamp-2 text-base text-gray-600">
                                {item.data.message}
                              </p>
                            </div>
                          </li>
                          // <li
                          //   key={item.id}
                          //   id={item.id}
                          //   className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                          // >
                          // <div className="flex justify-between space-x-3">
                          //   <div className="min-w-0 flex-1">
                          //     <span
                          //       className="absolute inset-0"
                          //       aria-hidden="true"
                          //     />
                          //     <p className="text-left text-sm font-medium text-gray-900 truncate">
                          //       {item.data.name}
                          //     </p>
                          //     <p className="text-sm text-gray-500 truncate">
                          //       subject
                          //     </p>
                          //   </div>
                          // <time
                          //   dateTime={item.data.timestamp.seconds}
                          //   className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                          // >
                          //   time
                          // </time>
                          //   </div>
                          // <div className="mt-1">
                          //   <p className="line-clamp-2 text-sm text-gray-600">
                          //     {item.data.message}
                          //   </p>
                          // </div>
                          // </li>
                        ))}
                      </ul>

                      {/* {listing.map((item) => (
                        <div key={item.id} id={item.id}>
                          {' '}
                          {item.data.message}
                          {item.data.name}
                          {new Date(
                            item.data.timestamp.seconds * 1000
                          ).toISOString()}
                        </div>
                      ))} */}
                    </>
                  ) : (
                    <>No data yet</>
                  )}
                </section>
                <section className="my-36">
                  <h2 className="font-['Dancing_Script'] font-semibold text-2xl my-2 text-teal-800 text-center max-w-2xl opacity-50">
                    Kami yang berhabagia,
                  </h2>
                  <div className="flex justify-center items-center mb-5 ">
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
                </section>
              </div>
              <footer className="text-center">
                <h2 className="font-sans font-semibold text-lg my-2 text-rose-400/60 text-center max-w-2xl inline mr-1">
                  &copy; Azam&apos;s
                </h2>
                <img
                  src={wdImage}
                  alt="Vendor Identity"
                  className="inline w-12 -mt-2"
                />
              </footer>
              <div className="fixed bottom-4 right-4 z-10">
                <button
                  className="px-4 h-12 mr-3 rounded-full flex justify-center items-center bg-teal-700 text-white"
                  onClick={() => setOpenMessage(!openMessage)}
                >
                  <span className="mr-2 font-semibold">Kirim Pesan</span>
                  <MessageIcon width={'18'} className="fill-current" />
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
    </div>
  )
}

export default Home
