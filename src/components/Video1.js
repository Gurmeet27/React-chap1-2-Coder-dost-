import './Video1.css';

function Video1({Title,Channelname,Views,Time}){
return(
        <div className="container">
                <div className="pic">
                        <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=80" alt="Activa-img"
                        style={{width:"150px", height:"100px"}}>
                        </img>
                </div>
                <div className="title">{Title}</div>
                <div className="Channel">{Channelname}</div>
                <div className="Views">{Views}</div>
                <div className="Time">{Time}</div>
        </div>
)
}
export default Video1 ;