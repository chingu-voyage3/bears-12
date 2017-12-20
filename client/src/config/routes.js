import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from '../App'
import HomeContainer from '../container/HomeContainer';
import LoginContainer from '../container/LoginContainer';
import JoinContainer from '../container/JoinContainer';
import SearchContainer from '../container/SearchContainer';
import AnnouncementContainer from '../container/AnnouncementContainer';
import OpportunityContainer from '../components/Opportunity';
import ProfileContainer from '../container/ProfileContainer';
import MyOpportunitiesContainer from '../container/MyOpportunitiesContainer';

const getRoutes = (store) => (
  <Router>
    <App>
      <Switch>
        <Route exact={true} path='/' component={HomeContainer} />
        <Route exact={true} path='/login' component={LoginContainer} />
        <Route exact={true} path='/join' component={JoinContainer} />
        <Route exact={true} path='/search' component={SearchContainer} />
        <Route exact={true} path='/profile/:userid' component={ProfileContainer} />
        <Route exact={true} path='/opportunity/:opportunityid' component={OpportunityContainer}/>
        <Route path='/announcement' component={AnnouncementContainer}/>
        <Route path='/MyOpportunities' component={MyOpportunitiesContainer}/>
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </App>
  </Router>
)

export default getRoutes
