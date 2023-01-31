# react-twitter-card

## Recursos

1. https://www.reactjs.wiki/
2. https://vitejs.dev/
3. https://heroicons.com
4. https://unavatar.io/



## Instalación
1. Instalar usando Vite 
```
npm create vite@latest
```
## Ejecución
```
npm install
npm run dev
```
## Crear Componente TwitterFollowCard

```
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
```

## Usar Componente TwitterFollowCard

```
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App () {
    return (
        <>
           <TwitterFollowCard isFollowing username="pattopilco" name="Patricio Pilco"/>
        </>
    )
}
```



