import type { BaseSyntheticEvent } from "react"

type ComponentProps ={
    TitlePosition: string
}

const JobCard = ({TitlePosition}: ComponentProps) =>{
    const handleSubmit = (e: BaseSyntheticEvent) =>{
        e.preventDefault()
        console.log(e.target.elements.github_url.value)
    }
    return(
        <>
            <form className="flex bg-[#121212] flex-col w-full p-6 justify-between sm:flex-row gap-5 rounded-lg cursor-pointer hover:border-white hover:border-1" onSubmit={handleSubmit}>
                <h2 className="text-white flex items-center">{TitlePosition}</h2>
                <div className="flex gap-5 sm:w-[50%]">
                    <input type="text" name="github_url" className="bg-[#242424] border-1 w-[80%] border-white rounded"/>
                    <button type="submit" className="bg-[#5cb35c] p-1.5 rounded text-white w-25 hover:bg-[#386538] cursor-pointer transition-all duration-300">test</button>
                </div>
            </form>
        </>
    )
}

export default JobCard