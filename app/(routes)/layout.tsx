import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

interface ServerLayoutProps{
    children:React.ReactNode
}
const ServerMainLayout = ({children}:ServerLayoutProps) => {
    return (  
        <div className="h-full">
         <div className="hidden md:flex h-full w-18 z-30 flex-col fixed inset-y-0">
             <NavigationSidebar/>
         </div>
         
         <div className="md:pl-18 h-full">
            {children}
         </div>
        </div>
    );
}
 
export default ServerMainLayout;