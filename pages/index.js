import styles from "../styles/index.module.css";
export default function Home() {
  return (
    <div className="mx-auto h-screen overflow-hidden rounded-xl ">
      <div className="relative">
        <div className={styles.code}></div>
        <img
          className="absolute -left-16 -top-4 h-[18rem] w-auto"
          src="/images/mahdi.png"
          alt="mahdi"
        />
      </div>
      <div className="">
        <h2 className="ml-[4rem] mt-4 text-center font-mono text-xl">
          <span> Hi! I'm </span>
          <span className="bg-multiColer bg-clip-text font-sans text-2xl font-extrabold text-transparent">
            Mahdi
          </span>
        </h2>
        <ul className="font-none mt-6 flex flex-col items-center justify-center gap-8">
          <li className="flex place-items-center gap-4 rounded-xl px-4 py-2 shadow-lg shadow-blue-400">
            <img className="w-12" src="/images/tel.png" alt="telgram" />
            <a
              className="font-semibold text-blue-600"
              href="https://t.me/mehdi_lhj"
              target="_blank"
            >
              My Telegram
            </a>
          </li>
          <li className="flex place-items-center gap-4 rounded-xl px-4 py-2 shadow-lg shadow-gray-600">
            <img className="w-20" src="/images/r.png" alt="github" />
            <a
              className="font-semibold text-black"
              href="https://github.com/mahdikhalili1998"
              target="_blank"
            >
              My GitHub
            </a>
          </li>
          <li className="flex place-items-center gap-4 rounded-xl px-4 py-2 shadow-lg shadow-pink-800">
            <img className="w-12" src="/images/insta.png" alt="github" />
            <a
              className="font-semibold text-pink-800"
              href="https://instagram.com/mahdi_lhj"
              target="_blank"
            >
              My Instagram
            </a>
          </li>
          <li className="flex place-items-center gap-4 rounded-xl px-4 py-2 shadow-lg shadow-green-600">
            <img className="w-14" src="/images/whatsApp.png" alt="github" />
            <a
              className="font-semibold text-green-700"
              href="https://wa.me/989389668917"
              target="_blank"
            >
             My WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
