import React from "react";
import vg from "../Assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillFacebook,
  AiFillYoutube,
 } from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TECHYHUB</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphic" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      {/* // About Section ------- */}

      <div className="home3" id="about">
        <div>
          <h2>Who we are?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis labore
            officiis distinctio minus omnis nihil iste cumque veritatis voluptas
            voluptatibus, possimus optio maxime voluptatum. Ipsa deserunt et
            eligendi soluta minus! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum itaque quod accusamus suscipit
            praesentium provident ut similique, iusto ex architecto, iste
            molestiae enim aperiam doloremque tempora. Dolor laboriosam ab quae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            eligendi recusandae tempora tempore, quibusdam possimus a assumenda
            illum voluptas neque provident corrupti deserunt! Dolorum nostrum
            nobis vero repellat error beatae eos quisquam. Nulla, debitis? Eos
            dolorem iste natus dolores iusto dolore itaque minus vel architecto
            voluptate provident, a veritatis quisquam nam ullam ab et sed quia.
            Iste sit mollitia vitae rerum consequuntur eum, illo voluptatibus
            inventore? Voluptas quidem facilis vero optio explicabo iste
            repellat autem necessitatibus. Nobis minima voluptas nesciunt. Quae
            ex ab natus? Quam soluta aliquam, quis ad officiis voluptas earum.
            Quis sapiente enim a tempora minima autem incidunt.
          </p>
        </div>
      </div>

      {/* Brand Section ------ */}

      <div className="home4" id="brand">
        <div>
          <h2>Brands</h2>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillFacebook />
              <p>Facebook</p>
            </div>
            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
