<script lang="ts">
  import { signOut } from '@auth/sveltekit/client';
  import { page } from '$app/stores';
  import { LogOut } from 'lucide-svelte';
  import LentBook from '$lib/components/LentBook.svelte';
  import CourseItem from '$lib/components/CourseItem.svelte';
  import SearchInput from '$lib/components/SearchInput.svelte';
  import LikeButton from './LikeButton.svelte';
  import { goto } from '$app/navigation';

  function handleSignout() {
    signOut();
  }

  function goToSecondPage() {
    goto('/lend');
  }

  let name = $page.data.session?.user?.name;
  // fetch("/lend-book/{book.id}", { credentials: "include" });
  // Backend:
  //   in session nach Nutzerdaten schauen/session gegen zitadel werfen
  //   => DB Eintrag hinzufügen: Nutzer, Buch, BisWann
</script>

<svelte:head>
  <title>Kindergarten Bookstore</title>
</svelte:head>

<div class="flex flex-col gap-8 p-2">
  <div class="text-theme-gray flex items-center gap-2 px-4 justify-between w-full">
    <h1 class="flex items-center gap-2">
      <span class="text-4xl">🌴</span>
      Welcome {name}
      <span class="text-4xl">😊</span>
    </h1>

    <nav>
      <ul class="flex flex-row gap-2">
        <li>
          <button on:click={handleSignout}>
            <LogOut class="inline" />
            <span>Log out</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>

  <div class="flex flex-col gap-2 px-4">
    <h2 class="relative text-lg text-theme-gray w-fit pb-2">
      Books
      <div class="absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-theme-pink" />
    </h2>

    <div class="flex flex-col gap-2">
      <SearchInput placeholder="Search your favorite book or topic" items={$page.data.books} />
      <LentBook title="Book 1" />
      <LentBook title="Book 2" />
    </div>
  </div>

  <div class="flex flex-col gap-2 px-4">
    <h2 class="relative text-lg text-theme-gray w-fit pb-2">
      Courses
      <div class="absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-theme-pink" />
    </h2>

    <div class="flex flex-col gap-2">
      <SearchInput placeholder="Search for courses" />
      <CourseItem title="Course 1" leader="Kati" />
      <CourseItem title="Course 2" leader="Nico" />
    </div>
  </div>

  <!-- LikeButton component -->
  <div class="flex flex-col gap-2 px-4">
    <LikeButton />
  </div>

  <!-- Link to the second page -->
  <div class="flex flex-col gap-2 px-4">
    <button on:click={goToSecondPage}>Go to Second Page</button>
  </div>
</div>
