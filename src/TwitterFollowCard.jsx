import { Children } from "react";
import { useState } from 'react'

export function TwitterFollowCard({children, username}) {
    const [ isFollowing, setIsFollowing ] = useState(false)  // retorna el valor del estado y una función
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-avatar-button is-following' 
                                        : 'tw-followCard-avatar-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }   

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt="" src={`https://unavatar.io/${username}`}/>
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-avatar-infoUsername'>@{username}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
        </article>
    )
}