<div class="spacer" />
<div class="container text-center">
    <div>
        <p class="note note-warning text-light bg-dark d-inline-block">
            <strong>Warning:</strong> Contact is not working for now.
        </p>
        <h1>Contact Us</h1>
        <form style="max-width: 30rem;" class="mx-auto">
            <div class="form-floating mb-4">
                <input
                    type="text"
                    id="contactFormName"
                    class="form-control"
                    placeholder="name" />
                <label class="form-label" for="contactFormName">Name</label>
            </div>
            <!-- Email input -->
            <div class="form-floating mb-4">
                <input
                    type="email"
                    id="contactFormEmail"
                    class="form-control"
                    placeholder="Email address" />
                <label class="form-label" for="contactFormEmail"
                    >Email address</label>
            </div>

            <!-- Message input -->
            <div class="form-floating mb-4">
                <textarea
                    class="form-control"
                    style="height:13rem"
                    id="contactFormMessage"
                    rows="10"
                    placeholder="Message"
                    maxlength="550" />
                <div class="form-helper">
                    <div class="form-counter" />
                </div>
                <label class="form-label" for="contactFormMessage"
                    >Message</label>
            </div>

            <!-- Checkbox -->
            <div class="form-check d-flex justify-content-center mb-4">
                <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="contactFormCheck"
                    checked />
                <label class="form-check-label" for="contactFormCheck">
                    Send me a copy of this message
                </label>
            </div>

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
