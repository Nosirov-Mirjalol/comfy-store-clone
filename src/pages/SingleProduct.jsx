import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =(queryClient) => async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );

    return { product: response.data.data };
  };
const SingleProduct = () => {
  const {product}=useLoaderData
  console.log(product);
  
  return <h3>SingleProduct</h3>;
};

export default SingleProduct;
