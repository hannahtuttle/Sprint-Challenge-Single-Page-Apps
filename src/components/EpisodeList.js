import React, { useEffect, useState } from 'react';
import axios from 'axios'

import EpisodeCard from './EpisodeCard'



export default function EpisodesList() {

    const [episode, setEpisode]= useState([])

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/` )
        .then(response => {
            console.log('epsiode api', response.data.results)
            setEpisode(response.data.results)
        }).catch(error => {
            console.log('Not getting info episodes from api', error)
        })
    },[])

    return (<div>
        {episode.map(ep => 
           <EpisodeCard key={ep.id} episode={episode}/>
        )}
    </div>)

}
