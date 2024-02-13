import { ServicesCard } from "./ServicesCard"
import development from '../assets/development.png'
import dataeng from '../assets/cloud-data.png'
import analysis from '../assets/analysis.png'

export const WhatIdo = () => {
    return <div className="flex flex-col justify-center bg-zinc-800 mt-16 pb-16 text-white text-center">
        <div className="text-4xl mt-6"> What <span className="text-emerald-300 pl-2">I do.</span> </div>
        <div className="flex justify-around">
            <div className="grid grid-cols-9 gap-36 mx-auto ml-24 mr-24">
            <ServicesCard number = "01" icon = {development} title = "Software Development" 
            description= "I apply my expertise in MERN and PERN stacks, enriched by my knowledge in DevOps practices and cloud services, to engineer robust full-stack digital solutions that elevate user experiences."
            ></ServicesCard>
            <ServicesCard number = "02" icon = {dataeng} title = "Data Engineering" 
            description= "Leveraging my knowledge in ETL, AWS, SAS and Azure, I design and implement scalable cloud-based solutions, optimizing data flow and storage to meet complex business requirements efficiently."
            ></ServicesCard>
            <ServicesCard number = "03" icon = {analysis} title = "Data Analysis" 
            description= "Utilizing my expertise in data analysis, I develop insightful dashboards and craft SQL queries, enabling data-driven decision-making by translating complex datasets into actionable intelligence."
            className="col-span-3"></ServicesCard>
            </div>
        </div>
    </div>
}