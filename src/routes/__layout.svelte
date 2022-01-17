<script>
  import "../app.scss";
  import "../app.scss";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="ps-3 navbar-brand" href="/">Lambda Code</a>
    <button
      class="navbar-toggler pe-3"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <i class="fas fa-bars" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <a class="nav-link" href="/">Home</a>
        <a class="nav-link" href="/about">about</a>
        <a class="nav-link" href="/download">download</a>
        <a class="nav-link" href="/docs">docs</a>
        <div class="social d-flex align-items-center">
            <a class="nav-link" href="https://github.com/Lambda-Code-Organization/Lambda-Code"><i class="fab fa-github"></i></a>
            <a class="nav-link" href="https://discord.gg/RSJ5TUDdqx"><i class="fab fa-discord"></i></a>
        </div>
      </div>
    </div>
  </div>
</nav>

<slot />

<footer class="text-center text-lg-start">
    <!-- Grid container -->
    <div class="container p-4">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5>Lambda Code</h5>
  
          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-dark">About</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Contact</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Privacy Policy</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Terms of service</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5>Download</h5>
  
          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-dark">Linux</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Windows</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Source Code</a>
            </li>
            <li>
              <a href="#!" class="text-dark">All downloads</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->
  
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5>Resources</h5>
  
          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-dark">Docs</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Getting started</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->
  
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5>Support</h5>
  
          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-dark">GitHub Issues</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Forum</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
    <!-- Grid container -->
  
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2022 Copyright <a class="text-dark" href="https://github.com/MrinmoyHaloi/">Mrinmoy Haloi</a>
    </div>
    <!-- Copyright -->
  </footer>

<style lang=scss>
    footer {
        background-color: #131313 !important;
        a {
            color:white !important;
        }
    }
    nav {
        width:100vw;
        position: fixed;
        font-family: roboto;
        font-weight: 500;

        background-color: #131313 !important;
        i {
            color: white
        }
        a {
            color:white !important;
            font-size: 1.4em;
            &:hover {
                color:#d8d8d8 !important;
            }
        }
        .nav-link {
            padding: .3rem 1.3rem;
        }
        .social {
            a {
                padding: .5rem 1rem;
                font-size: 1em;
            }
            .nav-link:hover{
                .fa-discord {
                    color:#7a83e7;
                }
                .fa-github {
                    color:#d8d8d8;
                }
            }
        }
    }

</style>