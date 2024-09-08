import aboutImg from "../../assets/profilepic.png"
import book from "../../assets/book.png"
import pc from "../../assets/pc.png"
import finance from "../../assets/finance.png"
import card from "../../assets/card.png"
import Image from "next/image"

export default function About() {
    return (
        <div className="max-w-[1000px] mx-auto " id="about">

            <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semifold p-4 mb-4">About <span className="text-orange-400">Me</span></h1>
            <div className="grid grid-cols-8 gap-6 place-items-center">

                <div className="w-full col-span-5 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={book} alt="book" className="w-auto h-[130px]" />
                        <div className="flex flex-col mt-4 ">
                            <h2 className="text-2xl font-bold text-white/80">helloooooooo</h2>
                            <p className="text-lg text-whitte/70 mt-2"> thererreeeeee</p>
                        </div>
                    </div>
                </div>


                <div className="w-full col-span-3 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={pc} alt="book" className="w-auto h-[130px]" />
                        <div className="flex flex-col mt-4 ">
                            <h2 className="text-2xl font-bold text-white/80">helloooooooo</h2>
                            <p className="text-lg text-whitte/70 mt-2"> thererreeeeee</p>
                        </div>
                    </div>
                </div>

                <div className="w-full col-span-3 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={finance} alt="book" className="w-auto h-[130px]" />
                        <div className="flex flex-col mt-4 ">
                            <h2 className="text-2xl font-bold text-white/80">helloooooooo</h2>
                            <p className="text-lg text-whitte/70 mt-2"> thererreeeeee</p>
                        </div>
                    </div>
                </div>

                <div className="w-full col-span-5 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={card} alt="book" className="w-auto h-[130px]" />
                        <div className="flex flex-col mt-4 ">
                            <h2 className="text-2xl font-bold text-white/80">helloooooooo</h2>
                            <p className="text-lg text-whitte/70 mt-2"> thererreeeeee</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}