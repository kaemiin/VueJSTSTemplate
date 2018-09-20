<template>
    <div>
        <h1>{{ msg }}</h1>
        <span v-bind:title="message">
            THIS IS A TEST
        </span>
        <p v-if="seen">NOW U SEE ME :)</p>
        <ol>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>
        <h2>John Don: {{ saySth }}</h2>
        <button v-on:click="reverseMessage">SAY</button>
        <p>{{ action }}</p>
        <input v-model="action">
    </div>
</template>

<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Test extends Vue {
    private saySth = '';
    public data() {
        return {
            msg: '什麼 What?',
            message: new Date().toLocaleString(),
            seen: true,
            todos: [
                { text: 'LEARN TypeScript' },
                { text: 'LEARN Vue' },
                { text: 'LEARN NODEJS' },
            ],
            action: 'RUNNING',
        };
    }
    public created() {
        // TODO
        // console.log('THE MESSAGE IS: ' + this.$data.msg);
    }
    public reverseMessage() {
        this.saySth = 'HAHA';
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
