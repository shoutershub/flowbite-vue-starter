<template>
    <div class="items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:flex">
        <a
          href="#"
          class="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <img
            class="w-5 h-5 mr-2"
            src="@/assets/images/icons/google.svg"
            alt="google"
          />
          {{ $t('auth.extras.sso.googleSso') }}
        </a>
      </div>
</template>