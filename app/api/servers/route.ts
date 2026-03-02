import { getCurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { ChannelType, MemberRole } from "@prisma/client";
import { uuid } from 'uuidv4';
import { NextResponse } from "next/server";

export async function POST(req:Request){
    
    try {
        const {name,imageUrl} = await req.json();
        const profile = await getCurrentProfile();
        if(!profile){
             return new NextResponse("Unauthorized",{status:401})
        }
        const server = await db.server.create({data:{
            imageUrl,
            name,
            inviteCode:uuid(),
            profileId:profile.id,
            channels:{
            create:[{name:"general",profileId:profile.id}]
            },
            members:{
                create:[{profileId:profile.id,role:MemberRole.ADMIN}]
            }
        },}) 
        return NextResponse.json(server)
    } catch (error) {
    console.log("[SERVER_POST",error);
    return new NextResponse("Internal Error",{status:500})
    
    }
}