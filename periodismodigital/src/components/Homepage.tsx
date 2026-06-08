import Portada from "./sections/Portada";
import Poster from "./sections/Poster";
import Podcast from "./sections/Podcast";
import Video from "./sections/Video";
import Cronica from "./sections/Cronica";

function Homepage() {
  return (
    <div className="Homepage">
      <Portada />
      <Cronica />
      <Poster />
      <Podcast />
      <Video />
    </div>
  );
}

export default Homepage;
