import Row from './componets/Row'
import request from './request'
import Header from './componets/Header'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Movie from './componets/Movie';
import CastDetails from './componets/Cast';
const App = () => {
  return (
    <div className='App'>
       
       <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Header/>
               <Row title="Netfix Originals" fetchUrl={request.fetchNetflixOriginals} islargeRow/>
                <Row title="Trending Movies" fetchUrl={request.fetchTrending}/>
                <Row title="TopRated Movies" fetchUrl={request.fetchTopRated}/>
                <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
                <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
                <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
                <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
                <Row title="Documentries" fetchUrl={request.fetchDocumentaries}/>
            </>
          }/>
          <Route path='/movie' element={<Movie/>}/>
          <Route path='/cast/:castId/:castName' element={<CastDetails/>} />
        </Routes>
       </BrowserRouter>
     
    </div>
  )
}

export default App
