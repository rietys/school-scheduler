import './App.scss'
import Table from './components/Table/Table'

export default function App() {
  return (
    <>
      <header>
        <button className='login-button'>Войти</button>
      </header>
      <main>
        <Table />
      </main>
    </>
  )
}