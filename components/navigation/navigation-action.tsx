"use client";
import ActionToolTip from "../action-tooltip";
import { Plus } from "lucide-react";
import { useModalStore } from "@/hooks/use-modal-store";

ActionToolTip;
export const NavigationAction = () => {
  const { onOpen } = useModalStore();

  return (
    <ActionToolTip label="Add a Server" align="center" side="right">
      <button type="button" className="group flex items-center" onClick={() => onOpen("createServer")}>
        <div
          className="flex mx-3 h-12 w-12 rounded-[24px] group-hover:rounded-4 transition-all
        overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500"
        >
          <Plus
           
            size={25}
            className="group-hover:text-white transition text-emerald-500"
          />
        </div>
      </button>
    </ActionToolTip>
  );
};
