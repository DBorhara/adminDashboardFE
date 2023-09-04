import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../dummydata";
import { Publish } from "@mui/icons-material";

export default function Product() {
  return (
    <div className="flex-4 p-5">
      <div className="flex items-center justify-between">
        <div className="title">Product</div>
        <Link to="/newProduct">
          <button className="w-20 border-0 p-1 bg-teal-500 text-white rounded-md text-base cursor-pointer">
            Create
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2">
        <div className="topLeft">
          <Chart
            grid
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
          />
        </div>
        <div className="p-5 m-5 shadow-featuredInfoBoxShadow">
          <div className="flex items-center">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Product Image"
              className="w-10 h-10 rounded-full object-cover mr-5"
            />
            <span className="font-semibold">Apple Airpods</span>
          </div>
          <div className="mt-2.5">
            <div className="w-40 flex justify-between">
              <span className="productInfoKey">ID:</span>
              <span className="font-light">123</span>
            </div>
            <div className="w-40 flex justify-between">
              <span className="productInfoKey">Sales:</span>
              <span className="font-light">3123</span>
            </div>
            <div className="w-40 flex justify-between">
              <span className="productInfoKey">Active:</span>
              <span className="font-light">Yes</span>
            </div>
            <div className="w-40 flex justify-between">
              <span className="productInfoKey">In Stock:</span>
              <span className="font-light">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 m-5 shadow-featuredInfoBoxShadow">
        <form className="flex justify-between">
          <div className="flex flex-col">
            <label className="mb-2.5 text-gray-400">Product Name</label>
            <input
              className="mb-2.5 border-0 p-1 border-b border-gray-400"
              type="text"
              placeholder="Apple AirPods"
            />
            <label className="mb-2.5 text-gray-400">In Stock</label>
            <select className="mb-2.5" name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label className="mb-2.5 text-gray-400">Active</label>
            <select className="mb-2.5" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex flex-col justify-around">
            <div className="flex items-center ">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="w-24 h-24 rounded-xl object-cover mr-4"
              />
              <label className="mb-2.5 text-gray-400" htmlFor="file">
                <Publish />
              </label>
              <input
                className="mb-2.5 border-0 p-1 border-b border-gray-400"
                type="file"
                id="file"
                style={{ display: "none" }}
              />
            </div>
            <button className="border-0 p-1 rounded-md bg-blue-700 text-white font-semibold cursor-pointer">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
