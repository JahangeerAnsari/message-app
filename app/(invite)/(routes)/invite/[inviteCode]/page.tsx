import { getCurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface InviteCodeProps{
    params:Promise<{
        inviteCode:string
    }>
}
export const InviteCodePage =async ({params}:InviteCodeProps) => {
    const profile = await getCurrentProfile();
     const inviteCode = (await params).inviteCode;
    if(!profile){
        return redirect("/sign-in");
    }
    
    //if dont have invite code redirect to the homepage
     if(!inviteCode){
        return redirect("/")
     }
     //let check if the user is part of existing server
     const existingServer = await db.server.findUnique({
        where:{
            inviteCode:inviteCode,
            members:{
                some:{
                    profileId:profile.id
                }
            }
        }
     })
     if(existingServer){
        return redirect(`/servers/${existingServer.id}`)
     }
     //join new servers
     const joinServer =await db.server.update({
        where:{
            inviteCode:inviteCode
        },
        //new member update
        data:{
            members:{
                create:[
                    {profileId:profile.id}
                ]
            }
        }
     })
     if(joinServer){
        return redirect(`/servers/${joinServer.id}`)
     }

    return ( 
   <div>{inviteCode} from params</div>
     );
}
 
export default InviteCodePage;