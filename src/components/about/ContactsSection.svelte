<script lang="ts">
  import type { AboutData } from "$lib/data/about";
  import { copyAnchorShareUrl } from "$lib/navigation/scrollToHash";
  import Contact from "../ui/Contact.svelte";

  let { contacts }: { contacts: AboutData["contacts"] } = $props();

  let copied = $state(false);

  async function shareContacts() {
    await copyAnchorShareUrl("contacts");

    copied = true;

    setTimeout(() => {
      copied = false;
    }, 2000);
  }
</script>

<div class="space-y-5">
  <h1 class="flex items-center space-x-2 text-2xl">
    <div class="wrap-break-word">
      <span id="contacts" class="text-[#ED4245]">Contacts</span>
    </div>

    <button
      type="button"
      class="outline-hidden duration-300 select-none hover:cursor-pointer hover:text-[#ED4245]"
      data-umami-event="Share 'Contacts'"
      onclick={shareContacts}>{copied ? "[Copied]" : "[Share]"}</button
    >
  </h1>

  <p>
    If you have any questions you can contact with me in <Contact {contacts} service="telegram" /> or via
    <Contact {contacts} service="discord" />. Also, I sometimes stream on my <Contact {contacts} service="twitch" />, so
    feel free to join and ask me about some thing in chat.
  </p>
</div>
