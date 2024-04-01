import { s as shallowRef, e as onMounted, a as computed, bn as readonly } from "./index-4OKBOMX4.js";
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
//# sourceMappingURL=ssrBoot-D6Nf4CrG.js.map
