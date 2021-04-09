<!-- <script>
  import { onMount } from 'svelte';

  import { getUserInfo } from './github';
  export let name;
  export let avatar;

  onMount(async () => {
    const { name: userName, avatar_url } = await getUserInfo('elkirkmo');
    name = userName;
    avatar = avatar_url;
  });
</script> -->

<!-- <main>
  <h1>Hello {name}!</h1>
  <img class="avatar" src={avatar} alt={`picture of ${name}`} />
</main> -->

<main>
  <h1>Hey</h1>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .avatar {
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 100px;
    overflow: hidden;
    border: 4px solid red;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
