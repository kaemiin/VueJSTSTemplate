<script lang="tsx">
import { CreateElement, VNode } from 'vue';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Test2 extends Vue {
    private blogTitle = 'TITLE';
    public render(h: CreateElement): VNode {
        return h(
            'div',
            {
                class: 'foo',
                attrs: {
                    id: 'foo',
                },
            },
            [this.blogTitle],
        );
    }
}
</script>

<style scoped>
</style>
