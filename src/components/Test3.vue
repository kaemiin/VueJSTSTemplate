<script lang="tsx">
import { CreateElement, VNode } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Test3 extends Vue {
    private blogTitle = 'TITLE3';
    public render(h: CreateElement): VNode {
        return (
            <div class='foo' attribs={{id: 'foo'}}>
                {this.blogTitle}
            </div>
        );
    }
}

// @Component
// export default class Test3 extends Vue {
//     private blogTitle = 'TITLE2';
//     public render(h: CreateElement): VNode {
//         return (
//             <div id='foo'>{this.blogTitle}</div>
//         );
//     }
// }

// @Component
// export default class Test3 extends Vue {
//     private blogTitle = 'TITLE';
//     public render(h: CreateElement): VNode {
//         return (
//             <div id='foo'>Test3</div>
//         );
//     }
// }

// @Component
// export default class Test3 extends Vue {
//     private blogTitle = 'TITLE3';
//     public render(h: CreateElement): VNode {
//         return h('div', {
//             attrs: {
//                 id: 'foo',
//             },
//             }, [this.blogTitle]);
//     }
// }

// @Component
// export default class Test3 extends Vue {
//     public render(h: CreateElement): VNode {
//         return h('div',
//         Array.apply(null, { length: 20 }).map(() => {
//             return h('p', 'hi');
//         }),
//         );
//     }
// }

// @Component
// export default class Test3 extends Vue {
//     @Prop() private msg: string = 'THIS IS A TEST';
//     public render(h: CreateElement): VNode {
//         return h('div', {
//             attrs: {
//                 id: 'foo',
//             },
//             class: {
//                 foo: true,
//                 bar: false,
//             },
//             domProps: {
//                 innerHTML: this.msg,
//             },
//             on: {
//                 click: this.clickHandler,
//             },
//             style: {
//                 color: 'red',
//                 fontSize: '14px',
//             },
//             }, []);
//     }
//     private clickHandler() {
//         // TODO
//         alert('HERE');
//     }
// }

// const test = Vue.component('Test3', {
//     render(h) { // <-- h must be in scope
//         return <div id='foo'>bar</div>;
//     },
// });

// const test = Vue.component('Test3', {
//     render(h) { // <-- h must be in scope
//         return h('div', {
//             attrs: {
//                 id: 'foo',
//             },
//             }, ['sss']);
//     },
// });

// export default test;

</script>

<style scoped>
</style>
