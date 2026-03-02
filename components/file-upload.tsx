"use client";
import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";
import { X } from 'lucide-react';
import { Button } from "./ui/button";

interface FileUploadProps{
    endpoint:"serverImage" | "messageFile";
    value:string;
    onChange:(url:string) =>void;
}
export const FileUpload = ({endpoint,value,onChange}:FileUploadProps) =>{
  
    const  file = value.split(".").pop() ;
    if(value && file !== "pdf"){
      return (
  <div className="flex items-center justify-center">
    <div className="w-20 h-20 relative">
      <Image
        src={value}
        alt="server-image"
        fill
        className="rounded-full object-cover"
      />
      <Button onClick={() =>onChange("")} className="mt-[-15] absolute bg-transparent">
        <X size={30} color="red" strokeWidth={3} /> 
      </Button>
      
    </div>
  </div>
)
    }

    return(
       <UploadButton
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          onChange(res?.[0].url)
          
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    )
}