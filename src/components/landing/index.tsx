import { styled } from 'emotion-solid'
import tw from 'twin.macro'
import withDefaults from '../../utils/with-defaults'
import type { Component, JSX } from 'solid-js'
import { Preloader } from '../preloader'
import { Header } from '../header'
import jQuery from 'jquery'; 
import { PageSectionSlider } from '../fullpage'
import { Concept } from '../slides/concept'
import { Megaglam } from '../slides/megaglam'
import { Mint } from '../slides/mint'
import { Top } from '../slides/top'
import { Video } from '../video'
/** Stylesheets start */
import '../../assets/css/bootstrap.min.css';
// import '../../assets/css/font-awesome.css';
import '../../assets/css/fullpage.min.css';
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



export type ElementStyledProps = {
//keeping sample props for future reference
//   [key: string]: any,
//   type?: any,
//   border?: string,
//   color?: any,
//   shape?: any,
//   shadow?: boolean,
//   imagePath?: string,
//   text?: string,
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
        <Video></Video>
        <Preloader></Preloader>
        <Header></Header>
        <PageSectionSlider>
            <Top></Top>
            <Concept></Concept>
            <Megaglam></Megaglam>
            <Mint></Mint>
        </PageSectionSlider>
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
//   type: 'filled',
//   shape: 'square',
//   color: 'primary',
//   characters: undefined,
  DISABLED: false
});