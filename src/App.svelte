<script>
  import Main from "./Main.svelte";
</script>

<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;
</style>

<div class="relative bg-gray-50">
  <div class="relative h-screen shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="w-0 flex-1 flex">
          <a
            href="https://docs.amplify.aws/lib/storage/getting-started/q/platform/js"
            class="inline-flex">
            <img
              class="sm:h-8 w-32 sm:w-auto sm:h-10"
              src="https://s3.amazonaws.com/aws-mobile-hub-images/aws-amplify-logo.png"
              alt="Amplify" />
          </a>
        </div>
        <nav
          class="flex spa![image](https://user-images.githubusercontent.com/6764957/95610354-c7e35700-0a92-11eb-815e-e55a64499df6.png)
				ce-x-10">
          <a
            href="https://docs.amplify.aws/lib/storage/getting-started/q/platform/js"
            class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150">
            Docs
          </a>
          <a
            href="https://dev.to/swyx/amplibox-a-self-hosted-file-storage-app-with-aws-amplify-1f6g"
            class="ml-4 text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150">
            Blogpost
          </a>
          <a
            href="https://github.com/sw-yx/demo-amplify-storage-file-upload"
            class="w-6 ml-4 text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1984 2048"><path
                transform="scale(4 4) translate(0 0)"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
          </a>
        </nav>
      </div>
    </div>
    <Main />
    <a
      class="mb-16 flex justify-center"
      href="https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/sw-yx/demo-amplify-storage-file-upload">
      <img
        src="https://oneclick.amplifyapp.com/button.svg"
        alt="Deploy to Amplify Console" />
    </a>
  </div>
</div>
