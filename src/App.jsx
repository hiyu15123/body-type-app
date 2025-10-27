import './App.css'
import { Form } from './Form'
import { Result } from './Result'
import { useState } from "react";

export default function App() {
  const [diagnoseData, setDiagnoseData] = useState(null);
  return (
    <div className='container'>
      <h1>体型診断アプリ</h1>
      <p className='desc'>項目を入力すると、あなたの体型を診断します。<br className='hidden-sp'></br>BMI・体型タイプ・アドバイスをチェックしましょう。</p>
      {!diagnoseData ? (
        <Form onDiagnose={setDiagnoseData} /> 
        ) : ( 
        <Result data={diagnoseData} onReset={() => setDiagnoseData(null)} /> 
        )
      }
      <h2>体型診断アプリについて詳しく</h2>
      <p>この体型診断アプリは、フォームで入力した項目をもとに体型を評価し、BMIと体型タイプ、日常で取り入れやすいアドバイスを提示します。入力は性別・年齢、身長（cm）、体重（kg）、運動頻度の選択という構成で、結果ページでは日本の一般的なBMI基準に沿って「痩せ体型・標準体型・肥満体型」を分かりやすく表示します。</p>
      <h3>BMIとは</h3>
      <p>BMIは、体格を「やせ・普通・肥満」などのカテゴリで把握するための簡易指標です。成人の健康リスクの目安として使われ、。筋肉が多い人はBMIが高くても健康的なことがあり、同じBMIでも内臓脂肪の多さでリスクは変わります。目安として使いつつ、ウエスト周囲径や体脂肪率、血圧・血糖なども合わせて見るとより適切に判断できます。</p>
      <h3></h3>

    </div>
  )
}