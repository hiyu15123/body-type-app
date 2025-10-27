import { useState } from "react";

export function Form({onDiagnose}) {
   const [gender, setGender] = useState("男性");
   const [age, setAge] = useState("25");
   const [height, setHeight] = useState("170");
   const [weight, setWeight] = useState("70");
   const [activity, setActivity] = useState("ほとんどしない");

   const handleSubmit = (e) => {
      e.preventDefault();

      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const bmi = parseFloat((w / (h * h)).toFixed(1));

      let type = "";
      if (bmi < 18.5) {
         type = "痩せ型";
      } else if (bmi < 25) {
         type = "標準体型";
      } else {
         type = "肥満体型";
      }

      let advice = "";
      if (type === "痩せ型") {
         if (activity === "ほとんどしない") {
            advice = "食事をしっかり取り、筋肉を増やしましょう。";
         } else if (activity === "週1〜2回") {
            advice = "軽い運動を取り入れつつ、栄養を意識して体重を増やしましょう。";
         } else {
            advice = "たんぱく質を意識して、健康的に体重を増やしましょう。";
         }
      } else if (type === "標準体型") {
         if (activity === "ほとんどしない") {
            advice = "軽い運動を始めるとさらに健康的です。";
         } else if (activity === "週1〜2回") {
            advice = "運動習慣は順調です。もう少し体重を増やすと理想的です。";
         } else {
            advice = "素晴らしいバランスです！維持していきましょう。";
         }
      } else {
         if (activity === "ほとんどしない") {
            advice = "まずは週1〜2回の運動から始めましょう。";
         } else if (activity === "週1〜2回") {
            advice = "運動を増やしつつ、食事内容を見直しましょう。";
         } else {
            advice = "運動はしっかりできています。食事を調整しましょう。";
         }
      }

      onDiagnose({
         gender: gender,
         age: Number(age),
         height: Number(height),
         weight: Number(weight),
         activity: activity,
         bmi: bmi,
         type: type,
         advice: advice,
      });
   };

   return (
      <form onSubmit={handleSubmit} className="form">
         <div className="input">
            <label htmlFor="gender">性別</label>
            <select name="gender" id="gender" value={gender} onChange={(e) => {setGender(e.target.value)}}>
               <option value="男性">男性</option>
               <option value="女性">女性</option>
            </select>
         </div>
         <div className="input">
            <label htmlFor="age">年齢</label>
            <input type="number" id="age" value={age} onChange={(e) => {setAge(e.target.value)}} placeholder="例: 25" />
         </div>
         <div className="input">
            <label htmlFor="height">身長</label>
            <input type="number" id="height" value={height} onChange={(e) => {setHeight(e.target.value)}} placeholder="例: 170" />
         </div>
         <div className="input">
            <label htmlFor="weight">体重</label>
            <input type="number" id="weight" value={weight} onChange={(e) => {setWeight(e.target.value)}} placeholder="例: 70" />
         </div>
         <div className="input">
            <label htmlFor="activity">運動頻度</label>
            <select value={activity} id="activity" onChange={(e) => setActivity(e.target.value)}>
               <option value="ほとんどしない">ほとんどしない</option>
               <option value="週1〜2回">週1〜2回</option>
               <option value="週3回以上">週3回以上</option>
            </select>
         </div>
         <button type="submit">診断する</button>
      </form>
   )
}