import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default function EpisodeCard (props) {
  return (<div>
    <Card >
    <Card.Content>
      <Card.Header>Episode</Card.Header>
      <Card.Meta>
        <span className='date'>{props.episode.name}</span>
      </Card.Meta>
      <Card.Description>
        <p>Air date: {props.episode['air_date']}</p>
        <p>Episode number: {props.episode.episode}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card></div>)
}