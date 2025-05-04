<script lang="ts">
  import Divider from "../ui/Divider.svelte";
  import Section from "./Section.svelte";
</script>

<div>
  <Section title="Intro">
    <div slot="title" class="group relative mb-5 block h-full select-none">
      <img
        alt="PHOTO_WITH_ME"
        src="me.webp"
        class="absolute inset-0 h-full w-full rounded-md object-cover opacity-75 transition-opacity select-none group-hover:opacity-50"
      />

      <div class="relative p-8">
        <p class="font-bold">Me in my happy childhood 💖</p>

        <div class="mt-96">
          <div
            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p>This photo was taken in kindergarten for the new year, where I played the role of a clown.</p>
          </div>
        </div>
      </div>
    </div>

    <p slot="body">
      Hello, stranger! <span class="text-[#5862F2]">My name is Andrii, I was born in 2005 in Ukraine</span>, I graduated
      from high school in 11th grade and went to university in Kyiv. I started my way to programming in the 5th grade,
      when I was playing servers in the popular game Minecraft and I was very curious to know how it all worked under
      the hood. One winter, I was walking with my friend Illia and told him that I supposedly know how to write plugins,
      and he said it was cool and would like to write them too, after coming home, I decided to learn how to do it in
      reality. That is how out of sheer interest I started writing code and I love it so much! I chose backend
      development because
      <span class="text-[#5862F2]">I am interested in knowing how the product works "behind the scenes"</span>, in a
      place where the user sees nothing and does not know how the information is processed, how it is stored, etc.
    </p>
  </Section>

  <Section title="Hobbies & Interests">
    <div slot="title">
      <Divider text="Hobbies & Interests" />
    </div>

    <p slot="body">
      I spend all my free time at my laptop because my hobby is the same as my main occupation - programming. Sometimes
      I watch informative videos about life, about handcrafts or explaining some things in life. I also listen to a lot
      of music, and learn English and Czech, to be able to express my emotions without any restrictions. I love nature,
      traveling with people close to me, I love atmospheric places and moments in my life. I also love to eat, so being
      able to cook is very important to me, even though I'm not really into it.
    </p>
  </Section>

  <Section title="Background Education">
    <div slot="title">
      <Divider text="Background Education" />
    </div>

    <p slot="body">
      Went to school in 2011, where he completed the full 10th grade and the beginning of the 11th, was forced to change
      places through the war, finishing school at another institution. In 2022 I went to the
      <span class="text-[#5862F2]">University of Information & CT</span> in Kyiv to study
      <span class="text-[#5862F2]">Software Engineering</span>. While at school I took part in various IT competitions,
      where I did not take a leading place but got a ton of new experience in the team and not only!
    </p>
  </Section>

  <Section title="My Nickname">
    <div slot="title">
      <Divider text="My Nickname" />
    </div>

    <p slot="body">
      A little history about my nickname LWJerri. It was in 2016, I had a weak computer at the time and I always logged
      into the game Minecraft, but that day I decided to install the latest version of the game, after which it crashed
      because of an error in the library LWJGL. I sat for a long time, looking at this error and for some reason decided
      to perpetuate it by taking the first three letters from that library - LWJ. This was not enough, the nickname came
      out too short and not unique, so I remembered my favorite cartoon Tom and Jerry and my most favorite character
      from this cartoon - little mouse Jerry 🥰. In those years my English was not very good and I made a mistake by
      writing Jerri instead of Jerry to the prefix "LWJ". That's how the unique nickname LWJerri came about.
    </p>
  </Section>
</div>
