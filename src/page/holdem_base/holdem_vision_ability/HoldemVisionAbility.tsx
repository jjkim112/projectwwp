import './HoldemVisionAbility.css';

function HoldemVisionAbility() {
  const flushDraw = [
    {
      image: '/assets/images/vision/flushDraw1.png',
      percentage: '34.97%',
      outs: '9개',
      formula: '1 - (38 ÷ 47) × (37 ÷ 46)\n = 0.34967 * 100 = 34.97%',
    },
    {
      image: '/assets/images/vision/flushDraw2.png',
      percentage: '19.56%',
      outs: '9개',
      formula: '9 ÷ 46\n = 0.1956 * 100 = 19.56%',
    },
  ];
  const straight = [
    {
      image: '/assets/images/vision/straight1.png',
      percentage: '31.45%',
      outs: '8개',
      formula: '1 - (39 ÷ 47) × (38 ÷ 46)\n = 0.3145 * 100 = 31.45%',
    },
    {
      image: '/assets/images/vision/straight2.png',
      percentage: '17.39%',
      outs: '8개',
      formula: '8 ÷ 46\n = 0.1739 * 100 = 17.39%',
    },
  ];
  const flushStraightDarw = [
    {
      image: '/assets/images/vision/flushStraightDarw1.png',
      percentage: '31.45%',
      outs: '15개 뽀쁠 9개 양차 8개 양차랑 뽀쁠이 겹치는 부분2장을뺀',
      formula: '1 - (32 ÷ 47) × (31 ÷ 46)\n = 0.5411 * 100 = 54.11%',
    },
    {
      image: '/assets/images/vision/flushStraightDarw2.png',
      percentage: '32.60%',
      outs: '15개',
      formula: '15 ÷ 46\n = 0.3260 * 100 = 32.60%',
    },
  ];
  const thingShot = [
    {
      image: '/assets/images/vision/thingShot1.png',
      percentage: '16.46%',
      outs: '4개',
      formula: '1 - (43 ÷ 47) × (42 ÷ 46)\n = 0.1646 * 100 = 16.46%',
    },
    {
      image: '/assets/images/vision/thingShot2.png',
      percentage: '8.69%',
      outs: '4개',
      formula: '4 ÷ 46\n = 0.0869 * 100 = 8.69%',
    },
  ];

  return (
    <div className="p-2">
      <div className="p-2 border-2 rounded-2xl">
        <div className="font-bold text-2xl mb-3">아웃츠 계산 방식</div>
        <div className="font-bold text-white text-base mb-3">
          아웃츠 내가 기대하는 숫자의 갯수를 의미. 다른 사람의 패는 알수
          없으므로 신경쓰지 않음
        </div>
        <div className=" text-white text-base mb-3">
          * 여집합으로 고려, '1-(0.81)(0.81) = 0.35 (근사값)'
        </div>
        <div className=" text-white text-base mb-3">
          내가 기대하지 않는 것들이 뜰 확률에서 1을 빼주면 내가 기대하는 숫자의
          퍼센트가 나온다.
        </div>
        <div className=" text-white text-base mb-3">
          1 - ((47-아웃츠 갯수)/47) * ((46-아웃츠 갯수)/46)
        </div>
      </div>

      <section className="pb-3">
        <div className="ability-container">
          <h1 className="ability-title">1. 플러시 드로우(뽀쁠) 확률</h1>

          {flushDraw.map((v, i) => (
            <div>
              <img src={v.image} alt="table1" />
              <div className="content">
                <p>확률 : {v.percentage}</p>
                <p>아웃츠 : {v.outs}</p>
                <p>계산 식: {v.formula}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-3">
        <div className="ability-container">
          <h1 className="ability-title">
            2.오픈 엔드 스트레이트 드로우(양차) 확률
          </h1>

          {straight.map((v, i) => (
            <div>
              <img src={v.image} alt="table1" />
              <div className="content">
                <p>확률 : {v.percentage}</p>
                <p>아웃츠 : {v.outs}</p>
                <p>계산 식: {v.formula}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-3">
        <div className="ability-container">
          <h1 className="ability-title">3. 뽀쁠에 양차</h1>

          {flushStraightDarw.map((v, i) => (
            <div>
              <img src={v.image} alt="table1" />
              <div className="content">
                <p>확률 : {v.percentage}</p>
                <p>아웃츠 : {v.outs}</p>
                <p>계산 식: {v.formula}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-3">
        <div className="ability-container">
          <h1 className="ability-title">
            4. 것샷 스트레이트 드로우(빵꾸) 확률
          </h1>

          {thingShot.map((v, i) => (
            <div>
              <img src={v.image} alt="table1" />
              <div className="content">
                <p>확률 : {v.percentage}</p>
                <p>아웃츠 : {v.outs}</p>
                <p>계산 식: {v.formula}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HoldemVisionAbility;
