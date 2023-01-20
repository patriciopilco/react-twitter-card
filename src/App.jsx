import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App () {
    return (
        <>
       <TwitterFollowCard isFollowing username="pattopilco" name="Patricio Pilco"/>
       <TwitterFollowCard isFollowing={false} username="pattopilco" name="Patricio Pilco"/>
       
        </>

    )
}