<script>
    import { onMount } from "svelte";
    let OS = "Unknown OS";
    let downloadLink = "/download/";

    onMount(() => {
        if (navigator.userAgent.indexOf("Win") != -1) {
            OS = "Windows";
            downloadLink += "windows";
        }
        if (navigator.userAgent.indexOf("Mac") != -1) {
            OS = "MacOS";
            downloadLink += "mac-os";
        }
        if (navigator.userAgent.indexOf("Linux") != -1) {
            OS = "Linux";
            downloadLink += "linux";
        }
    });
</script>

<div class="download-container" style="width: fit-content;">
    <a
        href="/download"
        class="btn btn-rounded py-2 px-4 download-btn"
        data-mdb-toggle="modal"
        data-mdb-target="#DownloadConfirmation">
        <i class="bi bi-download" />
        Download v0.0.1
    </a>
</div>
<div
    class="modal fade"
    id="DownloadConfirmation"
    tabindex="-1"
    aria-labelledby="Confirmation for downloading"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content bg-dark">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    Download Confirmation
                </h5>
                <button
                    type="button"
                    class="btn-close"
                    data-mdb-dismiss="modal"
                    aria-label="Close" />
            </div>
            <div class="modal-body">
                Download Swirl for {OS}
            </div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-mdb-dismiss="modal">Cancel</button>
                <a href={downloadLink} class="btn btn-primary" rel="external"
                    >Download</a>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .download-container {
        filter: drop-shadow(0px 0px 40px rgb(74, 0, 224));
        transition: 0.5s;
        &:hover {
            filter: drop-shadow(0px 0px 70px rgb(74, 0, 224));
        }
    }
    .download-btn {
        text-transform: none;
        font-weight: normal;
        font-size: 1.2rem;
        background-color: rgb(74, 0, 224);
        color: white;
        i {
            transition: 0.5s;
        }
        &:hover {
            background-color: rgb(60, 0, 180);
        }
    }
</style>
