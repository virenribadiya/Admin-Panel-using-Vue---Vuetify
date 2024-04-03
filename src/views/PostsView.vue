<template>
    <div>
        <h1>Posts</h1>

        <v-text-field v-model="search" label="Search..." prepend-inner-icon="mdi-magnify" variant="outlined"
            hide-details single-line></v-text-field>
        <!-- <v-data-table :items="posts" :hover="true" :headers="headers" item-value="title" show-select> -->
        <!-- <v-data-table :items="posts" :hover="true" :headers="headers" :item-value="(item) => item.title + item.author"
            show-select return-object v-model="selected">
        </v-data-table> -->
        <v-data-table :items="posts" :hover="true" :headers="headers" :item-value="(item) => item.title + item.author"
            show-select v-model="selected" :search="search">
            <template #item.title="{ item }">
                <v-dialog fullscreen>
                    <template v-slot:activator="{ props: activatorProps }">
                        <button v-bind="activatorProps">{{ item.title }}</button>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card title="Edit Post">
                            <v-card-text>
                                <PostForm ref="postForm" :post="item"></PostForm>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn text="Cancel" @click="isActive.value = false"></v-btn>
                                <v-btn text="Save Post" color="blue" @click="postForm.SubmitEvent();isActive.value = false;"></v-btn>

                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </template>
        </v-data-table>
        {{ selected }}
    </div>
</template>

<script setup>
import { ref } from "vue";
import PostForm from "../components/PostForm.vue";
const selected = ref([]);
const search = ref("");
const posts = ref([
    { title: "Post 1", author: "Fred" },
    { title: "Post 2", author: "Wilna" },
    { title: "Post 3", author: "Troy" },
    { title: "Post 4", author: "Fastos" },
    { title: "Post 6", author: "Ben" },
    { title: "Post 7", author: "Fred" },
    { title: "Post 8", author: "Wilna" },
    { title: "Post 9", author: "Troy" },
    { title: "Post 10", author: "Fastos" },
    { title: "Post 11", author: "Ben" },
    { title: "Post 12", author: "Wilna" },
    { title: "Post 13", author: "Troy" },
    { title: "Post 14", author: "Fastos" },
    { title: "Post 15", author: "Ben" }

])
const headers = ref([
    {
        title: 'Post Title',
        align: 'start',
        sortable: false,
        key: 'title',
    },
    {
        title: 'Author',
        align: 'end',
        key: 'author'
    }
])
</script>

<style scoped></style>