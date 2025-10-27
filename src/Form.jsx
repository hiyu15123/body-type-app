import { useState } from "react";

export function Form({onDiagnose}) {
   const [gender, setGender] = useState("男性");
   const [age, setAge] = useState("25");
   const [height, setHeight] = useState("175");
   const [weight, setWeight] = useState("65");
   const [activity, setActivity] = useState("ほとんどしない");

   const handleSubmit = (e) => {
      e.preventDefault();

      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const bmi = parseFloat((w / (h * h)).toFixed(1));

      let type = "";
      if (age >= 40) {
         if (bmi < 20) {
            type = "痩せ型";
         } else if (bmi < 26) {
            type = "標準体型";
         } else {
            type = "肥満体型";
         }
      } else {
         if (bmi < 18.5) {
            type = "痩せ型";
         } else if (bmi < 25) {
            type = "標準体型";
         } else {
            type = "肥満体型";
         }
      }

      let advice = "";
      if (type === "痩せ型") {
         if (activity === "ほとんどしない") {
            advice = "食事は3食しっかり摂り、タンパク質を意識しましょう。筋トレやウォーキングを取り入れると健康的に筋肉を増やせます。無理なダイエットは避けてください。";
         } else if (activity === "週1〜2回") {
            advice = "軽い運動とバランスの良い食事を意識しましょう。タンパク質を取り、筋肉を増やすことが大切です。休息も忘れずに。";
         } else {
            advice = "週3回以上の運動習慣は素晴らしいです。タンパク質を意識した食事と組み合わせて健康的に体型を整えましょう。";
         }
      } else if (type === "標準体型") {
         if (activity === "ほとんどしない") {
            advice = "軽い運動を取り入れると健康維持に効果的です。階段や通勤での歩行も有効です。食事もバランス良く。";
         } else if (activity === "週1〜2回") {
            advice = "運動習慣は順調です。少し運動量を増やすとさらに体型維持に効果的です。食事も意識しましょう。";
         } else {
            advice = "週3回以上の運動習慣は素晴らしいです。バランスの良い食事と組み合わせて健康的な体型を維持しましょう。";
         }
      } else {
         if (activity === "ほとんどしない") {
            advice = "まずは週1〜2回の軽い運動を始めましょう。食事内容も見直し、野菜やタンパク質を意識してください。無理せず続けることが大切です。";
         } else if (activity === "週1〜2回") {
            advice = "週1〜2回の運動習慣は良いスタートです。有酸素運動や筋トレを少し増やし、食事内容も意識しましょう。";
         } else {
            advice = "週3回以上の運動習慣はできています。食事内容もバランス良く整えることで、より健康的な体型を維持できます。";
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
            <div className="wrapper">
               <select name="gender" id="gender" value={gender} onChange={(e) => {setGender(e.target.value)}}>
                  <option value="男性">男性</option>
                  <option value="女性">女性</option>
               </select>
            </div>
         </div>
         <div className="input">
            <label htmlFor="age">年齢</label>
            <div className="wrapper">
               <input type="number" id="age" value={age} onChange={(e) => {setAge(e.target.value)}} placeholder="例: 25" />
               <span>歳</span>
            </div>
         </div>
         <div className="input">
            <label htmlFor="height">身長</label>
            <div className="wrapper">
               <input type="number" id="height" value={height} onChange={(e) => {setHeight(e.target.value)}} placeholder="例: 170" />
               <span>cm</span>
            </div>
         </div>
         <div className="input">
            <label htmlFor="weight">体重</label>
            <div className="wrapper">
               <input type="number" id="weight" value={weight} onChange={(e) => {setWeight(e.target.value)}} placeholder="例: 70" />
               <span>kg</span>
            </div>
         </div>
         <div className="input">
            <label htmlFor="activity">運動頻度</label>
            <div className="wrapper">
               <select value={activity} id="activity" onChange={(e) => setActivity(e.target.value)}>
                  <option value="ほとんどしない">ほとんどしない</option>
                  <option value="週1〜2回">週1〜2回</option>
                  <option value="週3回以上">週3回以上</option>
               </select>
            </div>
            
         </div>
         <button type="submit">診断する</button>
      </form>
   )
}