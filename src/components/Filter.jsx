import { Form, Link } from "react-router-dom"
import FormInput from "./FormInput"

const Filter = () => {
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput label={"Search Product"} type={"text"} size={"input-sm"} />

      {/* Buttons */}
      <button type="submit" className="btn btn-primary btn-sm rounded-lg">SEARCH</button>
      <Link to={"/products"} className="btn btn-secondary rounded-lg btn-sm">RESET</Link>
    </Form>
  )
}

export default Filter
