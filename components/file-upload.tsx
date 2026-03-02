"use client";
import { UploadButton } from "@/lib/uploadthing";

interface FileUploadProps{
    endpoint:"serverImage" | "messageFile";
    value:string;
    onChange:(url:string) =>void;
}
export const FileUpload = ({endpoint,value,onChange}:FileUploadProps) =>{
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