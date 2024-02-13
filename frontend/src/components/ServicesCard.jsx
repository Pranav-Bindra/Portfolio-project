export const ServicesCard = ({
    number,
    icon,
    title,
    description
}) => {
    return <div className=" pb-10 rounded-md bg-slate-500 border-emerald-300 border-2 text-left col-span-3 flex-col mt-6 hover:bg-emerald-300 cursor-pointer transition-colors duration-500"> 
                <div className="text-4xl opacity-25 text-right mr-5 hover:text-black">{number}</div> 
                <img className="h-12 w-12 ml-6" src = {icon}></img>
        <div className="text-black ml-6 mt-2">{title}</div>
        <hr class="h-px ml-6  bg-black border-0 dark:bg-gray-700"></hr>
        <div className="text-black text-sm ml-6 my-1">{description}</div>
    </div>

}