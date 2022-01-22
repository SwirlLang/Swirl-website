<script>
    import Spacer from "$lib/Spacer.svelte"
</script>
<Spacer />
<div class="container text-center">
    <h1>Download</h1>
    <p>You are looking at the all downloads page</p>
    <div class="text-start mx-auto" style="width: fit-content;">
        <div class="d-flex flex-column">
                <a href="/download/windows" class="link-light"><i class="fab fa-windows"></i> Windows</a>
                <a href="/download/mac-os" class="link-light"><i class="fab fa-apple"></i> MacOSX</a>
                <a href="/download/linux" class="link-light"><i class="fab fa-linux"></i> Linux</a>
                <a href="/download/source code" class="link-light"><i class="fas fa-file-archive"></i> Source Code</a>

        </div>
    </div>
</div>
<Spacer/>
<Spacer/>

<style lang=scss>
    a:hover {
        background-color: #2b2b2b;
        border-radius: 18px;
        transition: all 0.2s ease-in-out;
    }
    a {
        font-size: 24px;
        padding: 10px 32px;
    }
    h1 {
        font-size: 54px;
    }
    p {
        font-size: 14px;
    }
    a:hover:nth-child(1) {
        color: #61A6EC;
    }
    a:hover:nth-child(2) {
        color: #b3b9be;
    }
    a:hover:nth-child(4) {
        color: #CD6155;
    }
</style>