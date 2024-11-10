<script>
  import { goto } from '$app/navigation';

  function goBack() {
    goto('/');
  }
</script>

<main>
  <h1>Second Page</h1>
  <p>This is the second page.</p>
  <button on:click={goBack}>Go Back to Main Page</button>
</main>
