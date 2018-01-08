import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import HomeContainer from '../container/HomeContainer';
import LoginContainer from '../container/LoginContainer';
import JoinContainer from '../container/JoinContainer';
import SearchContainer from '../container/SearchContainer';
import AnnouncementContainer from '../container/AnnouncementContainer';
import OpportunityContainer from '../components/Opportunity';
import ProfileContainer from '../container/ProfileContainer';
import MyOpportunitiesContainer from '../container/MyOpportunitiesContainer';
import ComposeOpportunitiesContainer from '../container/ComposeOpportunitiesContainer';
import NavContainer from '../container/NavContainer';

const getRoutes = (store) => (
  <Router>
    <App>
        <NavContainer />
        <Switch>
            <Route exact={true} path='/' component={HomeContainer} />
            <Route path='/login' component={LoginContainer} />
            <Route path='/join' component={JoinContainer} />
            <Route path='/search' component={SearchContainer} />
            <Route path='/profile/:userid' component={ProfileContainer} />
            <Route path='/opportunity/:opportunityid' component={OpportunityContainer}/>
            <Route path='/editopportunity/:opportunityid' component={ComposeOpportunitiesContainer} />
            <Route path='/announcement' component={AnnouncementContainer} />
            <Route path='/myopportunities' component={MyOpportunitiesContainer}/>
        </Switch>
    </App>
  </Router>
)

export default getRoutes
