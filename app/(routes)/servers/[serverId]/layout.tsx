import { ServerSidebar } from "@/components/server/server-sidebar";
import { getCurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface ServerIdLayoutProps {
  children: React.ReactNode;
 params:Promise<{
        serverId:string
    }>
   
}

const ServerIdLayout = async ({
  children,
  params,
}: ServerIdLayoutProps) => {

  const profile = await getCurrentProfile();

  if (!profile) {
    return redirect("/sign-in");
  }

  const serverId = (await params).serverId;

  const server = await db.server.findFirst({
    where: {
      id: (await params).serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (!server) {
    return redirect("/");
  }

  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <ServerSidebar serverId={serverId}/>
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
};

export default ServerIdLayout;