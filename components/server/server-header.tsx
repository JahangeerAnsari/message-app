"use client";
import { ServerWithMembersWithProfiles } from "@/types";
import { MemberRole, Server } from "@prisma/client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  ChevronDown,
  CirclePlus,
  LogOut,
  Settings,
  Trash,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";
import { useModalStore } from "@/hooks/use-modal-store";

interface ServerHeaderProps {
  //server does not have all others properties
  //server :Server,
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
}
export const ServerHeader = ({ server, role }: ServerHeaderProps) => {
    const {onOpen} = useModalStore();

  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <button
          className="w-full text-md font-semibold px-2 flex
         items-center h-12 border-neutral
         dark:border-neutral-800 border-b-2 hover:bg-zinc-700/7
         dark:hover:bg-zinc-700/50 transition"
        >
          {server.name}
          <ChevronDown className="ml-auto" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60" align="start">
        {isModerator && (
          <DropdownMenuItem onClick={() =>onOpen("invite",{server})}>
            Invite People
            <DropdownMenuShortcut>
              <UserRoundPlus className="h-5 w-5" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem>
            Server Setting
            <DropdownMenuShortcut>
              <Settings className="h-5 w-5" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem>
            Manage Members
            <DropdownMenuShortcut>
              <UsersRound className="h-5 w-5" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
        {isModerator &&  (
            <DropdownMenuItem>
          Create Channels
          <DropdownMenuShortcut>
            <CirclePlus className="h-5 w-5" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem className="text-rose-400">
            Delete Server
            <DropdownMenuShortcut>
              <Trash className="h-5 w-5 text-rose-400" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
        {!isAdmin && (
          <DropdownMenuItem>
            Leave Server
            <DropdownMenuShortcut>
              <LogOut className="h-5 w-5" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
