
interface ServerIdPageProps{
    params:Promise<{
        serverId:string
    }>
}
const ServerIdPage =async ({params}:ServerIdPageProps) => {
    const {serverId} = await params
    
    return ( 
        <div>
           test {serverId}
        </div>
     );
}
 
export default ServerIdPage;