<template>
  <NuxtLayout name="default">
    <NuxtPage v-slot="{ Component }">
      <component :is="Component"/>
    </NuxtPage>
  </NuxtLayout>
  <Teleport to="body">
    <TheNavbar/>
    <!-- <CookiesNotification/> -->
  </Teleport>
</template>

<script lang="ts" setup>

const images = import.meta.glob("./assets/pageMeta/*.{png,svg,ico}", {as: 'url', eager: true});


useHead({
  title: "Phoo Pyae Sone - Full Stack Developer",
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: images["./assets/pageMeta/favicon-32x32.png"],
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      href: images["./assets/pageMeta/favicon-16x16.png"],
      sizes: "16x16",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: images["./assets/pageMeta/apple-touch-icon.png"],
      sizes: "180x180",
    },
    {
      rel: "mask-icon",
      href: images["./assets/pageMeta/safari-pinned-tab.svg"],
      color: "#5bbad5"
    },
    
  ],
})
</script>
