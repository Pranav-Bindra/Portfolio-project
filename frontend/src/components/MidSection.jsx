import AnimatedName from "../effects/pulseName"
import githubImg from "../assets/github (1).png"

export const MidSection = () => {
    return <div className="grid grid-rows-4 justify-center flex-col mt-28 ml-24 ">
        <div className="row-span-1 text-4xl text-white flex ml-16">
            <div>
                Hello World, I am
            </div>
            <AnimatedName></AnimatedName>
            <div className="text-xs">
                [The Code Whisperer]
            </div>
        </div>
        <div className="row-span-2 text-base mt-5 mr-3  text-white justify-items-center flex-col">
            <span>I speak fluent JavaScript by day, dream in python by night, and have been known to converse with databases over coffee.</span><br></br>
            <span className="pl-36">My superpower? Turning caffeine into code that solves real-world problems.</span>
        </div>
</div>
}