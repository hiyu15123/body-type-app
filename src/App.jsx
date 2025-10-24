import './App.css'
import Form from './Form'
import Result from './Result'

export default function App() {

  return (
    <div>
      <h1>体系診断アプリ</h1>
      <p>必要な方法を入力してあなたの体型を診断します。</p>
      <Form />
      <Result />
    </div>
  )
}