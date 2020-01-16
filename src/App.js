import React, {useEffect, useState} from 'react';
import Language from './Language'
import './App.css';

function App() {
    const [languages, setLanguages] = useState([])
    useEffect(() => {
        setLanguages([
            { name: 'Python', votes: 0},
            { name: 'Go', votes: 0},
            { name: 'Javascript', votes: 0},
            { name: 'Ruby', votes: 0},
            { name: 'Java', votes: 0},
        ]);
    }, []);

    const vote = (vote, name) => {
       const updatedLanguages = languages &&
           languages.map(language => {
               if(language.name === name) {
                   return { name: language.name, votes: language.votes += 1 }
               }
               return language;
           });
       setLanguages(updatedLanguages);
    };

    return (
        <div className="container">
            <h1>VOTE YOUR LANGUAGE!</h1>
            {languages && languages.map(({name, count, votes}) => <Language name={name} key={name} votes={votes} vote={vote}/>)}
        </div>
    )
}

export default App;
