import React from "react"
import Header from "../header/Header"

interface IChildren {
    children : React.ReactNode
}
const PrimaryLayout = ({children}:IChildren) => {
    return(
        <div className="flex flex-col gap-10">
            <Header />
            <div>
            {
                children
            }
            </div>
        </div>
    )
}

export default PrimaryLayout