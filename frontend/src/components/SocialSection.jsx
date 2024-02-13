import github from '../assets/github (1).png'
import gmail from '../assets/gmail-logo.png'
import linkedin from '../assets/linkedin.png'

export const SocialSection = () => {
    return <div className='flex justify-center mb-30'>
        <button>
            <a href = "https://github.com/Pranav-Bindra" target="_blank">
                <img src = {github} className='bg-slate-500 h-12 w-12 rounded-md p-1 hover:bg-emerald-300 transition-colors duration-500'></img>
            </a>
        </button>
        <button>
            <a href = "mailto:pbindra1@asu.edu">
                <img src = {gmail} className='bg-slate-500 h-12 w-12 mr-16 ml-16 rounded-md p-1 hover:bg-emerald-300 transition-colors duration-500'></img>
            </a>
        </button>
        <button>
            <a href = "https://www.linkedin.com/in/pranav-bindra/" target = "_blank">
                <img src = {linkedin} className='bg-slate-500 h-12 w-12 rounded-md px-1 py-1 hover:bg-emerald-300 transition-colors duration-500'></img>
            </a>
        </button>
    </div>
}