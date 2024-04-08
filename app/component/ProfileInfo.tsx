
import Image from "next/image"
import profileImg from "../accets/user-profile.jpg"
import { EmailIcon, GitHub, GithubProfile, LinkedIn } from "../incons/incons"
import Link from "next/link"
const ProfileInfo = () => {
  return (
    <section className="w-1/4 bg-slate-800 text-white p-3 max-h-full min-h-screen border-r-2 fixed">
        <div className="flex justify-center"><Image src={profileImg} alt='profile-img' width={200} height={200} 
        className="rounded-full border-1" />
        </div>
        <div className='short-introduction-section mt-3'>
            <h2 className='text-2xl font-bold text-center'>Saroj Meshram</h2>
            <div className="my-3">
                <span className="flex gap-2 align-middle mb-1"><GithubProfile /> <span>@meshramsaroj</span></span>
                <span className="flex gap-2 align-middle"><EmailIcon/><span>meshramsaroj24@gmail.com</span></span>
            </div>
            <div className="flex gap-2 align-middle">
                <Link href={"https://github.com/meshramsaroj"} target="_blank"><GitHub /></Link>
                <Link href={"https://in.linkedin.com/in/saroj-meshram-442a72179"} target="_blank"><LinkedIn /></Link>

            </div>
        </div>
    </section>
  )
}

export default ProfileInfo