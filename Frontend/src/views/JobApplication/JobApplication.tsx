import { useEffect, useState, type BaseSyntheticEvent } from "react";
import instanceAxios from "../../axios/axios";
import JobCard from "../../components/JobCard/JobCard";
import Notification from "../../components/Notifications/Notification";

type CandidateResponse = {
    applicationId: string
    candidateId: string
    email: string
    firstName: string
    lastName: string
    uuid: string
}
type JobOffer ={
    id: string
    title: string
}
const JobApplication = () =>{
    const [Candidate, setCandidateInformation] = useState<CandidateResponse>()
    const [Offers, setJobOffers] = useState<JobOffer[]>()
    const [notification, setNotification] = useState({ type: 0, message: "", id: 0 })
    const [loading, setLoading] = useState<boolean>(false)
    const handleSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        getCandidateInformation(e.target.elements.email.value)
    };
    
    const randomID = () =>{
        return Math.floor(Math.random() * (2000 - 0 + 1)) + 0
    }

    const getCandidateInformation = async (email: string) =>{
        try{
            setLoading(true)
            const response = await instanceAxios.get(`/api/candidate/get-by-email?email=${email}`)
            setCandidateInformation(response.data)
            setNotification({ type: response.status, message: response.statusText, id: randomID()});
            setLoading(false)
        }catch(err: any){
            setLoading(false)
            setNotification({ type: err.status, message: err.response.data.error, id: randomID() });
        }
    }

    useEffect(() =>{
        const getListJobs = async () =>{
            try{
                const response = await instanceAxios.get(`/api/jobs/get-list`)
                setJobOffers(response.data)
            }catch(err: any){
                setNotification({ type: err.status, message: err.response.data.error, id: randomID() });
            }
        }
        getListJobs()
    },[])

    return(
        <>
            <Notification Type={notification.type} Message={notification.message} Id={notification.id} />
            <section className="flex w-full items-center justify-center flex-col mt-20">
                <div className="flex justify-center w-[100%] sm:w-[100%] md:w-[80%] lg:w-[60%] p-5">
                    <form className="flex gap-5 flex-col sm:flex-row w-full" onSubmit={handleSubmit}>
                        <input  name="email" type="email" id="emailInput" placeholder="example@gmail.com" className="text-white rounded border-1 border-white h-auto placeholder-[#474747cf] w-[100%] sm:w-100 p-3 bg-[#121212]" />
                        <button disabled={loading} type="submit" className="bg-[#5cb35c] p-3 rounded text-white w-25 hover:bg-[#386538] w-full sm:w-50 cursor-pointer transition-all duration-300">Enter</button>
                    </form>
                </div>
                <div className="w-[100%] sm:w-[100%] md:w-[80%] lg:w-[60%] p-5 flex flex-col gap-3 overflow-auto h-[60vh] scrollbar">
                    {Offers?.map((offer) =>(
                        <JobCard key={offer.id} IdJob={offer.id} TitlePosition={offer.title} CandidateInformation={Candidate}/>
                    ))}
                </div>
            </section>
        </>
    )
}

export default JobApplication