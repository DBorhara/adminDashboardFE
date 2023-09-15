import React, { useEffect, useState } from "react";
import axios from "axios";
import { Visibility } from "@mui/icons-material";

interface IUser {
  id: number;
  userName: string;
  avatar: string;
  email: string;
  status: string;
  isAdmin: boolean;
}

const WidgetSm: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function lastFourUsers() {
      const { data } = await axios.get(
        "http://localhost:8080/api/user/lastFour"
      );
      setUsers(data);
    }
    lastFourUsers();
  }, []);
  return (
    <div className="flex-1 shadow-featuredInfoBoxShadow p-5 mr-5">
      <span className="text-2xl font-semibold">New Members</span>
      <ul className="m-0 p-0 list-none">
        {users.map((user) => {
          return (
            <li
              key={user.id}
              className="flex items-center justify-between my-5 mx-0"
            >
              <img
                src={user.avatar}
                alt="profile photo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col ml-0 w-48">
                <span className="font-semibold truncate">{user.userName}</span>
                <span className="font-light truncate">{user.email}</span>{" "}
              </div>
              <button className="flex items-center border-none rounded-lg py-1.5 px-2.5 bg-blue-200 text-gray-500 cursor-pointer">
                <Visibility className="text-lg mr-[5px]" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WidgetSm;
