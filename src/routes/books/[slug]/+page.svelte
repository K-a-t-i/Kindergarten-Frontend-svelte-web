<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  function goBack() {
    goto('/');
  }
</script>

<main>
  <h1>{$page.data.book.title}</h1>
  <p>This is the second page.</p>
  <button on:click={goBack}>Go Back to Main Page</button>
</main>
