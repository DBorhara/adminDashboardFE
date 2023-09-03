import { LineStyle, Timeline, TrendingUp } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="flex-1 h-calcVH bg-slate-50 sticky top-[50px]">
      <div className="p-5 text-slate-500">
        <div className="mb-[10px]">
          <h3 className="text-sm text-slate-400">Dashboard</h3>
          <ul className=" list-none p-2">
            <li className="p-2 cursor-pointer flex items-center rounded-[10px] hover:bg-slate-600 hover:text-white active:bg-slate-600 active:text-white">
              <LineStyle className="!mr-[5px] !text-lg" />
              Home
            </li>
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
      </div>
    </div>
  );
}
