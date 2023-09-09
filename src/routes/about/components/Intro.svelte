<script lang="ts">
  import { handleAnchorAbout } from "../../../helpers/handleAnchorAbout";
</script>

<p>
  <a
    class="inline-flex select-none items-baseline font-bold outline-none duration-500 hover:text-[#ED4245]"
    href="#intro"
    id="intro"
    on:click={(event) => handleAnchorAbout(event, "intro")}>[#]</a
  >
  Hello, traveler! <span class="text-[#22B8CF]">My name is Andrii, I was born in 2005 in Ukraine</span>, I graduated
  from high school in 11th grade and went to university in Kyiv. I started my way to programming in the 5th grade, when
  I was playing servers in the popular game Minecraft and I was very curious to know how it all worked under the hood.
  One winter, I was walking with my friend Ilya and told him that I supposedly know how to write plugins, and he said it
  was cool and would like to write them too, after coming home, I decided to learn how to do it in reality. That is how
  out of sheer interest I started writing code and I love it so much! I chose backend development because
  <span class="text-[#22B8CF]">I am interested in knowing how the product works "behind the scenes"</span>, in a place
  where the user sees nothing and does not know how the information is processed, how it is stored, etc.
</p>
