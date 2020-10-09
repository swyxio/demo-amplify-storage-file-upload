<script>
  import { Storage } from "aws-amplify";
  import { downloadBlob } from "./utils.js";
  export let file;
  export let fileName;
  export let fireToast
  // we put thts in a separate file purely to get local state for this download
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
