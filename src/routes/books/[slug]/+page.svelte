<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { dateAdd } from '$lib/utils';

  function goBack() {
    goto('/');
  }

  let startTime = new Date();
  let endTime = dateAdd(startTime, 'month', 3);

  $: startTimeString = startTime.toISOString().split('T')[0];
  $: endTimeString = endTime.toISOString().split('T')[0];

  function onSubmit(event) {
    event.preventDefault();
    console.log(event);
  }
</script>

<main>
  <h1>{$page.data.book.title}</h1>
  <p>This is the second page.</p>
  <form on:submit={onSubmit}>
    <input type="date"
           value={startTimeString}
           min={startTimeString}
           max={endTimeString} />
    <button>Lend book</button>
  </form>
  <button on:click={goBack}>Go Back to Main Page</button>
</main>
