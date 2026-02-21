import { useEffect, useState, type BaseSyntheticEvent } from "react";
import instanceAxios from "../../axios/axios";
import JobCard from "../../components/JobCard/JobCard";

type CandidateResponse = {
    applicationId: string
    candidateId: string
    email: string
    firstName: string
    lastName: string
    uuid: string
}
const JobApplication = () =>{
   const [Candidate, setCandidateInformation] = useState<CandidateResponse>()

    const handleSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        getCandidateInformation(e.target.elements.email.value)
    };

    const getCandidateInformation = async (email: string) =>{
        try{
            const response = await instanceAxios.get(`/api/candidate/get-by-email?email=${email}`)
            setCandidateInformation(response.data)
        }catch(err: any){
            console.log(err)
        }
    }

    useEffect(() =>{
        const getListJobs = async () =>{
            try{
                const response = await instanceAxios.get(`/api/jobs/get-list`)
            }catch(err: any){
                console.log(err)
            }
        }
        getListJobs()
    },[])
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input name="email" type="email" id="emailInput" className="rounded border-1" />
                <button type="submit">Enter</button>
            </form>
            <div className="w-[100%] sm:w-[100%] md:w-[80%] lg:w-[60%] p-5 flex flex-col gap-3 overflow-auto h-80">
                <JobCard TitlePosition={"Test"}/>
            </div>
        </>
    )
}

export default JobApplication