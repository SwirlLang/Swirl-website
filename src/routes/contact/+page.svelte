<div class="spacer" />
<div class="container px-md-0 px-5">
    <h1 class="text-center">Contact Us</h1>
    <form
        action="https://formsubmit.co/0d949e91ae5ed55a5cceae47ceb2b7b1"
        method="POST"
        style="max-width: 40rem;"
        class="mt-4 mx-auto row row-cols-2">
        <div class="col-md col-12 mb-3">
            <label class="form-label" for="contactFormName">Name</label>
            <input
                type="text"
                id="contactFormName"
                class="form-control"
                name="name" />
        </div>
        <!-- Email input -->
        <div class="col-md col-12 mb-3">
            <label class="form-label" for="contactFormEmail"
                >Email address</label>
            <input
                type="email"
                id="contactFormEmail"
                class="form-control"
                name="email" />
        </div>
        <!-- subject -->
        <div class="col-12">
            <div class="mb-3">
                <label class="form-label" for="contactFormSubject"
                    >Subject</label>
                <input
                    type="text"
                    id="contactFormSubject"
                    class="form-control"
                    name="_subject" />
            </div>
            <!-- Message input -->
            <div class="mb-3">
                <label class="form-label" for="contactFormNMessage"
                    >Message</label>
                <textarea
                    type="text"
                    style="height: 13rem;"
                    id="contactFormMessage"
                    rows="10"
                    maxlength="550"
                    class="form-control"
                    name="message" />
            </div>
            <!-- honeypot -->
            <input type="text" name="_honey" style="display:none" />
            <!-- success page -->
            <input
                type="hidden"
                name="_next"
                value="http://swirl-lang.vercel.app/contact/success" />
            <!-- Submit button -->
            <button type="submit" class="btn btn-primary rounded-pill mb-3"
                >Send message</button>
        </div>
    </form>
</div>

<style lang="scss" global>
    input,
    textarea {
        resize: none;
    }
    .form-outline .form-control {
        & ~ .form-notch div {
            border: 1px solid $dark-1;
        }
    }
</style>
