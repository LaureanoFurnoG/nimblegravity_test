import { useEffect, useState } from "react";
import instanceAxios from "../../axios/axios";

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

    const handleSubmit = (e: any) => {
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
                console.log(response)
            }catch(err: any){
                console.log(err)
            }
        }
        getListJobs()
    },[])
    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input name="email" type="email" id="emailInput" className="rounded" />
            <button type="submit">Enter</button>
        </form>
        </>
    )
}

export default JobApplication