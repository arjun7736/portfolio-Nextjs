import Image from "next/image";
import phone from "../../assets/phone.png"
import mail from "../../assets/mail.png"

export default function Contact() {
    return (
        <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8" id="contact">
            <div className="flex justify-center items-center ">
                <ul className="space-x-2">
                    <li className="flex items-center">
                        <Image src={phone} alt="phone" className="h-[110px] w-auto mr-3" />
                        <p className="text-xl">+91 7736526154</p>
                    </li>
                    <li className="flex items-center">
                        <Image src={mail} alt="mail" className="h-[110px] w-auto mr-3" />
                        <p className="text-xl">arjunvengassery123@gmail.com</p>
                    </li>
                </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-xl max-w-[500px] ">
                <h2 className="text-5xl fond-bold text-orange-400 mb-4 ">Let's Connect</h2>
                <p className="text-white/70 mb-6 "> Send a message and let's Meet</p>
                <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="First name" type="text" />
                        <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Last name" type="text" />
                        <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Email" type="email" />
                        <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="+91 " type="number" />
                    </div>
                    <textarea className="w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Your Message"/>
                    <button className="bg-orange-700 hove:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl">Sent Message</button>
                </form>
            </div>
        </div>
    )
}