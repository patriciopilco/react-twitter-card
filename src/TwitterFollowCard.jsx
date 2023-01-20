export function TwitterFollowCard({username, name, isFollowing}) {
    console.log(isFollowing);
    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt="" src={`https://unavatar.io/${username}`}/>
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-avatar-infoUsername'>@{username}</span>
            </div>
        </header>
        <aside>
            <button className='tw-followCard-avatar-button'>
                Seguir
            </button>
        </aside>
        </article>
    )
}