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
    console.log(event);
  }
</script>

<main>
  <h1>{$page.data.book.title}</h1>
  <p>This is the second page.</p>
  <input type="date"
    value={startTimeString}
    min={startTimeString}
    max={endTimeString}
    on:submit={onSubmit} />
  <button on:click={goBack}>Go Back to Main Page</button>
</main>
