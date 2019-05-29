<template>
  <div class="task" :class="stateClass">
    <p>{{ task.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: { type: Object, required: true }
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending
      };
    }
  }
};
</script>

<style>
.task {
  box-sizing: border-box;
  width: 250px;
  height: 100px;
  padding: 10px;
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pending {
  border-left: 12px solid #873229;
  background-color: #f44336;
}

.done {
  color: #ddd;
  border-left: 12px solid #0a8f08;
  background-color: #4caf58;
  text-decoration: line-through;
}
</style>
