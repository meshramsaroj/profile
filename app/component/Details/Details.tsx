"use client"
import EducationCard from "../EducationCard/EducationCard"
import ExperianceDetails from "../ExperianceDetails/ExperianceDetails"
import ProjectDetails from "../ProjectDetails/ProjectDetails"

const Details = ({query}: any) => {
  return (
    query && <div className="p-1">
        <h4 className="capitalize p-3 font-semibold text-2xl">{query} details</h4>
       {query==="education" && <EducationCard query={query} />}
       {query==="experience" && <ExperianceDetails query={query} />}

       {query==="project" && <ProjectDetails query={query} />}

    </div>
  )
}

export default Details