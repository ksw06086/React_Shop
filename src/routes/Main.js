import Card from './Card';

export default function Main({ music }) {
    
    return (
        <>
            <div className='main-bg' style={{ backgroundImage : `url(${process.env.PUBLIC_URL + '/img/background.jpg'})` }}></div>

            <div className='container'>
                <div className='row'>
                {music.map(info => (<Card info={info} key={info.id} />))}
                </div>
            </div>
        </>
    );
}