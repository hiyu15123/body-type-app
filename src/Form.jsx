import { useState } from "react";

export default function Form({onDiagnose}) {
   const [gender, setGender] = useState("男性");
   const [age, setAge] = useState("25");
   const [height, setHeight] = useState("170");
   const [weight, setWeight] = useState("70");
   const [activity, setActivity] = useState("ほとんどしない");

   const handleSubmit = (e) => {
      e.preventdefault();

      onDiagnose({
         gender: gender,
         age: Number(age),
         height: Number(height),
         weight: Number(weight),
         activity: activity,
      });
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="">性別</label>
               <select name="gender" id="gender" value={gender} onChange={(e) => {setGender(e.target.value)}}>
                  <option value="男性">男性</option>
                  <option value="女性">女性</option>
               </select>
            </div>
            <div>
               <label htmlFor="age">年齢</label>
               <input type="number" value={age} onChange={(e) => {setAge(e.target.value)}} placeholder="例: 25" />
            </div>
            <div>
               <label htmlFor="height">身長</label>
               <input type="number" value={height} onChange={(e) => {setHeight(e.target.value)}} placeholder="例: 170" />
            </div>
            <div>
               <label htmlFor="weight">体重</label>
               <input type="number" value={weight} onChange={(e) => {setWeight(e.target.value)}} placeholder="例: 70" />
            </div>
            <div>
               <label htmlFor="">運動頻度</label>
               <select value={activity} onChange={(e) => setActivity(e.target.value)}>
                  <option value="ほとんどしない">ほとんどしない</option>
                  <option value="週1〜2回">週1〜2回</option>
                  <option value="週3回以上">週3回以上</option>
               </select>
            </div>
            <button type="submit">診断する</button>
         </form>
      </div>
   )
}