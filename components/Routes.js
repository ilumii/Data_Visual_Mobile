import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../pages/Home.js'
import Main from '../pages/Main.js'
import Manhattan from '../pages/manhattan.js'
import Queens from '../pages/queens.js'
import Brooklyn from '../pages/brooklyn.js'
import Bronx from '../pages/bronx.js'
import StatenIsland from '../pages/statenIsland.js'
import HeatMap from '../pages/heat.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" />
         <Scene key = "NYC" component = {Main} title = "New York City" initial = {true}/>
         <Scene key = "Manhattan" component = {Manhattan} title = "Manhattan" />
         <Scene key = "Queens" component = {Queens} title = "Queens" />
         <Scene key = "Brooklyn" component = {Brooklyn} title = "Brooklyn" />
         <Scene key = "Bronx" component = {Bronx} title = "Bronx" />
         <Scene key = "StatenIsland" component = {StatenIsland} title = "Staten Island" />
         <Scene key = "HeatMap" component = {HeatMap} title = "pls" />
      </Scene>
   </Router>
)
export default Routes