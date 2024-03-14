import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './components/Homepage'
import ArticleView from './components/ArticleView'
import { UserContext } from './contexts/UserContext'
import { useState } from 'react'

function App() {

  const [user, setUser] = useState({
    username: 'cooljmessy',
    name: 'Peter Messy',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002'
  });


  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/articles/:article_id" element={<ArticleView />}/>
      </Routes>
    </div>
    </UserContext.Provider>
  )
}

export default App
