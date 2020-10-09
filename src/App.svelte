<script>
	import Main from './Main.svelte'
</script>


<div class="relative bg-gray-50">
  <div class="relative h-screen shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="w-0 flex-1 flex">
          <a href="https://docs.amplify.aws/" class="inline-flex">
            <img class="h-8 w-auto sm:h-10" src="https://s3.amazonaws.com/aws-mobile-hub-images/aws-amplify-logo.png" alt="Amplify">
          </a>
        </div>
        <nav class="flex space-x-10">
          <a href="https://docs.amplify.aws/" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150">
            Docs
          </a>
        </nav>
			</div>
		</div>
		<Main />
	</div>
</div>


<style global lang="postcss">

  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;

</style>