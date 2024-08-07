import React from 'react'
import './HomeScreen.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Row from './components/Row'
import requests from './components/Request'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav />
      <Banner />
      <Row title='NETFLIX ORIGNALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title='Upcomming Hindi Movies' fetchUrl={requests.fetchUpcomingMoviesIndia}  isLargeRow/>
      <Row title='Hindi Movies' fetchUrl={requests.fetchTopHindiMovies}  isLargeRow/>
      <Row title='NETFLIX TV Shows' fetchUrl={requests.fetchTvShows} isLargeRow />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}  isLargeRow/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrendings} isLargeRow/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}  isLargeRow/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}  isLargeRow/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}  isLargeRow/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}  isLargeRow/>
    </div>
  )
}

export default HomeScreen
