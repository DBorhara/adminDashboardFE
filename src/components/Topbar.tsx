import { Language, NotificationsNone, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="w-full h-12 bg-white sticky top-0 z-50">
      <div className="h-full py-0 px-5 flex items-center justify-between">
        <div>
          <span className="font-bold text-3xl text-blue-600 cursor-pointer">
            Control Tower
          </span>
        </div>
        <div className="flex items-center">
          <div className="relative cursor-pointer mr-3 text-slate-500">
            <NotificationsNone />
            <span className="w-3.5 h-3.5 absolute -top-1.5 right-0 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
              2
            </span>
          </div>
          <div className="relative cursor-pointer mr-3 text-slate-500">
            <Language />
            <span className="w-3.5 h-3.5 absolute -top-1.5 right-0 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
              2
            </span>
          </div>
          <div className="relative cursor-pointer mr-3 text-slate-500">
            <Settings />
          </div>
          <img
            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            alt=""
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
