<script lang="ts">
  import { handleAnchorAbout } from "../../../helpers/handleAnchorAbout";
</script>

<p>
  <a
    class="inline-flex select-none items-baseline font-bold outline-none duration-500 hover:text-[#ED4245]"
    href="#nickname"
    id="nickname"
    on:click="{(event) => handleAnchorAbout(event, 'nickname')}">[#]</a
  >
  A little history about my nickname <span class="text-[#22B8CF]">LWJerri</span>. It was in 2016, I had a weak computer
  at the time and I always logged into the game Minecraft, but that day I decided to install the latest version of the
  game, after which it crashed because of an error in the library LWGL. I sat for a long time, looking at this error and
  for some reason decided to perpetuate it by taking the first two letters from that library -
  <span class="text-[#22B8CF]">LW</span>. This was not enough, the nickname came out too short and not unique, so I
  remembered my favorite cartoon Tom and Jerry and my most favorite character from this cartoon - little mouse Jerry. In
  those years my English was not very good and I made a mistake by writing
  <span class="text-[#22B8CF]">Jerri</span> instead of Jerry to the prefix "LW". That's how the unique nickname LWJerri came
  about.
</p>
