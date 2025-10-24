import './App.css'
import { Form } from './Form'
import { Result } from './Result'
import { useState } from "react";

export default function App() {
  const [diagnoseData, setDiagnoseData] = useState(null);
  return (
    <div>
      <h1>体系診断アプリ</h1>
      <p>必要な方法を入力してあなたの体型を診断します。</p>
      <Form onDiagnose={setDiagnoseData} />
      <Result data={diagnoseData} onReset={() => setDiagnoseData(null)} />
    </div>
  )
}