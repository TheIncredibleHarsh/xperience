import { useState } from 'react'

const WelcomeScreen = ({handleLogon}) => {

    const [loggingIn, setLoggingIn] = useState(false)

    const handleLogOnClick = () => {
        setLoggingIn(true)
        setTimeout(() => {
            handleLogon()
        }, 1000)
    }

    return (
        <div class="h-screen w-screen bg-[#5c7ddc] flex flex-col z-50 fixed top-0 left-0">
            <div class="bg-[#00319e] h-1/6"></div>
            <div class="bg-[#5c7ddc] h-2/3 flex flex-row justify-between">
                <div class="flex flex-col justify-center items-end h-full w-1/2 px-10">
                    <div class="w-64">
                        <img src="logo.png" height="100" class="object-scale-down"></img>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <span class="text-white text-2xl">To begin, click your username</span>
                    </div>
                </div>
                <div class="w-[2px] h-full 
                            bg-gradient-to-b from-[#5c7ddc] via-slate-400 to-[#5c7ddc]">
                </div>
                <div class="flex flex-row items-center h-full w-1/2 px-2">
                    <div class="w-full px-20 py-4 rounded-xl hover:bg-[#00319e]">
                        <div class="flex flex-row items-start" onClick={handleLogOnClick}>
                            <div class="w-24 border-4 rounded-lg">
                                <img src="profile.webp" alt="" />
                            </div>
                            <div class="flex flex-col justify-center px-4">
                                <span class="text-white text-3xl">Administrator</span>
                                {loggingIn && <span class="text-white text-xl">Loading your personal settings...</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-[#00319e] h-1/6 flex flex-row">
                <div class="w-1/2 h-full flex flex-row items-center px-20">
                    <div class="w-12 border bg-white rounded-lg">
                        <img src="shutdown.png" alt="" />
                    </div>
                    <div class="px-4">
                        <span class="text-white text-2xl">Turn Off Computer</span>
                    </div>
                </div>
                <div class="w-1/2 h-full flex flex-col justify-center items-end px-20">
                    <div class="">
                        <span class="text-white text-xl">After you log on, you can add or change accounts.</span>
                    </div>
                    <div class="px-4">
                        <span class="text-white text-xl">Just go to Control Panel and click User Accounts</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeScreen