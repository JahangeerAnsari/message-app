"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Controller, useForm } from "react-hook-form";
import {  inviteFormSchema } from "../schema/form-schema";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useModalStore } from "@/hooks/use-modal-store";
import { Check, Copy, RefreshCcw } from "lucide-react";
import { useOrigin } from "@/hooks/use-origin";
import { useState } from "react";
import axios from "axios";
const InviteModal = () => {
  const {isOpen,onOpen,onClose,type,data} =useModalStore();
  const [copied,setCopied] = useState(false);
  const[isLoading,setIsLoading] =useState(false);
  const origin = useOrigin()
  const {server} =data
  const isModelOpen = isOpen && type ==="invite"
  const inviteUrl = `${origin}/invite/${server?.inviteCode}`
  
  const handleClsoeModal =() =>{
        onClose();
  }
  const onCopyInviteCode =() =>{
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
    setTimeout(() =>{
    setCopied(false)
    },1000)
  }
  const generateNewLink =async() =>{
    try {
        setIsLoading(true)
     const response = await axios.patch(`/api/servers/${server?.id}/invite-code`) ;
     console.log("response",response)
     //open the invte code modal and pass the data
     onOpen("invite",{server:response.data}) 
    } catch (error) {
      console.log("error on generate invite code",error)  
    } finally{
        setIsLoading(false)
    }
  }
  return (
    <Dialog open={isModelOpen} onOpenChange={handleClsoeModal}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
       <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Invite Modal
          </DialogTitle>
        </DialogHeader>
          <div className="flex items-center mt-2 gap-x-2">
            <Input className="bg-zinc-300/50 border-0 focus-visible:ring-0
             text-black
            focus-visible:ring-offset-0"
            value={inviteUrl}
            onChange={() =>{""}}
            />
          </div>
          <div className="flex items-center ">
            <Button size="icon" onClick={onCopyInviteCode}>
              {copied ? <Check className="h-4"/>:<Copy className="h-4"/>}
            </Button>
            <Button onClick={generateNewLink} variant="link" size="sm" className="text-xs text-zinc-500 mt-4">
             Generate a new link
             <RefreshCcw className="h-4 w-4"/>
            </Button>
          </div>
       
      </DialogContent>
    </Dialog>
  );
};

export default InviteModal;
