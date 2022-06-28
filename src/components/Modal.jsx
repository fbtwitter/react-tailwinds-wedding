import TimesIcon from '../assets/svg/times.svg'
import { useId } from 'react'
import { useForm } from 'react-hook-form'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'

const Modal = ({ modalIsOpen, setModalIsOpen }) => {
  const handleClickOverlay = (e) => {
    if (!e.target.closest('.modal')) {
      setModalIsOpen(false)
    }
  }

  const id = useId()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({})

  const onSubmit = async (data) => {
    const formDataCopy = {
      ...data,
      timestamp: serverTimestamp(),
    }

    await addDoc(collection(db, 'confirmation'), formDataCopy)

    setValue('namaLengkap', '')
    setValue('pesan', '')

    setModalIsOpen(false)
    console.log(data)
  }

  console.log(errors)

  return (
    <div
      className={`flex justify-center items-center fixed top-0 right-0 bottom-0 left-0 bg-black/50 transition-all ease-out ${
        modalIsOpen ? 'opacity-100 z-50 visible' : 'hidden'
      }`}
      onClick={handleClickOverlay}
      role="presentation"
      onKeyDown={handleClickOverlay}
    >
      <div className="modal grid items-stretch w-screen bg-white/95 shadow text-black rounded-lg relative max-w-sm">
        <div className="p-6">
          <button
            className="absolute top-6 right-6 p-0 bg-transparent opacity-40 cursor-pointer"
            title="Close"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            <span className="sr-only">Close</span>
            <img src={TimesIcon} alt="close icon" />
          </button>
          <header className="flex flex-col justify-center items-center gap-2">
            <h2 className="font-['Dancing_Script'] font-semibold text-3xl text-teal-800">
              Tulis Pesan
            </h2>
            {/* <h3 className="font-['Raleway'] font-semibold text-sm text-teal-900/60">
              Save your information to check out faster
            </h3> */}
          </header>
          <div className="overflow-y-auto -mx-6 mt-5 pb-0">
            <form className="pr-6 pl-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mt-4">
                <label
                  htmlFor={`${id}-namaLengkap`}
                  className="text-left mb-2 font-['Raleway'] text-sm font-medium"
                >
                  Nama
                </label>
                <input
                  id={`${id}-namaLengkap`}
                  type="text"
                  className="w-full p-3 text-sm rounded bg-white border focus:outline-none focus:border focus:border-slate-800 focus-within:outline-none focus-within:border focus-within:border-slate-800"
                  placeholder="Tuliskan Namamu"
                  {...register('namaLengkap', {
                    required: 'Name is required',
                    minLength: {
                      value: 3,
                      message: 'min length is 4',
                    },
                  })}
                />
                {errors.namaLengkap && (
                  <span className="font-['Raleway'] mt-2 text-red-500 text-xs">
                    {errors.namaLengkap?.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col mt-4">
                <label
                  htmlFor={`${id}-pesan`}
                  className="text-left mb-2 font-['Raleway'] text-sm font-medium"
                >
                  Pesan
                </label>
                <textarea
                  id={`${id}-pesan`}
                  type="text"
                  className="w-full p-3 text-sm rounded bg-white border focus:outline-none focus:border focus:border-slate-800 focus-within:outline-none focus-within:border focus-within:border-slate-800"
                  placeholder="Tuliskan Namamu"
                  {...register('pesan', {
                    required: 'Pesan is required',
                    minLength: {
                      value: 4,
                      message: 'min length is 4',
                    },
                  })}
                />
                {errors.pesan && (
                  <span className="font-['Raleway'] mt-2 text-red-500 text-xs">
                    {errors.pesan?.message}
                  </span>
                )}
              </div>
              <div className="mt-8">
                <button
                  className="cursor-pointer border-0 rounded text-white py-3 px-11 font-semibold text-center transition-all bg-teal-700 w-full"
                  type="submit"
                  aria-label="kirim pesan"
                >
                  <span className="font-['Raleway'] text-sm">Kirim Pesan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
