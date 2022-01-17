<script>
  import "../app.scss";
  import "../app.scss";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Lambda Code</a>
    <button
      class="navbar-toggler"
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
      </div>
    </div>
  </div>
</nav>
<slot />

<style lang=scss>
nav {
    background-color: #131313 !important;
    a {
        color:white !important;
    }
}

</style>