<script>
  import { onMount } from 'svelte';

  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';

  import { getUserInfo } from './github';
  let name = '';
  let avatar;

  onMount(async () => {
    const { name: userName, avatar_url } = await getUserInfo('elkirkmo');
    name = userName;
    avatar = avatar_url;
  });
</script>

<main>
  <Header {name} {avatar} />
  <Footer {name} />
</main>

<style>
  :root {
    --theme-default: blue;
  }
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
