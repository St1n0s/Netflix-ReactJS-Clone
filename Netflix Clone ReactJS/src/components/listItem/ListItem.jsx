import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react";
import "./listItem.scss"

export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className="listItem" 
    style={{left: isHovered && index * 225 -50 + index * 2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}
    >
      <img src="https://occ-0-768-769.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcrmtpXnuiSDMtSBXGdtVZVTvb5ZsMWWjO9-r9jtnSJ_Ri3v91yfo0zNSd_E-vQ1Vwel96MMKD6zQ9543k13SCqpjH25aL0v1Vo.jpg?r=308" alt="" 
      />
      {isHovered && (
       <>
         <video src={trailer} autoPlay={true} loop />
         <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon"/>
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon"/>
            <ThumbDownAltOutlined className="icon"/>
          </div>
          <div className="itemInfoTop">
            <span>1 hour 31 minutes</span>
            <span className="limit">16+</span>
            <span>2019</span>
          </div>
          <div className="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, qui, cumque error sunt cupiditate.
          </div>
          <div className="genre">
            Action
          </div>
          </div>
        </>
      )}
    </div>
  );
}
