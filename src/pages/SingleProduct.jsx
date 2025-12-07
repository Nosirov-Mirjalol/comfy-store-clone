import { useLoaderData, Link } from "react-router";
import { formatPrice, customFetch, generateAmountOptions } from "../utils";
import { useState } from "react";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );

    return { product: response.data.data };
  };
const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, colors, company, description, price, title } =
    product.attributes;
  const formationPrice = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount]=useState(1)

  const handleAmount = (e) => {
		setAmount(parseInt(e.target.value))
	}

  return (
    <section>
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>
      </div>
      <div className="card mt-7 grid lg:grid-cols-2 gap-x-10">
        <div className="">
          <img
            className="w-full lg:w-[700px] rounded-2xl"
            src={image}
            alt="image"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-xl text-neutral-content my-2">{company}</p>
          <p className="text-xl">{formationPrice}</p>
          <p className="tracking-widest leading-8 py-3">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge rounded-4xl w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    } cursor-pointer`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  >
                    {" "}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control w-full max-w-xs mt-2">
            <label className="label" htmlFor="amount">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className=" select select-secondary select-bordered select-md mt-2"
              value={amount}
              onChange={handleAmount}
              id="amount"
            >
              {generateAmountOptions(20)}
            </select>
          </div>
          <div className="my-10">
            <button className="btn btn-secondary btn-md">Add to bag</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
