import Image from "next/image";
import profileImg from "../../public/images/profile.png";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="text-center">
      <Image
        src={profileImg}
        className="rounded-full mx-auto w-auto h-auto"
        alt="sexy eunseok"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"안녕하세요 난 은석이야"}</h2>
      <h3 className="text-xl font-semibold ">Front-end Engineer</h3>
      <p>잠자는 개발자</p>
      <Link href={"/contact"}>
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">Contact Me</button>
      </Link>
    </section>
  );
};
export default Hero;
