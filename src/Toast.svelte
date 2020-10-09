<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  export let toast;
  // {
  //   title: string,
  //   message?: string,
  //   closeMe: function
  // } | undefined
</script>

<!-- for purgecss -->
<!-- border-green-500
border-red-500 -->
{#if toast}
  <div
    transition:fly={{ duration: 300, x: 500, opacity: 0.5 }}
    class="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
    <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto border-l-4"
  class:border-green-500={!toast.title.startsWith('Error')}
  class:border-red-500={toast.title.startsWith('Error')}
  >
    <div class="rounded-lg shadow-xs overflow-hidden">
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            {#if toast.title.startsWith('Error')}
              <svg class="h-6 w-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            {:else}
            <!-- Heroicon name: check-circle -->
            <svg class="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {/if}
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm leading-5 font-medium text-gray-900">
              {toast.title}
            </p>
            {#if toast.message}
              <p class="mt-1 text-sm leading-5 text-gray-500">
                {toast.message}
              </p>
            {/if}
          </div>
          <div class="ml-4 flex-shrink-0 flex">
            <button on:click={toast.closeMe} class="border-0 inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150">
              <!-- Heroicon name: x -->
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
{/if}
