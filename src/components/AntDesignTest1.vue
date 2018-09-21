<template>
  <div>
    <a-button type="primary">{{ msg }}</a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="danger">Danger</a-button>
    <p>{{ $t("App.systemError") }}</p>
    <font-awesome-icon icon="coffee" />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AntDesignTest1 extends Vue {
  public data() {
      return {
           msg: 'Primary',
      };
  }
}
</script>

<style scoped>
</style>

