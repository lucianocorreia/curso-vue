<template>
    <v-toolbar app dark color="primary">
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>Stock</span>
            <span class="font-weight-light">Trader</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat to="/">Início</v-btn>
            <v-btn flat to="/portfolio">Portfólio</v-btn>
            <v-btn flat to="/stocks">Ações</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn @click="endDay" flat>Finalizar o Dia</v-btn>
            <v-menu offset-y>
                <v-btn flat slot="activator">Salvar & Carregar</v-btn>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title>Salvar Dados</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-title>Carregar Dados</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <v-layout align-center>
                <span class="text-uppercase text--grey text--darken-2">Saldo {{ funds | currency }}</span>
            </v-layout>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    },
    methods: {
        ...mapActions({ randomizeStocksAction: 'randomizeStocks' }),
        endDay() {
            this.randomizeStocksAction();
        }
    }
}
</script>

<style>
</style>
