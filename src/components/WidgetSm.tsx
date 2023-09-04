import { Visibility } from "@mui/icons-material";

export default function WidgetSm() {
  return (
    <div className="flex-1 shadow-featuredInfoBoxShadow p-5 mr-5">
      <span className="text-2xl font-semibold">New Members</span>
      <ul className="m-0 p-0 list-none">
        <li className="flex items-center justify-between my-5 mx-0">
          <img
            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            alt="profile photo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-semibold">Stacey Johnson</span>
            <span className="font-light">Software Engineer</span>
          </div>
          <button className="flex items-center border-none rounded-lg py-1.5 px-2.5 bg-blue-200 text-gray-500 cursor-pointer">
            <Visibility className="text-lg mr-[5px]" />
            Display
          </button>
        </li>
        <li className="flex items-center justify-between my-5 mx-0">
          <img
            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            alt="profile photo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="username">Stacey Johnson</span>
            <span className="jobTitle">Software Engineer</span>
          </div>
          <button className="flex items-center border-none rounded-lg py-1.5 px-2.5 bg-blue-200 text-gray-500 cursor-pointer">
            <Visibility className="text-lg mr-[5px]" />
            Display
          </button>
        </li>
        <li className="flex items-center justify-between my-5 mx-0">
          <img
            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            alt="profile photo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="username">Stacey Johnson</span>
            <span className="jobTitle">Software Engineer</span>
          </div>
          <button className="flex items-center border-none rounded-lg py-1.5 px-2.5 bg-blue-200 text-gray-500 cursor-pointer">
            <Visibility className="text-lg mr-[5px]" />
            Display
          </button>
        </li>
        <li className="flex items-center justify-between my-5 mx-0">
          <img
            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
            alt="profile photo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="username">Stacey Johnson</span>
            <span className="jobTitle">Software Engineer</span>
          </div>
          <button className="flex items-center border-none rounded-lg py-1.5 px-2.5 bg-blue-200 text-gray-500 cursor-pointer">
            <Visibility className="text-lg mr-[5px]" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
