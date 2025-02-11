import { useRouter } from "next/router"
import Image from 'next/image'

import { useState, useEffect } from "react"

import Profile from '../components/Profile'
import Network from '../components/Network'

import data from '../data/users.json'


const profile = () => {
    const [component, setComponent] = useState(0)

    const router = useRouter();
    const { profile } = router.query;

    // const matchUser = () => {
    //     for(let i = 0; i < data.length; i++) {
    //         if(profile === data[i]["First Name"] + " " +data[i]["Last Name"]) {
    //             setUser(data[i])
    //             break
    //         }       
    //     }
    // }

    // useEffect(() => {
    //     matchUser()
    // }, [])

    return (
        <div className="profileMain">
            <div className="profileImage">
                <div>
                    <Image 
                        src = '/i1.png'
                        alt = 'Profile Picture'
                        height = {100}
                        width = {100}
                        className="rounded-full"
                    />
                </div>
                
                <div className="profileDetails">
                    <h1 className="profileName">{profile}</h1>
                    <div>Student, Class of 2023</div>
                    <div>B.Tech, Computer Science & Engineering</div>
                    <div className="profileInfo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        <div className="text-red-700">Unauthenticated User</div>
                    </div>
                    <div className="profileInfoButton">
                        <button
                            onClick = {() => setComponent(0)}
                            className = {`px-2 ${component === 0 ? "profileButtonsComponent" : ""}`}
                        >
                                Profile
                        </button>
                        
                        <button 
                            onClick = {() => setComponent(1)}
                            className = {`px-2 ${component === 1 ? "profileButtonsComponent" : ""}`}
                        >
                            Network
                        </button>
                    </div>
                </div>
            </div>

            <div className="py-12">
                {component === 0 && <Profile />}
                {component === 1 && <Network />}
            </div>
        </div>
    )
}   

export default profile