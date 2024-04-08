import { IData } from "./types/types";

const data = {
    education: [
        {
            id: 1,
            schoolName: "G H Raisoni Collage of Engineering",
            duration: "2020",
            percentage: "8.55 CGPA",
            schoolImageUrl: "https://rgicdn.s3.ap-south-1.amazonaws.com/ghrcenagpur/images/logos/logo.webp",
            university: "RTMNU",
            degree: "Bachelor of Engineering",
            stream: "Computer Science and Engineering"

        },
        {
            id: 2,
            schoolName: "Priyadarshini Polytechinic",
            duration: "2017",
            percentage: "73.41%",
            schoolImageUrl: "https://universitykart.b-cdn.net//Content/upload/admin/3utbbyd2.mcr.jpg",
            university: "RTMNU",
            degree: "Polytechnic",
            stream: "Computer technology"
        },
        {
            id: 1,
            schoolName: "Z. P. High School, Nildoh",
            duration: "2012",
            percentage: "66.91%",
            schoolImageUrl: "https://www.nagpurzp.com/images/WebSiteImg_footerlogo.png",
            university: "RTMNU",
            degree: "SSC",
            stream: ""
        },
    ],
    project:[],
    experience:[
        {   
            id: "cmp1",
            companyName: "MRR soft",
            description : "",
            duration : "Dec-2024 - Present",
            designation: "Software Engineer",
            projects: [
                {
                    projectName: "Artifi",
                    technologies: ["React", "HTML", "Bootstrap css", "Javascript"],
                    projectUrl : "",
                    imageUrl: ""
                }
            ]
        },
        {
            id: "cmp2",
            companyName: "Molecular Connections Pvt Ltd",
            description : "",
            duration : "Mar 2022 - Dec 2023",
            designation: "React UI Developer",
            projects: [
                {
                    projectName: "Orthopub",
                    technologies: ["React", "HTML", "React-Bootstrap", "Javascript", "Redux", "Font awesome icon"," API binding"],
                    projectUrl : "https://orthopub.molecularconnections.com/orthopub/home",
                    imageUrl: "",
                    description: `Finding the most suitable journal to publish in and formatting your paper to suit that journal’s
                    requirements is time-consuming and complicated. OrthoPublish has been designed by experts in the
                    orthopaedic community and pulls together all the information you need to know about each journal
                    in one easy-to-use website. Find the journal best matched to your article and then use our
                    formatting tool to prepare it for submission.
                    Developed a UI using React, Redux, React-Bootstrap, Font awesome icon, with API binding`
                },
                {
                    projectName: "Manuscript Insight",
                    technologies: ["React", "HTML", "React-Bootstrap", "Javascript", "Redux", "Font awesome icon"," API binding"],
                    projectUrl : "https://app.manuscriptinsight.ai/",
                    imageUrl: "",
                    description: `Rejected manuscript tracking system.
                    This tool is designed to help users to track which manuscripts are rejected by which publishers.
                    In this tool, we tracked the total number of rejected and accepted manuscripts by publishers based
                    on the provided date range`
                },
                {
                    projectName: "Mi Management",
                    technologies: ["Angular 14", "HTML", "Bootstrap css", "Javascript"],
                    projectUrl : "https://hdocket.molecularconnections.com/mi-management/#/auth/login",
                    imageUrl: "",
                    description: `This is a manuscript insights management tool which is designed to manage data.`
                },
                {
                    projectName: "WCP",
                    technologies: ["React", "Redux", "HTML", "React-Bootstrap css", "Javascript", "API binding"],
                    projectUrl : "https://poc.molecularconnections.com/wcp-ui",
                    imageUrl: "",
                    description: `Its an internal project which is used for tracking data
                    Developed a UI using React, Redux, React-Bootstrap, Font awesome icon, with API binding`
                },
               
            ]
        },
        {
            id: "cmp3",
            companyName: "Bloomstack Corp",
            description : "",
            duration : "Feb 2020 - Feb 2022",
            designation: "Software Developer",
            projects: [
                {
                    projectName: "LMS system",
                    technologies: ["React", "HTML", "Bootstrap css", "Javascript"],
                    projectUrl : "https://bloomstack.com/learn",
                    imageUrl: "",
                    description: `It is an internal LMS system to provide courses to learn new things for developer`
                },
                {
                    projectName: "JH Audio",
                    technologies: ["React","Redux" ,"HTML", "Bootstrap css", "Javascript"],
                    projectUrl : "https://jhaudio.com/",
                    imageUrl: "",
                    description: `It is an e-commerce website which is specially designed for customised earphones.`
                },
                {
                    projectName: "Company website",
                    technologies: ["HTML", "Bootstrap css", "Javascript","Frappe"],
                    projectUrl : "https://bloomstack.com/",
                    imageUrl: "",
                    description: `Main company website where we can find all details about company`
                }
            ]
        },
        {
            id: "cmp4",
            companyName: "Intechzia",
            description : "",
            duration : "Apr 2018 - Jul 2018",
            designation: "Intern",
            projects: [
                {
                    projectName: "",
                    technologies: ["React", "HTML", "Bootstrap css", "Javascript"],
                    projectUrl : "",
                    imageUrl: "",
                    description: ``
                }
            ]
        }
    ],
    query: ""

}

export default data;