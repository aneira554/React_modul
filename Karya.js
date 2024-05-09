import React, {Component} from 'react';
import Media from "./Image/Media";
import "./Main.css";

class Karya extends Component {
  render() {
      return (
    <>
      <h1 style={{textAlign: "center"}}>Karya Saya</h1>
      <br />
      <div className="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        libero laboriosam quia totam, ducimus dolorum velit voluptates ipsam ad
        labore repellendus! Reprehenderit corporis labore totam est quas natus
        non quis? Atque porro obcaecati error hic perspiciatis itaque
      </div>
      <br />
      <div className="head-text1">
        <Media image = "Image2.JPG"></Media>
      </div>
      <br />
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aut a,
        expedita quaerat, facere iste earum deserunt numquam dignissimos
        obcaecati voluptatem repellendus nemo eveniet corporis esse voluptatibus
        facilis laboriosam natus quam sapiente ipsum ipsa, repudiandae qui
        alias. Ut inventore commodi quae ea excepturi, soluta distinctio
        laboriosam cum voluptatem consectetur cupiditate neque eius esse placeat
        consequatur assumenda, unde atque nemo modi perferendis? Saepe
        molestiae, earum at dicta sit iusto dignissimos vero voluptate voluptas
        qui ullam molestias omnis cupiditate dolores sunt incidunt ab nisi eaque
        culpa dolorum? Provident eos doloribus soluta maxime obcaecati quam, a,
        quod blanditiis dolores odit aliquid quis distinctio.
      </div>
      <br />
      <div>
        <Media image = "Image3.JPG"></Media>
      </div>
      <br />
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aut a,
        expedita quaerat, facere iste earum deserunt numquam dignissimos
        obcaecati voluptatem repellendus nemo eveniet corporis esse voluptatibus
        facilis laboriosam natus quam sapiente ipsum ipsa, repudiandae 
      </div>
    </>
  );
};
}
export default Karya;