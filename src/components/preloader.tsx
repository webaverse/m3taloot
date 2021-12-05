import $ from 'jquery';


export const Preloader = () => {
    
    $(document).ready(function() {
        $(window).on('load', function() {
            $('.preloader').fadeOut();
        });
    });

    return (
      <>
        <div id="video">
            <div class="preloader">
                <div class="preloader-bounce">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
  
  </>)
  
}
  