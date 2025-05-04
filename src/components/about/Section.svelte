<script lang="ts">
  import { handleAnchorAbout } from "../../helpers/handleAnchorAbout";

  export let title: string;

  const titleId = title.toLowerCase().replaceAll(" ", "-");
</script>

<div>
  <slot name="title" />

  <div>
    <a
      class="float-left mr-2 items-baseline font-bold outline-hidden duration-300 select-none hover:text-[#ED4245]"
      href="#{titleId}"
      id={titleId}
      data-umami-event="Share '{title}'"
      on:click={(event) => handleAnchorAbout(event, titleId)}>[Share]</a
    >
    <slot name="body" />
  </div>
</div>
