<script>
    import { onMount } from 'svelte';
    import Header from '../components/Header.svelte';
    import Main from '../components/Main.svelte';
    import TimeLine from '../components/TimeLine.svelte';
    import Sidebar from '../components/Sidebar.svelte';
    import data_json from '../components/data.json';

    let data = {};
    const API = data_json;
    data = API;
    console.log(API);

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    :global(body){
        background-color: #fafafa;
        color:rgba(38,38,38,0.7);
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
    }
    :global(h1,h2,h3){
        margin:0;
        padding:0;
    }
</style>

<Header />
<Main>
    <TimeLine posts={data.posts}/>
    <Sidebar {...data.user}/>
</Main>