<style>
    .book-grid {
        display: grid;
        grid-template:
					"a"
					"b"
					"c"
					"d";
    }

    .book-grid > * {
        padding-bottom: 0.5rem;
    }

    .title {
        grid-area: title;
    }

    .pages {
        grid-area: pages;
    }

    .date {
        grid-area: date;
    }

    .isbn {
        grid-area: isbn;
    }

    @media (min-width: 600px) {
        .book-grid {
            grid-template:
							"title title title"
							"pages  date  isbn" / 1fr 2fr 2fr;
        }
    }
</style>

<script lang="ts">
	import { Search } from 'lucide-svelte';
	import { dateToString } from '$lib/utils';
	import { type Book } from '$lib/backendApi';

	export let placeholder = '';
	export let items: Book[] = [];

	let searchText = '';

	$: results = items.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase())).slice(0, 10);
</script>

<div class="flex flex-row gap-2 border-2 border-solid border-theme-gray p-1 rounded">
	<input {placeholder} bind:value={searchText} class="flex-grow appearance-none outline-none" />
	<Search class="text-theme-gray" />
</div>

{#if searchText !== ""}
	<div class="border-theme-gray border-2 p-4 flex flex-col">
		{#if results.length === 0}
			<p>No results found.</p>
		{/if}
		{#each results as book}
			<div class="border-b-2 border-theme-gray py-4 book-grid">
				<p class="bold title">{book.title}</p>
				<p class="pages">Pages: {book.numberPages}</p>
				<p class="date">Published: {dateToString(new Date(book.publicationDate))}</p>
				<p class="isbn">ISBN: {book.isbn13}</p>
			</div>
		{/each}
	</div>
{/if}
