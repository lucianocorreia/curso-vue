import Vue from 'vue';

export default new Vue({
  mathods: {
    alterarIdade(idade) {
      this.$emit("idadeMudou", idade);
    },
    quandoIdadeMudar(callback) {
      this.$on("idadeMudou", callback);
    }
  }
});
