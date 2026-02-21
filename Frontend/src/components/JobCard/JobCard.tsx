import { useState, type BaseSyntheticEvent } from "react"
import Notification from "../../components/Notifications/Notification";
import instanceAxios from "../../axios/axios";

type ComponentProps ={
    IdJob: string
    TitlePosition: string
    CandidateInformation?: CandidateResponse
}

type CandidateResponse = {
    applicationId: string
    candidateId: string
    email: string
    firstName: string
    lastName: string
    uuid: string
}

const JobCard = ({TitlePosition, IdJob, CandidateInformation}: ComponentProps) =>{
    const [notification, setNotification] = useState({ type: 0, message: "", id: 0 })
    const [loading, setLoading] = useState<boolean>(false)
    const randomID = () =>{
        return Math.floor(Math.random() * (2000 - 0 + 1)) + 0
    }

    const handleSubmit = (e: BaseSyntheticEvent) =>{
        e.preventDefault()
        if (!CandidateInformation){
            setNotification({ type: 404, message: "Please, search your email", id: randomID() });
            return 
        }
        sendApplication(IdJob, e.target.elements.github_url.value, CandidateInformation)
    }

    const sendApplication = async (IdJob: string, repoUrl: string, candidateInformation: CandidateResponse) =>{
        try{
            setLoading(true)
            const values = {
                uuid: candidateInformation.uuid,
                jobId: IdJob,
                applicationId: candidateInformation.applicationId,
                candidateId: candidateInformation.candidateId,
                repoUrl: repoUrl
            }
            const response = await instanceAxios.post("/api/candidate/apply-to-job", values)
            setNotification({ type: response.status, message: response.statusText, id: randomID()});
            setLoading(false)
        }catch(err: any){
            setLoading(false)
            setNotification({ type: err.status, message: err.message, id: randomID() });
        }
    }
    return(
        <>
            <Notification Type={notification.type} Message={notification.message} Id={notification.id}/>
            <form className="flex bg-[#121212] flex-col w-full p-6 justify-between sm:flex-row gap-5 rounded-lg cursor-pointer hover:border-white hover:border-1" onSubmit={handleSubmit}>
                <h2 className="text-white flex items-center">{TitlePosition}</h2>
                <div className="flex gap-5 sm:w-[50%]">
                    <input type="text" name="github_url" placeholder="Github URL" className="bg-[#242424] text-white border-1 w-[80%] border-white rounded placeholder-[#474747cf] pl-2"/>
                    <button disabled={loading} type="submit" className="bg-[#5cb35c] p-1.5 rounded text-white w-25 hover:bg-[#386538] cursor-pointer transition-all duration-300">SEND</button>
                </div>
            </form>
        </>
    )
}

export default JobCard