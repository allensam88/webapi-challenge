import React from 'react';
import { Route } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1 className='App-header'>Welcome to your Project List</h1>
            
            <Route exact path="/projects" component={ProjectList} /> 

            <Route path="/projects/:id" component={ProjectDetail} />
            
        </div>
    );
}

export default App;
