const list1 = [
   {icon: "internet.png",   text: "Internet",   subtext: "Internet Explorer"},
   {icon: "email.ico",     text: "E-Mail",     subtext: "Outlook Express"},
   {type: 'hr'},
   {icon: "mp.png",   text: null,           subtext: "Windows Media Player"},
   {icon: "msn.ico",   text: null,           subtext: "MSN Explore"},
   {icon: "movie-maker.png",      text: null,           subtext: "Windows Movie Maker"},
   {icon: "tour.png",     text: null,           subtext: "Tour Windows XP"},
   {icon: "transfer.ico",     text: null,           subtext: "Files and Settings Transfer wizard"},
]

const list2 = [
    {icon: "my-doc.ico",   text: "My Documents",   subtext: null},
    {icon: "recent.ico",     text: "My Recent Documents",     subtext: null},
    {icon: "my-pic.ico",   text: "My Pictures",           subtext: null},
    {icon: "my-music.ico",   text: "My Music",           subtext: null},
    {icon: "my-computer.png",      text: "My Computer",           subtext: null},
    {type: 'hr'},
    {icon: "c-panel.ico",     text: null,           subtext: "Control Panel"},
    {icon: "connect.png",     text: null,           subtext: "Connect To"},
    {icon: "printer.ico",      text: null,           subtext: "Printers and Faxes"},
    {icon: "help.ico",      text: null,           subtext: "Help and Support"},
    {icon: "search.ico",      text: null,           subtext: "Search"},
    {icon: "run.ico",      text: null,           subtext: "Run..."},
 ]

const StartMenu = () => {
  return (
    <div class="h-[600px] w-[500px] absolute bottom-9 left-0 bg-white z-50 
                flex flex-col justify-between border-2 border-[#245ddb] rounded-t-xl
                hover:cursor-not-allowed">
      <div class="flex flex-row items-center bg-[#245ddb] h-[90px] z-50 px-4">

            <div class="flex flex-row items-start">
                <div class="w-12 border-[2px] rounded-lg overflow-hidden">
                    <img src="profile.webp" alt="" />
                </div>
                <div class="flex flex-col justify-center px-4">
                    <span class="text-white text-xl">Administrator</span>
                </div>
            </div>
      </div>
      <div class="flex flex-row z-50 h-full"> 
        <div class="flex flex-col w-1/2 h-full justify-between">
            <div class="flex flex-col z-50 bg-[#fefefb] gap-y-1">
                {generateStartMenuList(list1)}
            </div>
            <div class="flex flex-col gap-y-2 justify-center items-center h-[75px]">
                <div class="h-[1px] bg-gradient-to-r from-[rgba(0,0,0,0)] via-gray-400 to-[rgba(0,0,0,0)] w-full"></div>
                <div class="flex flex-row items-center">
                    <span class="font-semibold">All Programs</span>
                    <div class="w-9 rounded-lg px-2">
                        <img src={"carat.ico"} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col z-50 w-1/2 h-full bg-[#d7e7ff] gap-y-1">
            {generateStartMenuList(list2)}
        </div>
      </div>
      <div class="flex flex-row items-center justify-end bg-[#245ddb] h-[50px] z-50">
        <div class="h-full flex flex-row items-center">
        <div class="w-7 border bg-white rounded-lg overflow-hidden">
                <img src="/log-off.jpg" alt="" />
            </div>
            <div class="px-2">
                <span class="text-white text-sm">Log Off</span>
            </div>
            <div class="w-7 border bg-white rounded-lg overflow-hidden">
                <img src="shutdown.png" alt="" />
            </div>
            <div class="px-2">
                <span class="text-white text-sm">Shut Down</span>
            </div>
        </div>
      </div>
    </div>
  )
}

const generateStartMenuList = (list) => {
  return list.map((item, index) => {
    return <StartMenuListItem key={index} {...item} />
  })
}

const StartMenuListItem = ({ icon, text, subtext, onClick, type }) => {

  if (type === 'hr') {
    return (
      <div class="h-[1px] bg-gradient-to-r from-[rgba(0,0,0,0)] via-gray-400 to-[rgba(0,0,0,0)] w-full"></div>
    )
  }
  return (
    <div class="flex flex-row items-center h-[40px] px-2 hover:bg-[#245ddb] hover:text-white">
      <div class="w-9 rounded-lg">
          <img src={icon} alt="" />
      </div>
      <div class="px-2 flex flex-col">
          {text && <span class="text-slate-800 text-sm font-semibold">{text}</span>}
          <span class="text-slate-800 text-sm font-medium">{subtext}</span>
      </div>
    </div>
  )
}

export default StartMenu