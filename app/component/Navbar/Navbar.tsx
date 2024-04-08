import Link from "next/link"
import Details from "../Details/Details"
import { IData } from "@/app/types/types"

const Navbar = ({query}: any) => {
  return (
    <section className="max-w-full">
        <nav className="flex flex-row gap-4 justify-center bg-slate-800 text-white">
            <Link className="p-4 hover:bg-slate-400 hover:text-slate-800" href={"/about"}>About me</Link>
            <Link className="p-4 hover:bg-slate-400 hover:text-slate-800" href={"/experience"}>Experiance</Link>
            <Link className="p-4 hover:bg-slate-400 hover:text-slate-800" href={"/project"}>Projects</Link>
            <Link className="p-4 hover:bg-slate-400 hover:text-slate-800" href={"/education"}>Education</Link>
        </nav>
        <Details query={query} />
    </section>
  )
}

export default Navbar