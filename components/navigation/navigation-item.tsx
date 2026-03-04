"use client";
import Image from "next/image";
import ActionToolTip from "../action-tooltip";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";

interface NavigationItemProps {
  name: string;
  image: string;
  id: string;
}
export const NavigationItem = ({ id, image, name }: NavigationItemProps) => {
    const params = useParams();
    const router = useRouter();
    const handleNavigationServer =() =>{
        router.push(`/servers/${id}`)
    }
  return (
    <ActionToolTip label={name} side="right">
      <button  onClick={handleNavigationServer} className="group relative flex items-center">
        <div className={cn("absolute left-0 bg-primary rounded-full transiton-all w-1",
            params.serverId !==id && "group-hover:h-5",
            params.serverId === id ? "h-9" : "h-2"
        )}/>
        <div  className={cn("relative group flex mx-3 h-12 w-12 rounded-[24px] group-hover:rounded- transition-all overflow-hidden",
            params.serverId === id && "bg-primary text-primary rounded-[24px]"
        )}>
         <Image src={image} fill alt="channel"/>
        </div>
      </button>
      
    </ActionToolTip>
  );
};
