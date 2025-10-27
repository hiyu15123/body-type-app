import './App.css'
import { Form } from './Form'
import { Result } from './Result'
import { useState } from "react";

export default function App() {
  const [diagnoseData, setDiagnoseData] = useState(null);
  return (
    <div className='container'>
      <h1>体型診断アプリ</h1>
      <p className='desc'>項目を入力すると、あなたの体型を診断します。BMI・体型タイプ・アドバイスをチェックしましょう。</p>
      {!diagnoseData ? (
        <Form onDiagnose={setDiagnoseData} /> 
        ) : ( 
        <Result data={diagnoseData} onReset={() => setDiagnoseData(null)} /> 
        )
      }
    </div>
  )
}