"use client"
import { useRouter } from "next/navigation"

interface Loginbuttonprops{
    children: React.ReactNode,
    mode?: "modal"|"redirect",
    asChild?: boolean
}

export const Loginbutton = ({
    children,
    mode = "redirect",
    asChild
}:Loginbuttonprops) =>{
    const router  = useRouter()
    const onclick = ()=>{
        router.push('/auth/login')
    }
    return(
        <span onClick={onclick} className=" cursor-pointer">
            {children}
        </span>
    )
}