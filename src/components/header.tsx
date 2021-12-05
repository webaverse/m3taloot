import $ from 'jquery';


export const Header = () => {
    
    $(document).ready(function() {
        $(window).on('load', function() {
            $('.preloader').fadeOut();
        });
    });

    return (
      <>
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
  
  </>)
  
}
  