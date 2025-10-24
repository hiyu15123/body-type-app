export function Result({data, onReset}) {
   return (
      <div>
         <h2>あなたの情報</h2>
         <p>性別：{data.gender}</p>
         <p>年齢：{data.age}歳</p>
         <p>身長：{data.height} cm</p>
         <p>体重：{data.weight} kg</p>
         <p>運動頻度：{data.activity}</p>
         <h2>診断結果</h2>
         <p>BMI：{data.bmi.toFixed()}</p>
         <p>体型タイプ：{data.type}</p>
         <p>アドバイス：{data.advice}</p>
         <button onClick={onReset}>もう一度診断する</button>
      </div>
   )
}