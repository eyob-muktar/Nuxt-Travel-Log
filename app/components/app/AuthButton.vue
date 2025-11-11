<script setup lang="ts">
import { authClient } from '~/lib/auth-client';

const { loading, signIn, signOut } = useAuthStore();
const session = authClient.useSession();
</script>

<template>
  <button
    v-if="!session?.data"
    :disabled="loading" class="btn btn-accent" @click="signIn"
  >
    Sign In With Github
    <span v-if="loading" class="loading loading-spinner loading-md" />
    <Icon v-else name="tabler:brand-github" size="22" />
  </button>
  <button
    v-if="session?.data" class="btn btn-accent" @click="signOut"
  >
    Sign Out
  </button>
</template>
