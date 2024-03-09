<template>
  <a
      :href="link"
      class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm"
  >
    <img
        :alt="name"
        :src="image"
        class="w-full object-cover rounded-md slg:h-48"
    />
    <div class="flex flex-col justify-between gap-4 slg:gap-5">
      <span class="font-theme_bold text-lg text-head_text slg:text-xl">
        {{
          name
        }}
      </span>
      <div class="overflow-hidden overflow-ellipsis max-w-xs">
        {{ description }}
      </div>
    </div>
  </a>
</template>
<script>
import {computed} from 'vue';
export default {
  props: ["name", "image", "description", "tech", "link"],
  setup(props) {
    // const limitedDescr = computed(() => props.description.slice(0,50));
    // console.log(props.description.slice(0,20));
  },
};
</script>
