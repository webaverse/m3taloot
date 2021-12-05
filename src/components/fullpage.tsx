import $ from 'jquery';
import fullpageMin from '../assets/js/fullpage.min';

export const PageSectionSlider = ({children}) => {
    $(document).ready(function() {
            new fullpageMin('.fullpage-default', {
                licenseKey: ' C7F41B00-5E824594-9A5EFB99-B556A3D5',
                anchors: ['hero', 'concept', 'megaglam', 'mint'],
                menu: '#nav',
                lazyLoad: true,
                navigation: true,
                navigationPosition: 'right',
                scrollOverflow: true,
                responsiveWidth: 768,
                responsiveHeight: 600,
                responsiveSlides: true
            });
    });
    return (
      <>
        <div id="fullpage" class="fullpage-default">
            {children}
        </div>  
      </>)  
}
  