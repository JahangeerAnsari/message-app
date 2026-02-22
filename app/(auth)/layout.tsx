interface AuthLayoutProps{
    children:React.ReactNode
}
 const AuthLayout =({children}:AuthLayoutProps) =>{
    return(
        <div className="bg-red-400 w-full h-full">
            {children}
        </div>
    )
}
export default AuthLayout;