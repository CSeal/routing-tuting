//Nested Routes (Вложеные роуты)

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import topics from './router-mock';

const mainLinkStyle = {paddingRight: '25px'};

const Resource = ({match}) =>{
  const subTopic = topics.find(( {id} ) => id === match.params.id).resourses.find(( {id} ) => id === match.params.subtopicId);
  return (<div>
    <hr />
    <h3>{subTopic.name}</h3>
    <p>{subTopic.description}</p>
    <a href={subTopic.url} target='_blank'>Read more</a>
  </div>)  
}

const Topic = ({ match }) => {
  const currentTopic = topics.find(topic => topic.id === match.params.id)
  return (
    <React.Fragment>
      <h2>{currentTopic.name}</h2>
      <p>{currentTopic.description}</p>
      <ul>
        {currentTopic.resourses.map(topicResource => <li key={topicResource.id}>
          <Link to={ `${match.url}/${typeof topicResource.id !== undefined ? topicResource.id : null}`}>{topicResource.name}</Link>
        </li>)}
      </ul>
      <Route path={`${match.path}/:subtopicId`} component={Resource}/>
    </React.Fragment>
  )
}

const Topics = ({match}) =>(
  <div>
    <h1>Topic</h1>
    <hr />
    <ul>
      {topics.map(topic => <li key={topic.id}><Link to={`${match.url}/${topic.id}`} >{topic.name}</Link></li>)}
    </ul>
    <Route path={`${match.path}/:id`} component={Topic} />
  </div>
)

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to={'/home'} style={mainLinkStyle}>Home</Link>
          <Link to={'/topics'} style={mainLinkStyle}>Topic</Link>

          <hr />

          <Route path={'/topics'} component={Topics} />
          <Route path={'/home'} component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
