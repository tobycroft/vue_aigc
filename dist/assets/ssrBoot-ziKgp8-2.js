import { s as shallowRef, e as onMounted, a as computed, bm as readonly } from "./index-CwHd84mN.js";
function useSsrBoot() {
  const isBooted = shallowRef(false);
  onMounted(() => {
    window.requestAnimationFrame(() => {
      isBooted.value = true;
    });
  });
  const ssrBootStyles = computed(() => !isBooted.value ? {
    transition: "none !important"
  } : void 0);
  return {
    ssrBootStyles,
    isBooted: readonly(isBooted)
  };
}
export {
  useSsrBoot as u
};
