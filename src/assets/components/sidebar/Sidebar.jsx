import React from 'react'
import sublinks from '../../Data'
import {useGlobalContext} from "../../Context"
function Sidebar() {
    const {isSidebarOpen,closeSidebar}=useGlobalContext()
  return (
    <aside className={`${isSidebarOpen ?"sidebar-wrapper show":"sidebar-wrapper"}`}>
        <div className="sidebar">
            <button className='close-btn' onClick={closeSidebar}><i className="fa-sharp fa-solid fa-xmark"></i></button>
        <div className="sidebar-links">
            {sublinks.map((item,index)=>{
                const {links,page} =item
                return(
                    <article key={index}>
                        <h4>{page}</h4>
                        <div className="sidebar-sublinks">
                            {links.map((link,index)=>{
                                const {label,icon,url}=link
                                return(
                                   <a key={index} href={url}>
                                    {icon}
                                    {label}
                                   </a>
                                    
                                )
                            })}
                        </div>
                    </article>
                    
                )
            })}
        </div>
        </div>
    </aside>
  )
}

export default Sidebar