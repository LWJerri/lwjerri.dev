<script lang="ts">
  import { handleAnchorAbout } from "../../../helpers/handleAnchorAbout";
</script>

<div class="space-y-10">
  <p>
    <a
      class="inline-flex select-none items-baseline font-bold outline-none duration-500 hover:text-[#ED4245]"
      href="#works"
      id="works"
      on:click={(event) => handleAnchorAbout(event, "works")}>[#]</a
    >
    A little about my outstanding projects. I would like to put <span class="text-[#22B8CF]">PoruchBot</span> at the top
    of the list, as this project was developed and supported by the charity organization Spilka Poruch. This project includes
    a bot and CRM of its own design to facilitate the work of volunteers. The bot performs one of the key roles in some records,
    taking on a heavy workload.
  </p>

  <p>
    The second project is <span class="text-[#22B8CF]">TimetableAssistantDUIKT</span>. A bot developed for my university
    to make it easy to see a list of classes on days specified by the user acts as a reminder of classes for the next
    day notifying me of schedule changes and more. More than 100 people are currently using the bot.
  </p>
</div>

<p>You can see more of my projects under "My projects".</p>
