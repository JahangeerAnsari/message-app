import { getCurrentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db";
import { ChannelType, MemberRole } from "@prisma/client";
import { redirect } from "next/navigation";
import { ServerHeader } from "./server-header";

interface ServerSidebarProps{
    serverId:string
}
export const ServerSidebar = async({serverId}:ServerSidebarProps) =>{
    
    const profile = await getCurrentProfile();
    if(!profile){
        return redirect("/sign-in")
    }
    //display the channels with profile and with their role
    const server = await db.server.findFirst({
        where:{
            id:serverId,  
        },
        include:{
            channels:{
                orderBy:{
                    createdAt:"asc"
                }
            },
            members:{
                include:{
                    profile:true
                },
                orderBy:{
                    role:"asc"
                }
            }
        }
    });
    
    const textChannels = server?.channels.filter((channel) => channel.type === ChannelType.TEXT)
    const audioChannels = server?.channels.filter((channel) => channel.type === ChannelType.AUDIO);
    const videoChannels = server?.channels.filter((channel) => channel.type === ChannelType.VIDEO);
     //find others member not logeedin profile
     const otherMembers = server?.members.filter((member) => member.profileId ! == profile.id);

     if(!server){
        return redirect("/")
     }
     const role = server.members.find((member) => member.profileId === profile.id)?.role 
    
    return (
        <div className="flex flex-col h-full text-primary
         dark:bg-[#2B2D31] bg-[#F2F3F5]">
            <ServerHeader server={server} role={role}/>
        </div>
    )
}