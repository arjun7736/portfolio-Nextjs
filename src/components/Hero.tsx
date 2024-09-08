"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
    return (
        <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
            <div>
                <div className="text-8xl font-bold text-center ">
                    <h1 className="text-[#98B4CE]">Hi, I am</h1>
                    <h1 className="text-[#E48A57]">Arjun</h1>
                </div>
                <motion.div
                    className="absolute left-[280px] top-[170px] "drag
                >
                    <Image src={}
                        height="190"
                        width="190"
                        alt="cursor"
                        className=""
                    />
                </motion.div>
            </div>
        </div>
    )
}