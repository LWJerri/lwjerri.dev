<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  onMount(async () => {
    const anchor = window.location.hash.slice(1);

    if (anchor) {
      const findElement = document.getElementById(anchor);

      if (findElement) {
        findElement.getElementsByTagName("input")[0].checked = true;

        if (findElement) {
          window.scrollTo({ top: findElement.offsetTop, behavior: "auto" });
        }
      }
    }
  });

  function handleAnchorClick(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }, id: string) {
    event.preventDefault();

    const link = event.currentTarget;
    const anchor = new URL(link.href).hash;

    const findElement = document.getElementById(id);

    if (findElement) {
      navigator.clipboard.writeText(`${origin}${window.location.pathname}${anchor}`);

      findElement.innerHTML = "[Copied]";

      setTimeout(() => {
        findElement.innerHTML = "[#]";
      }, 2000);
    }
  }
</script>

<svelte:head>
  <title>Andrey Zontov - About me</title>
</svelte:head>

<div class="flex flex-col space-y-16 max-w-4xl px-5 mx-auto">
  <div class="space-y-10">
    <div class="flex justify-between font-bold items-center flex-col space-y-2 sm:flex-row sm:space-y-0">
      <h1 class="text-5xl outline-none text-center sm:flex sm:items-center sm:space-x-2">
        <span class="text-[#ED4245]">About</span>

        <a
          class="hover:text-[#ED4245] duration-500 outline-none"
          href="#about"
          id="about"
          on:click={(event) => handleAnchorClick(event, "about")}>[#]</a
        >
      </h1>
    </div>

    <div class="group relative block">
      <div>
        <img
          alt="PHOTO_WITH_ME"
          src="me.png"
          class="rounded-md absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div class="relative p-8">
          <p class="text-2xl font-bold">Me, but very young ;)</p>

          <div class="mt-96">
            <div
              class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
            >
              <p class="text-sm">
                This photo was taken in kindergarten for the new year, where I played the role of a clown.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p>
      <a
        class="hover:text-[#ED4245] font-bold duration-500 outline-none inline-flex items-baseline"
        href="#bio"
        id="bio"
        on:click={(event) => handleAnchorClick(event, "bio")}>[#]</a
      >
      Hello, traveler! <span class="text-[#22B8CF]">My name is Andrey, I was born in 2005 in Ukraine</span>, I graduated
      from high school in 11th grade and went to university in Kiev. I started my way to programming in the 5th grade,
      when I was playing servers in the popular game Minecraft and I was very curious to know how it all worked under
      the hood. One winter, I was walking with my friend Ilya and told him that I supposedly know how to write plugins,
      and he said it was cool and would like to write them too, after coming home, I decided to learn how to do it in
      reality. That is how out of sheer interest I started writing code and I love it so much! I chose backend
      development because
      <span class="text-[#22B8CF]">I am interested in knowing how the product works "behind the scenes"</span>, in a
      place where the user sees nothing and does not know how the information is processed, how it is stored, etc.
    </p>

    <div class="divider text-[#5865F2] uppercase">Hobbies & Interests</div>

    <p>
      <a
        class="hover:text-[#ED4245] font-bold duration-500 outline-none inline-flex items-baseline"
        href="#hobbies-and-interests"
        id="hobbies-and-interests"
        on:click={(event) => handleAnchorClick(event, "hobbies-and-interests")}>[#]</a
      > I spend all my free time at my laptop because my hobby is the same as my main occupation - programming. Sometimes
      I watch informative videos about life, about handcrafts or explaining some things in life. I also listen to a lot of
      music, and learn English and Czech, to be able to express my emotions without any restrictions. I love nature, traveling
      with people close to me, I love atmospheric places and moments in my life. I also love to eat, so being able to cook
      is very important to me, even though I'm not really into it.
    </p>

    <div class="divider text-[#5865F2] uppercase">Background education</div>

    <p>
      <a
        class="hover:text-[#ED4245] font-bold duration-500 outline-none inline-flex items-baseline"
        href="#school-knowledge"
        id="school-knowledge"
        on:click={(event) => handleAnchorClick(event, "school-knowledge")}>[#]</a
      >
      Went to school in 2011, where he completed the full 10th grade and the beginning of the 11th, was forced to change
      places through the war, finishing school at another institution. In 2022 I went to the
      <span class="text-[#22B8CF]">State University of Telecommunications</span> in Kyiv to study
      <span class="text-[#22B8CF]">Software Engineering</span>. While at school I took part in various IT competitions,
      where I did not take a leading place but got a ton of new experience in the team and not only!
    </p>

    <div class="divider text-[#5865F2] uppercase">Best works</div>

    <div class="space-y-10">
      <p>
        <a
          class="hover:text-[#ED4245] font-bold duration-500 outline-none inline-flex items-baseline"
          href="#best-projects"
          id="best-projects"
          on:click={(event) => handleAnchorClick(event, "best-projects")}>[#]</a
        >
        A little about my outstanding projects. I would like to put <span class="text-[#22B8CF]">PorychBot</span> at the
        top of the list, as this project was developed and supported by the charity organization Spilka Poruch. This project
        includes a bot and CRM of its own design to facilitate the work of volunteers. The bot performs one of the key roles
        in some records, taking on a heavy workload.
      </p>

      <p>
        The second project is <span class="text-[#22B8CF]">DUTCalendarTracker</span>. A bot developed for my university
        to make it easy to see a list of classes on days specified by the user acts as a reminder of classes for the
        next day notifying me of schedule changes and more. More than 100 people are currently using the bot.
      </p>
    </div>

    <p>You can see more of my projects under "My projects".</p>

    <div class="divider text-[#5865F2] uppercase">About my nickname</div>

    <p>
      <a
        class="hover:text-[#ED4245] font-bold duration-500 outline-none inline-flex items-baseline"
        href="#story-about-nickname"
        id="story-about-nickname"
        on:click={(event) => handleAnchorClick(event, "story-about-nickname")}>[#]</a
      >
      A little history about my nickname <span class="text-[#22B8CF]">LWJerri</span>. It was in 2016, I had a weak
      computer at the time and I always logged into the game Minecraft, but that day I decided to install the latest
      version of the game, after which it crashed because of an error in the library LWGL. I sat for a long time,
      looking at this error and for some reason decided to perpetuate it by taking the first two letters from that
      library - <span class="text-[#22B8CF]">LW</span>. This was not enough, the nickname came out too short and not
      unique, so I remembered my favorite cartoon Tom and Jerry and my most favorite character from this cartoon -
      little mouse Jerry. In those years my English was not very good and I made a mistake by writing
      <span class="text-[#22B8CF]">Jerri</span> instead of Jerry to the prefix "LW". That's how the unique nickname LWJerri
      came about.
    </p>
  </div>

  <div class="space-y-5">
    <h1 class="text-4xl text-center sm:flex sm:items-center sm:space-x-2">
      <div class="break-words">
        <span class="text-[#ED4245]">What I use</span>
      </div>
      <a
        class="hover:text-[#ED4245] duration-500 outline-none"
        href="#what-I-use"
        id="what-I-use"
        on:click={(event) => handleAnchorClick(event, "what-I-use")}>[#]</a
      >
    </h1>
    <p>
      When developing projects I use different technologies and programming languages, so that the product came out as
      best as possible and satisfied my desires.
    </p>

    <div class="space-y-2">
      <h2 class="text-[#ED4245] text-xl">Languages</h2>
      <p class="text-[#22B8CF]">{data.languages.join(", ")}</p>
      <p class="text-right">* - have only a basic knowledge.</p>
    </div>

    <div class="space-y-2">
      <h2 class="text-[#ED4245] text-xl">Technologies</h2>
      <p class="text-[#22B8CF]">{data.technologies.join(", ")}</p>
    </div>
  </div>

  <div class="space-y-5">
    <h1 class="text-4xl text-center sm:flex sm:items-center sm:space-x-2">
      <span class="text-[#ED4245]">Socials</span>
      <a
        class="hover:text-[#ED4245] duration-500 outline-none"
        href="#contact"
        id="contact"
        on:click={(event) => handleAnchorClick(event, "contact")}>[#]</a
      >
    </h1>
    <p>
      If you have any questions for me or you just want to talk to me about something, you can use the social networks
      below to contact me.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4">
      {#each data.socialLinks as { name, icon, url }}
        <a href={url} target="_blank" rel="noreferrer" class="hover:text-[#ED4245] duration-500"
          ><div class="flex items-center text-lg space-x-2">
            {@html icon}<span>{name}</span>
          </div></a
        >
      {/each}
    </div>
  </div>
</div>
