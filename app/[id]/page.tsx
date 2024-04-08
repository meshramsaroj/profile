"use client"
import Navbar from "../component/Navbar/Navbar"
import ProfileInfo from "../component/ProfileInfo"
const PageDetails = ({ params }: any) => {
    return (
        <div className="flex justify-between">
        <ProfileInfo />
        <section className="w-3/4 absolute right-0"> 
        <Navbar query={params && params.id} /></section>
    </div>
    )

}

export default PageDetails