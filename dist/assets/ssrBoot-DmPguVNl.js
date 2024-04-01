import { s as shallowRef, e as onMounted, a as computed, bn as readonly } from "./index-D55t7hjx.js";
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
//# sourceMappingURL=ssrBoot-DmPguVNl.js.map
