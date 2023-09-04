import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex-1 h-calcVH bg-slate-50 sticky top-[50px]">
      <div className="p-5 text-slate-500">
        <div className="mb-[10px]">
          <h3 className="text-sm text-slate-400">Dashboard</h3>
          <ul className=" list-none p-2">
            <Link to={`/`} className=" no-underline color-inherit">
              <li className="p-2 cursor-pointer flex items-center rounded-[10px] hover:bg-slate-600 hover:text-white active:bg-slate-600 active:text-white">
                <LineStyle className="!mr-[5px] !text-lg" />
                Home
              </li>
            </Link>
            <li className="p-2 cursor-pointer flex items-center rounded-[10px] hover:bg-slate-600 hover:text-white active:bg-slate-600 active:text-white">
              <Timeline className="!mr-[5px] !text-lg" />
              Analytics
            </li>
            <li className="p-2 cursor-pointer flex items-center rounded-[10px] hover:bg-slate-600 hover:text-white active:bg-slate-600 active:text-white">
              <TrendingUp className="!mr-[5px] !text-lg" />
              Sales
            </li>
          </ul>
        </div>
        <div className="mb-[10px]">
          <h3 className="text-sm text-slate-400">Quick Menu</h3>
          <ul className=" list-none p-2">
            <Link to={`/users`} className=" no-underline color-inherit">
              <li className="p-2 cursor-pointer flex items-center rounded-[10px] hover:bg-slate-600 hover:text-white active:bg-slate-600 active:text-white">
                <PermIdentity className="!mr-[5px] !text-lg" />
                Users
              </li>
            </Link>
            <Link to={`/products`}>
              <li className="p-2 cursor-pointer flex items-center rounded-[10px] hover:bg-slate-600 hover:text-white active:bg-slate-600 active:text-white">
                <Storefront className="!mr-[5px] !text-lg" />
                Products
              </li>
            </Link>
            <li className="p-2 cursor-pointer flex items-center rounded-[10px] hover:bg-slate-600 hover:text-white active:bg-slate-600 active:text-white">
              <AttachMoney className="!mr-[5px] !text-lg" />
              Transactions
            </li>
            <li className="p-2 cursor-pointer flex items-center rounded-[10px] hover:bg-slate-600 hover:text-white active:bg-slate-600 active:text-white">
              <BarChart className="!mr-[5px] !text-lg" />
              Reports
            </li>
          </ul>
        </div>
        <div className="mb-[10px]">
          <h3 className="text-sm text-slate-400">Notifications</h3>
          <ul className=" list-none p-2">
            <li className="p-2 cursor-pointer flex items-center rounded-[10px] hover:bg-slate-600 hover:text-white active:bg-slate-600 active:text-white">
              <MailOutline className="!mr-[5px] !text-lg" />
              Mail
            </li>
            <li className="p-2 cursor-pointer flex items-center rounded-[10px] hover:bg-slate-600 hover:text-white active:bg-slate-600 active:text-white">
              <DynamicFeed className="!mr-[5px] !text-lg" />
              Feedback
            </li>
            <li className="p-2 cursor-pointer flex items-center rounded-[10px] hover:bg-slate-600 hover:text-white active:bg-slate-600 active:text-white">
              <ChatBubbleOutline className="!mr-[5px] !text-lg" />
              Messages
            </li>
          </ul>
        </div>
        <div className="mb-[10px]">
          <h3 className="text-sm text-slate-400">Staff</h3>
          <ul className=" list-none p-2">
            <li className="p-2 cursor-pointer flex items-center rounded-[10px] hover:bg-slate-600 hover:text-white active:bg-slate-600 active:text-white">
              <WorkOutline className="!mr-[5px] !text-lg" />
              Manage
            </li>
            <li className="p-2 cursor-pointer flex items-center rounded-[10px] hover:bg-slate-600 hover:text-white active:bg-slate-600 active:text-white">
              <Timeline className="!mr-[5px] !text-lg" />
              Analytics
            </li>
            <li className="p-2 cursor-pointer flex items-center rounded-[10px] hover:bg-slate-600 hover:text-white active:bg-slate-600 active:text-white">
              <Report className="!mr-[5px] !text-lg" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
