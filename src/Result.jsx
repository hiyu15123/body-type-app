export function Result({data, onReset}) {

   let typeColor;
   if (data.type === "痩せ型") {
      typeColor = "#4fc3f7";
   } else if(data.type === "標準体型") {
      typeColor = "#81c784";
   } else {
      typeColor = "#ffb74d";
   }

   let bodyType;
   if (data.age >= 40) {
      bodyType = {
         slim: "〜20",
         normal: "20〜26",
         obese: "26〜",
      };
   } else {
      bodyType = {
         slim: "〜18.5",
         normal: "18.5〜25",
         obese: "25〜",
      };
   }

   let leftPercent;
   if (data.bmi < 18.5) {
      leftPercent = (data.bmi / 18.5) * 30;
   } else if (data.bmi < 25) {
      leftPercent = 30 + ((data.bmi - 18.5) / (25 - 18.5)) * 40;
   } else {
      leftPercent = 70 + ((data.bmi - 25) / (40 - 25)) * 30;
   }

   let imgSrc;
   if (data.gender === "男性") {
      if (data.type === "痩せ型") {
         imgSrc = "img/img_men-slim.png";
      } else if (data.type === "標準体型") {
         imgSrc = "img/img_men-normal.png";
      } else {
         imgSrc = "img/img_men-obese.png";
      }
   } else {
      if (data.type === "痩せ型") {
         imgSrc = "img/img_women-slim.png";
      } else if (data.type === "標準体型") {
         imgSrc = "img/img_women-normal.png";
      } else {
         imgSrc = "img/img_women-obese.png";
      }
   }

   return (
      <div>
         <h2>診断結果</h2>
         <div className="content">
            <div className="bmi-bar">
               <h3
                  className="bmi"
                  style={{ color: typeColor }}
               >BMI：{data.bmi.toFixed(1)}</h3>
               <div className="bar">
                  <div
                     className="indicator"
                     style={{ left: `${leftPercent}%` }}
                  ></div>
               </div>
               <div className="notes">
                  <span className="note underweight">やせ型<br />{bodyType.slim}</span>
                  <span className="note normal">標準<br />{bodyType.normal}</span>
                  <span className="note overweight">肥満<br />{bodyType.obese}</span>
               </div>
            </div>
            <div className="type">
               <h3>体型タイプ：{data.type}</h3>
               <p className="img"><img src={imgSrc} alt={data.type} /></p>
            </div>
            <h3>アドバイス</h3>
            <p>{data.advice}</p>
         </div>
         <h2><span>あなたの情報</span></h2>
         <div className="content">
            <p>性別：{data.gender}</p>
            <p>年齢：{data.age}歳</p>
            <p>身長：{data.height} cm</p>
            <p>体重：{data.weight} kg</p>
            <p>運動頻度：{data.activity}</p>
         </div>
         <button onClick={onReset}>もう一度診断する</button>
      </div>
   )
}