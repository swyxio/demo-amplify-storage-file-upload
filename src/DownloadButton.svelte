<script>
  import { Storage } from "aws-amplify";
  import { downloadBlob } from "./utils.js"; 
  // we use a fancy programmatic download option here
  // you could equally use the simpler "signed URL" option shown below
  export let file;
  export let fileName;
  export let fireToast
  // we put this component in a separate file purely to get local state for this download
  let downloading = false;
</script>

<button
  class="border-0"
  class:animate-pulse={downloading}
  on:click={() => {
    downloading = true;
    Storage.get(file.__data.key, { download: true })
      .then((res) => downloadBlob(res.Body, fileName))
      .catch((err) => {
        fireToast('Error deleting file', err.message)
        console.error(err)
      })
      .finally(() => (downloading = false));
  }}>
  {#if downloading}Downloading...{:else}{fileName}{/if}
</button>

<!-- Alternative "signed URL" approach you could also use -->

<!-- <script>
  import {onMount} from 'svelte'
  import { Storage } from "aws-amplify";
  export let file;
  export let fileName;
  let link
  onMount(() => {
    Storage.get(file.__data.key).then(res => {
      link = res
    })
  })
</script>
<a href={link} target="_blank">{fileName}</a> -->