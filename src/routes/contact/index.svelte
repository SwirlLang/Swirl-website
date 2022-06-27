<div class="spacer" />
<div class="container text-center">
    <div>
        <h1>Contact Us</h1>
        <form
            action="https://formsubmit.co/0d949e91ae5ed55a5cceae47ceb2b7b1"
            method="POST"
            style="max-width: 30rem;"
            class="mx-auto">
            <div class="form-floating mb-4">
                <input
                    type="text"
                    id="contactFormName"
                    class="form-control"
                    name="name"
                    placeholder="name" />
                <label class="form-label" for="contactFormName">Name</label>
            </div>
            <!-- Email input -->
            <div class="form-floating mb-4">
                <input
                    type="email"
                    id="contactFormEmail"
                    class="form-control"
                    name="email"
                    placeholder="Email address" />
                <label class="form-label" for="contactFormEmail"
                    >Email address</label>
            </div>
            <!-- subject -->
            <div class="form-floating mb-4">
                <input
                    type="text"
                    id="contactFormSubject"
                    class="form-control"
                    name="_subject"
                    placeholder="Subject" />
                <label class="form-label" for="contactFormSubject"
                    >Subject</label>
            </div>

            <!-- Message input -->
            <div class="form-floating mb-4">
                <textarea
                    class="form-control"
                    style="height:13rem"
                    id="contactFormMessage"
                    rows="10"
                    name="message"
                    placeholder="Message"
                    maxlength="550" />
                <div class="form-helper">
                    <div class="form-counter" />
                </div>
                <label class="form-label" for="contactFormMessage"
                    >Message</label>
            </div>
            <!-- honeypot -->
            <input type="text" name="_honey" style="display:none">
            <!-- success page -->
            <input type="hidden" name="_next" value="http://swirl-lang.vercel.app/contact/success">
            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-rounded mb-4"
                >Send</button>
        </form>
    </div>
</div>

<style lang="scss">
    input,
    textarea {
        resize: none;
        border: 1px solid $dark-1;
        border-radius: 0.3rem;
    }
</style>
