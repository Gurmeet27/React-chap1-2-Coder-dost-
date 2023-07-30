import Video1 from './components/Video1';
import {Basic,Sum} from './components/Basic';
import Border from './components/Border';


function App(){
  let obj={
    Title:"Intraday Live Session" ,
    Channelname:"Trend Trader Karan",
     Views:"100K" ,
     Time:" 2 Days ago"
  }
  return(
  <>
  <h1 style={{color:"red", marginLeft:"15px"}}>Youtube</h1>
  <Video1 Title="Price Action Tutorial" Channelname="Trend Trader Karan" Views="1M" Time="1 Month ago"/>
  <Video1 Title="Options Trading Tutorial" Channelname="Trend Trader Karan" Views="10M" Time="5 weeks ago"/>
  <Video1 {...obj}/>
  <Basic/>
  <Border>
  <Sum a={10} b={20}/>
  </Border>
  </>
  )
}
export default App;