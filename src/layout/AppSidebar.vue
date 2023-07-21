<script setup>
import AppMenu from './AppMenu.vue';
import { useLayout } from '@/layout/composables/layout';
const {layoutConfig } = useLayout();
</script>

<template>
    <app-menu v-if="!layoutConfig.ralign.value"></app-menu>
    <app-menu v-else-if="layoutConfig.ralign.value" class="_layout-align-menu"></app-menu>
</template>

<style lang="scss" scoped></style>
