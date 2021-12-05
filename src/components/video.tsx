import { createSignal } from "solid-js";
import mobileVideo from '../assets/media/mobile_video.mp4';
import desktopVideo from '../assets/media/desktop_video.mp4';

export const Video = () => {
    const [src, setSrc] = createSignal('');
    const [type, setType] = createSignal('');

    var w = window.matchMedia('(max-width: 480px)');
    setType('video/mp4');

    if (w.matches) {
        setSrc(mobileVideo)
    }else {
        setSrc(desktopVideo);
    }

    window.addEventListener("resize", function(){
        var w = window.matchMedia('(max-width: 480px)');
    
        if (w.matches) {
            setSrc(mobileVideo)
        }else {
            setSrc(desktopVideo);
        }
    });


    return (
      <>
        <video autoplay muted loop>
            <source src={src()} type={type()}></source>
        </video>
      </>)  
}
  