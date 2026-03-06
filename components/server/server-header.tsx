import { ServerWithMembersWithProfiles } from "@/types";
import { MemberRole, Server } from "@prisma/client"

interface ServerHeaderProps{
    //server does not have all others properties 
    //server :Server,
    server :ServerWithMembersWithProfiles,
    role?:MemberRole ;
}
export const ServerHeader =({server,role}:ServerHeaderProps) =>{
    
    return (
        <div>header serv</div>
    )
}