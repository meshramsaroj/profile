import data from '@/app/data'
import Image from 'next/image'
import React from 'react'

const EducationCard = ({query}: any) => {
  return (
    query && <div className="grid grid-col gap-3 px-3">
    {data[query]?.map((detail: any)=> (
        <div key={detail.id+detail.schoolName} className="shadow-md rounded-lg border border-2 border-gray-300 bg-slate-300 text-slate-800 p-2 hover:bg-slate-500 hover:text-gray-300">
            <div className="flex flex-row gap-3 align-middle h-32">
                <Image src={detail.schoolImageUrl} alt={detail.schoolName} width={100} height={100} className="w-1/5" />
                <div>
                <p><span className="font-semibold">School Name:</span> <span className="w-4/5 text-1xl font-semibold">{detail.schoolName}</span></p>
                {detail.stream && <p><span className="font-semibold">Stream:</span> <span>{detail.stream}</span></p>}
                <p><span className="font-semibold">Degree:</span> <span>{detail.degree}</span></p>
                <p><span className="font-semibold">Grade:</span> <span>{detail.percentage}</span></p>
            </div>
            </div>
        </div>
    ))}
    </div>
  )
}

export default EducationCard