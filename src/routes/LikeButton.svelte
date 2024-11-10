<script>
  let likes = 0;

  function handleLike() {
    likes += 1;
  }
</script>

<button on:click={handleLike}>
  Like ({likes})
</button>
