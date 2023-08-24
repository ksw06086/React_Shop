export default function Goods({info}) {
    return (
        <div className='col-md-4' key={info.id}>
            <img src={process.env.PUBLIC_URL + "/img/music" + (info.id+1) + ".jpg"} width={"80%"} height={"60%"}/>
            <h4>{info.title}</h4>
            <p>{info.price}</p>
        </div>
    );
}