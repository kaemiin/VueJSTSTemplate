<template>
  <div class="test">
    <Test2 />
    <Test3 />
  </div>
</template>

<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator';
import Test2 from '@/components/Test2.vue'; // @ is an alias to /src
import Test3 from '@/components/Test3.vue';

@Component({
  components: {
    Test2,
    Test3,
  },
})
export default class TestView extends Vue {}
</script>
