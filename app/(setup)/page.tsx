import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

import InitialModal from "@/components/modals/create-server-modal";

const SetupPage = async () => {
  const profile = await initialProfile();
  //server has member
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  if (server) {
    redirect(`/servers/${server.id}`);
  }

  return <InitialModal />;
};

export default SetupPage;
