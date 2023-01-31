import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App () {
    return (
        <>
           <TwitterFollowCard username="pattopilco" initialIsFollowing={true} >
            Patricio Pilco
           </TwitterFollowCard>
        </>
    )
}