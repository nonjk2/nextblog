import { FC } from "react";

export interface BannerData {
  message: string;
  state: "success" | "error";
}

const Banner: FC<BannerData> = (props) => {
  const { message, state } = props;
  const isSuccess = state === "success";
  const icon = !isSuccess ? "🟥" : "😄";
  return (
    <p
      className={`p-2 rounded-xl w-full text-center
    ${isSuccess ? "bg-green-300" : "bg-red-300"}`}
    >
      {icon}
      {message}
    </p>
  );
};
export default Banner;
