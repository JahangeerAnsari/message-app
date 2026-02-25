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
} from "@/components/ui/field"
import {  Controller, useForm } from "react-hook-form";
import { initialFormSchema } from "../schema/form-schema";
import z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const InitialModal = () => {
  const form = useForm({
    resolver: zodResolver(initialFormSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values:z.infer<typeof initialFormSchema>) =>{
    console.log("values",values);
    
  }
  
  return (
    <Dialog open>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Customize your server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Give your server a personality with a name and image ,you can always
            update it later.
          </DialogDescription>
          </DialogHeader>
          
           
      <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-8 px-6">
          <div className="flex items-center justify-center text-center">
              UPLOAD IMAGE
          </div>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field,fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70" htmlFor="form-rhf-input-username">
                    Server Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-input-username"
                    aria-invalid={fieldState.invalid}
                    placeholder="enter server name"
                   className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </div>
          <DialogFooter className="bg-gray px-6 py-4">
<Button variant="primary" disabled={isLoading} type="submit">Create</Button>
          </DialogFooter>
          
        </form>
      
        
        
      </DialogContent>
    </Dialog>
  );
};

export default InitialModal;
