export default function NewProduct() {
  return (
    <div className="flex-4 p-5">
      <h1 className="text-2xl font-bold mb-4">New Product</h1>
      <form className="mt-2.5">
        <div className="w-64 flex flex-col mb-2.5">
          <label className="text-gray-500 font-semibold mb-2.5">Image</label>
          <input type="file" id="file" className="p-2.5" />
        </div>
        <div className="w-64 flex flex-col mb-2.5">
          <label className="text-gray-500 font-semibold mb-2.5">Name</label>
          <input
            className="h-10 p-2.5 border border-gray-400 rounded-md"
            type="text"
            placeholder="Apple Airpods"
          />
        </div>
        <div className="w-64 flex flex-col mb-2.5">
          <label className="text-gray-500 font-semibold mb-2.5">Stock</label>
          <input
            className="h-10 p-2.5 border border-gray-400 rounded-md"
            type="text"
            placeholder="123"
          />
        </div>
        <div className="w-64 flex flex-col mb-2.5">
          <label className="text-gray-500 font-semibold mb-2.5">Active</label>
          <select name="active" id="active" className="h-10 rounded-md p-2.5">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="w-52 border-0 bg-blue-900 text-white py-2 px-2.5 font-semibold rounded-lg mt-8 cursor-pointer">
          Create
        </button>
      </form>
    </div>
  );
}
