export interface IData {
    education : IEducationType[],
    experience : [],
    project: [],
    query: string
}

export interface IEducationType {
    id: number,
    schoolName: string,
    duration: string,
    percentage: string,
    schoolImageUrl: string,
    university: string,
    degree: string,
    stream: string
}