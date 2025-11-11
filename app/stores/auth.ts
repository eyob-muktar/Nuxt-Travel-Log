import { authClient } from '../lib/auth-client';

export const useAuthStore = defineStore('authStore', () => {
  const loading = ref(false);

  async function signIn() {
    loading.value = true;
    await authClient.signIn.social({
      provider: 'github',
      callbackURL: '/dashboard',
      errorCallbackURL: '/error',
    });
    loading.value = false;
  }

  async function signOut() {
    await authClient.signOut();
  }

  return {
    loading,
    signIn,
    signOut,
  };
});
