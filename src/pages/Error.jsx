import { useRouteError,Link } from "react-router-dom"
const Error = () => {
  const error=useRouteError()
  if(error.status===404){
    return (
    <main className="min-h-screen w-full flex justify-center items-center flex-col">
      <h2 className="text-[250px] text-primary font-semibold">404</h2>
      <p className="text-2xl font-semibold">page not found</p>
      <div className="mt-10">
        <Link to={"/"} className="btn btn-primary uppercase">Go back home</Link>
      </div>
    </main>
  )
  }
}

export default Error
