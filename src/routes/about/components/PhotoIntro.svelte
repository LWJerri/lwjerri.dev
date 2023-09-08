<script lang="ts">
  import { handleAnchorAbout } from "../../../helpers/handleAnchorAbout";
</script>

<div class="flex flex-col items-center justify-between space-y-2 font-bold sm:flex-row sm:space-y-0">
  <h1 class="text-center text-5xl outline-none sm:flex sm:items-center sm:space-x-2">
    <span class="text-[#ED4245]">About</span>

    <a
      class="select-none outline-none duration-500 hover:text-[#ED4245]"
      href="#photo-intro"
      id="photo-intro"
      on:click="{(event) => handleAnchorAbout(event, 'photo-intro')}">[#]</a
    >
  </h1>

  <a class="text-xl duration-500 hover:text-[#ED4245]" href="Andrii_Zontov.pdf" data-umami-event="Click on CV button"
    >[CV]</a
  >
</div>

<div class="group relative block">
  <div>
    <img
      alt="PHOTO_WITH_ME"
      src="me.webp"
      class="absolute inset-0 h-full w-full select-none rounded-md object-cover opacity-75 transition-opacity group-hover:opacity-50"
    />

    <div class="relative p-8">
      <p class="text-2xl font-bold">Me, but very young ;)</p>

      <div class="mt-96">
        <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <p class="text-sm">
            This photo was taken in kindergarten for the new year, where I played the role of a clown.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
