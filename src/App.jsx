import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './components/Homepage'
import ArticleView from './components/ArticleView'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/articles/:article_id" element={<ArticleView />}/>
      </Routes>
    </div>
  )
}

export default App
