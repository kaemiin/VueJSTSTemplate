<template>
  <div class="test">
    <AntDesignTest1 />
  </div>
</template>

<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator';
import AntDesignTest1 from '@/components/AntDesignTest1.vue';

@Component({
  components: {
    AntDesignTest1,
  },
})
export default class AntDesignView extends Vue {}
</script>
