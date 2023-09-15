import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface IUser {
  id: number;
  userName: string;
  avatar: string;
  email: string;
  status: string;
  isAdmin: boolean;
}

const User: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    async function getUser() {
      const { data }: AxiosResponse<IUser> = await axios.get(
        `http://localhost:8080/api/user/${id}`
      );
      setUser(data);
    }
    getUser();
  }, []);

  const updateUserHandler = () => {};
  return (
    <div className="flex-4 p-5">
      <div className="flex items-center justify-between">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="w-20 border-0 p-1 bg-teal-500 rounded-md cursor-pointer text-white text-base">
            Create
          </button>
        </Link>
      </div>
      <div className="flex mt-5">
        <div className="flex-1 p-5 shadow-featuredInfoBoxShadow">
          <div className="flex items-center">
            <img
              src={user?.avatar}
              alt=""
              className="w-10 h-10 rounded-full object-cover object-center"
            />
            <div className="flex flex-col ml-5">
              <span className="font-semibold">Anna Beckerr</span>
              <span className="font-light">Software Engineer</span>
            </div>
          </div>
          <div className="mt-5">
            <span className="text-sm font-semibold text-gray-400">
              Account Details
            </span>
            <div className="flex items-center my-5 mx-0 text-gray-700">
              <PermIdentity className="!text-base" />
              <span className="ml-2.5">{user?.userName}</span>
            </div>
            <div className="flex items-center my-5 mx-0 text-gray-700">
              <CalendarToday className="!text-base" />
              <span className="ml-2.5">10.12.1999</span>
            </div>
            <span className="text-sm font-semibold text-gray-400">
              Contact Details
            </span>
            <div className="flex items-center my-5 mx-0 text-gray-700">
              <PhoneAndroid className="!text-base" />
              <span className="ml-2.5">+1 123 456 67</span>
            </div>
            <div className="flex items-center my-5 mx-0 text-gray-700">
              <MailOutline className="!text-base" />
              <span className="ml-2.5">{user?.email}</span>
            </div>
            <div className="flex items-center my-5 mx-0 text-gray-700">
              <LocationSearching className="!text-base" />
              <span className="ml-2.5">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="flex-2 p-5 shadow-featuredInfoBoxShadow ml-5">
          <span className="text-2xl font-semibold">Edit</span>
          <form className="flex justify-between mt-5">
            <div className="userUpdateLeft">
              <div className="flex flex-col mt-2.5">
                <label className="mb-1.5 text-sm">Username</label>
                <input
                  type="text"
                  placeholder={user?.userName}
                  className="border-0 w-64 h-8 border-b border-gray-500"
                />
              </div>
              <div className="flex flex-col mt-2.5">
                <label className="mb-1.5 text-sm">Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="border-0 w-64 h-8 border-b border-gray-500"
                />
              </div>
              <div className="flex flex-col mt-2.5">
                <label className="mb-1.5 text-sm">Email</label>
                <input
                  type="text"
                  placeholder={user?.email}
                  className="border-0 w-64 h-8 border-b border-gray-500"
                />
              </div>
              <div className="flex flex-col mt-2.5">
                <label className="mb-1.5 text-sm">Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="border-0 w-64 h-8 border-b border-gray-500"
                />
              </div>
              <div className="flex flex-col mt-2.5">
                <label className="mb-1.5 text-sm">Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="border-0 w-64 h-8 border-b border-gray-500"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center">
                <img
                  className=" w-24 h-24 rounded-lg object-cover mr-5"
                  src={user?.avatar}
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="cursor-pointer" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button
                onClick={updateUserHandler}
                className="rounded border-0 p-5 cursor-pointer bg-blue-800 text-white font-semibold"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default User;
