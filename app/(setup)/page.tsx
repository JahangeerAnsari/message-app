import { initialProfile } from "@/lib/initial-profile";

const SetupPage =async () => {
    const profile = await initialProfile();
    console.log("profile===>",profile);
    
    
}
 
export default SetupPage;