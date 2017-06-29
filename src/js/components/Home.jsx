import React from 'react';
import { Slider, Slide } from 'react-materialize';
import business from '../../../public/img/business-man-1031755_1920-1080x675.jpg';
import whatsNew from '../../../public/img/whats-new.jpg';
import theGoodNews from '../../../public/img/the-good-news.jpg';
import newsWallpaper from '../../../public/img/newspaper-wallpaper.jpg';

/**
 * 
 * 
 * @class Home
 * @extends {React.Component}
 */
class Home extends React.Component {
  /**
   * 
   * 
   * @returns 
   * @memberof Home
   */
  render() {
    return (
      <Slider className="slider fullscreen">
        <Slide
          src={business}
          title="Latest News feeds from...">
          Here's our small slogan.
        </Slide>
        <Slide
          src={whatsNew}
          title="Left aligned Caption"
          placement="left">
          Here's our small slogan.
        </Slide>
        <Slide
          src={theGoodNews}
          title="Right aligned Caption"
          placement="right">
          Here's our small slogan.
        </Slide>
        <Slide
          src={newsWallpaper}
          title="Right aligned Caption"
          placement="right">
          Here's our small slogan.
        </Slide>
      </Slider>
    );
  }
}

export default Home;
