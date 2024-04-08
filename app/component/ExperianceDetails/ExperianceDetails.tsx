import data from "@/app/data"
import { AngleDown, AngleUp, LinkOut } from "@/app/incons/incons"
import Link from "next/link"
import { useState } from "react"

const ExperianceDetails = ({query}: any) => {
  return (
   <div className="flex flex-col gap-3 px-4">{data[query]?.map((exp: any) => <ExperianceCard detail={exp} />)}</div>
  )
}

const ExperianceCard = ({detail}: any)=>{
    const [show, hide] = useState(detail.id==="cmp2"? true : false)
    const keyName = detail?.companyName.split(" ").join("")
    return (
        <div className="shadow-sm border border-1 border-black rounded-md" key={keyName}>
            <div  title="Click to view details" className="accordian-header flex justify-between align-middle p-2 cursor-pointer bg-slate-700 text-white" onClick={()=>hide(prev => !prev)}>
                <h2>{detail.designation} <span className="text-gray-300">({detail.companyName})</span></h2>
                <div className="flex"><span className="text-gray-400">[{detail.duration}]</span>
                <span>{!show? <AngleDown /> : <AngleUp />}</span>
                </div>
            </div>
            {show && <section className="accordian-content bg-white rounded-b-md p-2 grid grid-cols-3 gap-2 py-3">
                {detail?.projects?.map(project => <div className="shadow-sm border-2 rounded-sm">
                    <div className="border-b-2 p-2 flex justify-between align-middle flex-wrap">
                        <p><span className="font-medium">Project Name: </span>{project.projectName || "NA"}</p>
                        <Link href={project.projectUrl} className="cursor-pointer" target="_blank"><LinkOut /></Link>
                    </div>
                    <p></p>
                    <div className="flex gap-2 flex-wrap px-2 py-3">{project.technologies.map(tech=> <span className="bg-slate-300 rounded-full px-2 hover:bg-slate-100">{tech}</span>)}</div>
                </div>)}
            </section>}
        </div>
    )
}

export default ExperianceDetails