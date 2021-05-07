<script>
  export let name;
  export let avatar;
</script>

<header>
  <h1>Hello. I'm {name}!</h1>
  <img class="avatar" src={avatar} alt={`picture of ${name}`} />
</header>

<style>
  header {
    display: flex;
    flex-direction: row;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .avatar {
    display: block;
    border-radius: 100px;
    overflow: hidden;
    border: 4px solid #ff3e00;
  }
</style>
