import React from "react";
import Navbar from "../Allsimilar/Navbar";
import style from "../Css/Home.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/1.png";
import { IoIosSearch } from "react-icons/io";
import scan from "../assets/2.png";
import google from "../assets/3.png";
import lock from "../assets/4.png";
import trust from "../assets/5.png";
import help from "../assets/6.png";
import phone from "../assets/7.png";
import Footer from "../Allsimilar/Footer";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsive2 = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  return (
    <>
      <Navbar />

      <div className={style.homediv1}>
        <div className={style.homediv2}>
          <div>
            <Carousel responsive={responsive} infinite={true} autoPlay={true}>
              <div>
                <img
                  width={810}
                  height={300}
                  src="https://n3.sdlcdn.com/imgs/k/r/l/ONDC_WEB_BANNER_12oct-f3080.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  width={810}
                  height={300}
                  src="https://n2.sdlcdn.com/imgs/k/v/r/web_home_903_new_12-13ad3.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  width={810}
                  height={300}
                  src="https://n2.sdlcdn.com/imgs/k/s/i/ethnicwear-ef4d9.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  width={810}
                  height={300}
                  src="https://n3.sdlcdn.com/imgs/k/s/i/cookware-bc6ef.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  width={810}
                  height={300}
                  src="https://n1.sdlcdn.com/imgs/k/s/i/sport_shoe-6f9df.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  width={810}
                  height={300}
                  src="https://n3.sdlcdn.com/imgs/k/s/i/utility-86032.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  width={810}
                  height={300}
                  src="https://n4.sdlcdn.com/imgs/k/s/i/bedsheets0512-a7f6e.jpg"
                  alt=""
                />
              </div>
            </Carousel>
          </div>

          <div>
            <img src={image1} className={style.direction} alt="" />
            <p className={style.directionp}>Your Delivery Pincode</p>
            <p className={style.directionp2}>
              Enter your pincode to check availability
            </p>
            <p className={style.directionp3}>and faster delivery options</p>
            <p className={style.direcpin}>Pincode : 721024</p>
          </div>
        </div>

        <div className={style.maintranding}>
          <p className={style.tranding}>TRENDING PRODUCTS</p>

          <div className={style.prodiv1}>
            <Carousel responsive={responsive2} infinite={true}>
              <div className={style.producis}>
                <img
                  src="https://n1.sdlcdn.com/imgs/i/n/r/large/bhawna-collection-Loard-Shiv-Trishul-SDL890408077-1-86933.jpeg"
                  alt=""
                />
                <p className={style.prides}>
                  Bhawna Collection Loard Shiv Trishul Damru Locket
                </p>
                <span className={style.pripri1}>Rs 995</span>
                <span className={style.pripri2}>Rs 155</span>
              </div>

              <div className={style.producis}>
                <img
                  src="https://n2.sdlcdn.com/imgs/j/d/1/large/Aadi-Black-Casual-Shoes-SDL431498244-3-37da7.jpeg"
                  alt=""
                />
                <p className={style.prides}>Aadi Black Casual Shoes</p>
                <span className={style.pripri1}>Rs 995</span>
                <span className={style.pripri2}>Rs 369</span>
              </div>

              <div className={style.producis}>
                <img
                  src="https://n3.sdlcdn.com/imgs/i/u/v/large/HeelSocks1-aeb5a.jpg"
                  alt=""
                />
                <p className={style.prides}>
                  Stay Healthy - Foot Protector (Free Size)
                </p>
                <span className={style.pripri1}>Rs 599</span>
                <span className={style.pripri2}>Rs 132</span>
              </div>

              <div className={style.producis}>
                <img
                  src="https://n4.sdlcdn.com/imgs/i/z/e/large/Maxbell-USB-Rechargeable-Electronic-Flameless-SDL679184483-1-08e0f.jpg"
                  alt=""
                />
                <p className={style.prides}>
                  Maxbell USB Rechargeable Electronic Flameless Lighter
                </p>
                <span className={style.pripri1}>Rs 699</span>
                <span className={style.pripri2}>Rs 189</span>
              </div>

              <div className={style.producis}>
                <img
                  src="https://n1.sdlcdn.com/imgs/j/f/3/large/Bentag-Exerciser-Single-Spring-Tummy-SDL420716614-1-c49e4.jpeg"
                  alt=""
                />
                <p className={style.prides}>
                  Bentag Exerciser Single Spring Tummy Trimmer
                </p>
                <span className={style.pripri1}>Rs 1199</span>
                <span className={style.pripri2}>Rs 279</span>
              </div>

              <div className={style.producis}>
                <img
                  src="https://n1.sdlcdn.com/imgs/i/z/e/large/Bentag-Vegetable-Fruit-Clever-Cutter-SDL841893040-1-ea5e3.jpg"
                  alt=""
                />
                <p className={style.prides}>
                  Bentag kitchenware Vegetable &amp; Fruit Clever Cutter
                </p>
                <span className={style.pripri1}>Rs 499</span>
                <span className={style.pripri2}>Rs 151</span>
              </div>
            </Carousel>
          </div>
        </div>

        <div className={style.flybar}>
          <p className={style.sidep1}>TOP CATEGORIES</p>

          <div className={style.bigsidebar}>
            <img
              className={style.bigimg}
              src="https://i3.sdlcdn.com/img/leftnavicon09/30x30mobile4.png"
              alt=""
            />
            <p className={style.bigp2}>Men's Fashion</p>
          </div>

          <div className={style.bigsidebar}>
            <img
              className={style.bigimg}
              style={{ borderRadius: "50px" }}
              src="https://i2.sdlcdn.com/img/leftnavicon09/30x30home_living2.png"
              alt=""
            />
            <p className={style.bigp2}>Women's Fashion</p>
          </div>

          <div className={style.bigsidebar}>
            <img
              className={style.bigimg}
              src="https://n2.sdlcdn.com/imgs/c/0/x/Homekitchenfurnishing-3eda1.jpg"
              alt=""
            />
            <p className={style.bigp2}>Home &amp; Kitchen</p>
          </div>

          <div className={style.bigsidebar}>
            <img
              className={style.bigimg}
              src="https://i3.sdlcdn.com/img/leftnavicon09/30x30music1.png"
              alt=""
            />
            <p className={style.bigp2}>Toys, Kids' Fashion</p>
          </div>

          <div className={style.bigsidebar}>
            <img
              className={style.bigimg}
              src="https://i1.sdlcdn.com/img/leftnavicon09/fashion30x30_3.png"
              alt=""
            />
            <p className={style.bigp2}>Beauty, Health</p>
          </div>

          <p className={style.sidep1}>MORE CATEGORIES</p>

          <div className={style.bigsidebar2}>
            <p className={style.bigp2}>Automotives</p>
          </div>
          <div className={style.bigsidebar2}>
            <p className={style.bigp2}>Mobile &amp; Accessorie</p>
          </div>
          <div className={style.bigsidebar2}>
            <p className={style.bigp2}>Electronics</p>
          </div>
          <div className={style.bigsidebar2}>
            <p className={style.bigp2}>Sports, Fitness &amp; Outdoor</p>
          </div>
          <div className={style.bigsidebar2}>
            <p className={style.bigp2}>Computers &amp; Gaming</p>
          </div>
          <div className={style.bigsidebar2}>
            <p className={style.bigp2}>Books, Media &amp; Music</p>
          </div>

          <p className={style.sidep1}>TRENDING SEARCHES</p>

          <div className={style.bigsidebar3}>
            <IoIosSearch style={{ fontSize: "14px" }} />
            <p className={style.bigp3}>kurta</p>
          </div>

          <div className={style.bigsidebar3}>
            <IoIosSearch style={{ fontSize: "14px" }} />
            <p className={style.bigp3}>ladies watch women</p>
          </div>

          <div className={style.bigsidebar3}>
            <IoIosSearch style={{ fontSize: "14px" }} />
            <p className={style.bigp3}>sunglasses</p>
          </div>

          <div className={style.bigsidebar3} style={{ marginBottom: "16px" }}>
            <IoIosSearch style={{ fontSize: "14px" }} />
            <p className={style.bigp3}>cotton sarees</p>
          </div>
        </div>

        <img className={style.floatsacnis} src={scan} alt="" />

        <div className={style.plant}>
          <div>
            <img
              className={style.mobile}
              src="https://i2.sdlcdn.com/img/appScreenshot@1x.png"
              alt=""
            />
          </div>
          <div>
            <p className={style.boldshape}>Download Snapdeal</p>
            <p className={style.boldshape2}>App Now</p>
            <p className={style.fast}>Fast, Simple & Delightful.</p>
            <p className={style.fast2}>
              All it takes is 30 seconds to Download.
            </p>
            <img src={google} className={style.gooimg} alt="" />
            <img
              className={style.plant2}
              src="https://i2.sdlcdn.com/img/leaves1x.png"
              alt=""
            />
          </div>
        </div>

        <div className={style.services}>
          <div>
            <img className={style.facility} src={lock} alt="" />
            <p className={style.secp1}>100% SECURE PAYMENTS</p>
            <p className={style.secp2}>
              Moving your card details to a much more
            </p>
            <p className={style.secp3}>secured place</p>
          </div>

          <div>
            <img className={style.facility} src={trust} alt="" />
            <p className={style.secp1}>TRUSTPAY</p>
            <p className={style.secp2}>100% Payment Protection. Easy</p>
            <p className={style.secp3}>Return Policy</p>
          </div>

          <div>
            <img className={style.facility} src={help} alt="" />
            <p className={style.secp1}>HELP CENTER</p>
            <p className={style.secp2}>Got a question? Look no further.</p>
            <p className={style.secp3}>
              Browse our FAQs or submit your query here.
            </p>
          </div>

          <div>
            <img className={style.facility} src={phone} alt="" />
            <p className={style.secp1}>SHOP ON THE GO</p>
            <p className={style.secp2}>Download the app and get exciting</p>
            <p className={style.secp3}>app only offers at your fingertips</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
