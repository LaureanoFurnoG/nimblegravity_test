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
            <section className="flex w-full items-center justify-center flex-col mt-20">
                <form className="flex gap-5" onSubmit={handleSubmit}>
                    <input name="email" type="email" id="emailInput" placeholder="example@gmail.com" className="rounded border-1 border-white h-auto placeholder-[#474747cf] w-100 p-3 bg-[#121212]" />
                    <button type="submit" className="bg-[#5cb35c] p-3 rounded text-white w-25 hover:bg-[#386538] cursor-pointer transition-all duration-300">Enter</button>
                </form>
                <div className="w-[100%] sm:w-[100%] md:w-[80%] lg:w-[60%] p-5 flex flex-col gap-3 overflow-auto h-80">
                    <JobCard TitlePosition={"Test"}/>
                </div>
            </section>
        </>
    )
}

export default JobApplication