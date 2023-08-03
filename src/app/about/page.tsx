import Hero from "@/components/Hero";

const TITEL_CLASS = "text-2xl font-bold text-gray-800 my-2";

const AboutPage = () => {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m8 text-center">
        <h2 className={TITEL_CLASS}>내가 누구인가?</h2>
        <p>웹 아키텍처에 관심있고 짧지만 강하게 나아가려는 깊이있게 생각하고 고민하는 개발자</p>
        <h2 className={TITEL_CLASS}>Career</h2>
        <p>
          구글러 (-now)
          <br />
          메이스북 (-2019)
          <br />
          네이버 카카오 라인 쿠팡 배달의민족
        </p>
        <h2 className={TITEL_CLASS}>Skills</h2>
        <p>
          React , Vue , Node <br />
          Jira , git <br />
          etc...
        </p>
      </section>
    </>
  );
};
export default AboutPage;
