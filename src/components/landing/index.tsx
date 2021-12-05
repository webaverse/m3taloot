import { styled } from 'emotion-solid'
import tw from 'twin.macro'
import withDefaults from '../../utils/with-defaults'
import type { Component, JSX } from 'solid-js'
import jQuery from 'jquery'; 

/** Stylesheets start */
import '../../assets/css/bootstrap.min.css';
// import '../../assets/css/font-awesome.css';
import '../../assets/css/fullpage.min.css';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/animate.css';
import '../../assets/css/templatemo-style.css';
import '../../assets/css/responsive.css';

/** Stylesheets end */


/** Scripts start */

import '../../assets/js/bootstrap.min.js';
import '../../assets/js/scrolloverflow';
import '../../assets/js/jquery.inview.min.js'
import FullPage from '../../assets/js/fullpage.min.js'
import {uiManager} from '../../assets/js/custom';
/** Scripts end */

/** Images */
import bannerImage from '../../assets/media/concept_banner_new.jpeg'
import glam_placeholder from '../../assets/media/glam_placeholder.png';


export type ElementStyledProps = {
  [key: string]: any,
  type?: any,
  border?: string,
  color?: any,
  shape?: any,
  shadow?: boolean,
  imagePath?: string,
  text?: string,
  DISABLED?: boolean
}


uiManager(jQuery,window,document,FullPage);

/***********************************************LAYER-0*****************************************/
const baseStyles_0 = tw``

const errorStyles_0 = () => ({
  // minWidth: '69px',
  // minHeight: '16px',
  // blendMode: 'normal'
});

const stateStyles_0 = ({ DISABLED }: ElementStyledProps) => [
  DISABLED && tw`bg-231f1f`,
]


const markup = () => {

  return (
    <>
     <video id="mediaVideo" autoplay muted loop></video>
      <div id="video">
          <div class="preloader">
              <div class="preloader-bounce">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>

          <header id="header">
              <div class="container-fluid">
                  <div class="navbar">
                      <a href="#" id="logo" title="Elegance by TemplateMo">
                          M3TALOOT
                      </a>
                      <div class="navigation-row">
                          <nav id="navigation">
                              <button type="button" class="navbar-toggle"> <i class="fa fa-bars"></i> </button>
                              <div class="nav-box navbar-collapse">
                                  <ul class="navigation-menu nav navbar-nav navbars" id="nav">
                                      <li data-menuanchor="slide07"><a href="/"><h6>Connect Wallet</h6></a></li>
                                  </ul>

                              </div>
                          </nav>
                      </div>
                  </div>
              </div>
          </header>

          <div id="fullpage" class="fullpage-default">
              <div class="section animated-row" data-section="hero">
                  <div class="section-inner">
                      <div class="welcome-box">
                          <span class="welcome-first animate" data-animate="fadeInUp">Hello, welcome to</span>
                          <h1 class="welcome-title animate" data-animate="fadeInUp">M3TALOOT</h1>
                      </div>
                      <button class="btn btn-primary">Explore</button>

                  </div>
              </div>

              <div class="section animated-row" data-section="concept">
                  <img src={bannerImage} class="rounded" alt="" />
              </div>

              <div class="section animated-row" data-section="megaglam">
                  <img src={glam_placeholder} class="rounded" alt="" />
              </div>

              <div class="section animated-row" data-section="mint">
                  <div class="section-inner">
                      <div class="row justify-content-center">
                          <div class="col-md-7 wide-col-laptop">
                              <div class="title-block animate" data-animate="fadeInUp">
                                  <span>What are you waiting for?</span>
                                  <h2>Mint Now!</h2>
                              </div>
                              <div>
                                  <button class="btn btn-primary">Mint Your M3TALOOT</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>  

      {/* <script>

      var mobileVideo = 'assets/mobile_video.mp4';
      var desktopVideo = 'assets/desktop_video.mp4';

      var w = window.matchMedia("(max-width: 480px)");
      var vid = document.getElementById("mediaVideo");
      var source = document.createElement("source");
      source.id = "videoSrc";
      source.setAttribute("type", "video/mp4");
      vid.appendChild(source);

      if (w.matches) {
      vid.pause();
      source.removeAttribute("src");
      source.setAttribute("src", mobileVideo);
      vid.load();
      vid.play();
      } 
      else {
      vid.pause();
      source.removeAttribute("src");
      source.setAttribute("src", desktopVideo);
      vid.load();
      vid.play();
      }

      window.addEventListener("resize", function(){
      var w = window.matchMedia("(max-width: 480px)");
      var vid = document.getElementById("mediaVideo");
      var source = document.getElementById("videoSrc");

      if (w.matches) {
          vid.pause();
          source.src = mobileVideo;
          vid.load();
          vid.play();
      } 
      else {
          vid.pause();
          source.src = desktopVideo;
          vid.load();
          vid.play();
      }
      });

  </script> */}
</>)

}


const LayerStyled_0 = styled(markup)<ElementStyledProps>(
  baseStyles_0,
  stateStyles_0,
  errorStyles_0
)

/***********************************************LAYER-0*****************************************/





const UIElement: Component<ElementStyledProps> = (props) => {

  let partialState: any = {};
  partialState.DISABLED = true && props.DISABLED;


  return (
    <LayerStyled_0 class="group "  {...props} {...partialState}>
    </LayerStyled_0>
  )
};

export const UI = withDefaults(UIElement, {
  type: 'filled',
  shape: 'square',
  color: 'primary',
  characters: undefined,
  DISABLED: false
});