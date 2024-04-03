<template>
    <v-layout class="rounded rounded-md">
        <v-app-bar>
            <template #prepend>
                <v-toolbar-title>
                    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    <RouterLink :to="{ name: 'default' }" class="text-decoration-none">
                        My Awesome App
                    </RouterLink>
                </v-toolbar-title>
            </template>
            <template #append>
                <!-- <v-avatar color="blue" size="50">
                    <span>VR</span>
                </v-avatar> -->
                <!-- <v-avatar image="https://shorturl.at/uLNRZ" size="50" rounded="0" >
                </v-avatar> -->
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-avatar v-bind="props" color="blue" size="50">
                            <span>VR</span>
                        </v-avatar>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in ['Profile', 'Settings', 'Logout']" :key="index"
                            :value="index">
                            <v-list-item-title @click="console.log(item)">{{ item }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer">
            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-note-outline" title="Posts" :to="{ name: 'Posts' }"></v-list-item>
                <v-list-item prepend-icon="mdi-comment-outline" title="Comments"
                    :to="{ name: 'Comments' }"></v-list-item>
                <v-list-item prepend-icon="mdi-star-outline" title="Reviews" :to="{ name: 'Reviews' }"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main style="min-height: 300px;">
            <div class="pa-5">
                <router-view></router-view>
            </div>
        </v-main>
    </v-layout>
</template>

<script setup>
import { ref } from "vue";
const drawer = ref(true);

</script>

<style scoped></style>