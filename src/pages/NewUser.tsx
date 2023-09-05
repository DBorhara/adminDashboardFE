export default function NewUser() {
  return (
    <div className="flex-4">
      <h1 className="text-2xl font-bold mb-4">New User</h1>
      <form className="grid grid-cols-2">
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-sm font-semibold text-gray-600">
            Username
          </label>
          <input
            type="text"
            placeholder="john"
            className="h-5 p-2.5 border border-gray-400 rounded-md"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-sm font-semibold text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Smith"
            className="h-5 p-2.5 border border-gray-400 rounded-md"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-sm font-semibold text-gray-600">
            Email
          </label>
          <input
            type="email"
            placeholder="john@gmail.com"
            className="h-5 p-2.5 border border-gray-400 rounded-md"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-sm font-semibold text-gray-600">
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            className="h-5 p-2.5 border border-gray-400 rounded-md"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-sm font-semibold text-gray-600">
            Phone
          </label>
          <input
            type="text"
            placeholder="+1 123 456 78"
            className="h-5 p-2.5 border border-gray-400 rounded-md"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-sm font-semibold text-gray-600">
            Address
          </label>
          <input
            type="text"
            placeholder="New York | USA"
            className="h-5 p-2.5 border border-gray-400 rounded-md"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-sm font-semibold text-gray-600">
            Gender
          </label>
          <div className="space-y-3.5">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male" className="m-2.5 text-lg text-gray-700">
              Male
            </label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female" className="m-2.5 text-lg text-gray-700">
              Female
            </label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other" className="m-2.5 text-lg text-gray-700">
              Other
            </label>
          </div>
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-sm font-semibold text-gray-600">
            Active
          </label>
          <select name="active" id="active" className="h-10 rounded-md">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-sm font-semibold text-gray-600">
            Admin
          </label>
          <select
            name="active"
            id="active"
            defaultValue={`no`}
            className="h-10 rounded-md"
          >
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
