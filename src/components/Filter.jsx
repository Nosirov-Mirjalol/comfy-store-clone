import { Form, Link, useLoaderData } from "react-router"
import FormInput from "./FormInput"
import FormSelect from './FormSelect'
import FormRange from "./FormRange"
import FormCheckbox from "./FormCheckbox"

const Filter = () => {
  const {meta,params}=useLoaderData()
	const { category, company, order, price, search, shipping } = params

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput name={"search"} label={"Search Product"} type={"search"} size={"input-sm"} />
      <FormSelect defaultValue={category} label="Select Category" name={"category"} size={"select-sm rounded-lg"} list={meta.categories}  />
      <FormSelect defaultValue={company} label="Select Company" name={"company"} size={"select-sm rounded-lg"} list={meta.companies}  />
      <FormSelect defaultValue={order} label="Sort by" name={"order"} size={"select-sm rounded-lg"} list={["a-z","z-a","high","low"]}  />
      {/* range */}
      <FormRange label={'Select Price'} name={'price'} size={'range-sm'} />
      <FormCheckbox name={"shipping"} label={"Free Shipping"} size={'checkbox-sm'} defaultValue={false} />
      {/* Buttons */}
      <button type="submit" className="btn btn-primary btn-sm rounded-lg">SEARCH</button>
      <Link to={"/products"} className="btn btn-secondary rounded-lg btn-sm">RESET</Link>
    </Form>
  )
}

export default Filter
