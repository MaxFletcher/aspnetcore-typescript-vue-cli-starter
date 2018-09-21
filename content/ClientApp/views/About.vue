<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Count: {{counter}}</p>
    <button @click="increment()">Increment count</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  // data
  private counter: number = 0;

  // methods
  private increment(): void {
      this.counter++;
  }
}
</script>
