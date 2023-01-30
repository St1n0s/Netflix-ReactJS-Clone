import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
  return (
    <div className="featured">
        
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}   

        <img src="https://www.imfdb.org/images/thumb/f/fc/PredatorSP1-10.jpg/1200px-PredatorSP1-10.jpg" alt="" />
        
        <div className="info">
            <img src="https://th.bing.com/th/id/R.d71d5b370b383cae156b3245c008ee75?rik=hvWRIbjevHj8sw&pid=ImgRaw&r=0" alt="" />
            <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, distinctio nihil dignissimos blanditiis quae fugit omnis vero ad, voluptas nisi ratione ipsum impedit a explicabo mollitia, tempore facilis doloribus delectus!</span>
            
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>

        </div>
    </div>
  )
}
