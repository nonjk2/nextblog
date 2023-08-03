import { EmailData } from "./email";

export const sendContactEmail = async (email: EmailData) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "서버 요청에 실패함");
  }
  return data;
};
