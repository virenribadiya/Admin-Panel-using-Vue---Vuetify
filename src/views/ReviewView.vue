<template>
    <v-card class="mx-auto pa-6" elevation="10">
      <v-row>
        <!-- First Column -->
        <v-col cols="12" md="4" sm="12" class="">
          <div>
            <div class="d-flex justify-center mt-auto text-h5">
              Rating overview
            </div>
  
            <div class="d-flex align-center flex-column my-auto">
              <div class="text-h2 mt-5">
                3.5
                <span class="text-h6 ml-n3">/5</span>
              </div>
  
              <v-rating
                :model-value="3.5"
                color="yellow darken-3"
                half-increments
              ></v-rating>
              <div class="px-3">3,360 ratings</div>
            </div>
          </div>
        </v-col>
  
        <!-- Second Column -->
        <v-col cols="12" md="" sm="12" class="">
          <div>
            <v-list
              bg-color="transparent"
              class="d-flex flex-column-reverse"
              density="compact"
            >
              <v-list-item v-for="(rating, i) in 5" :key="i">
                <template v-slot:prepend>
                  <span>{{ rating }}</span>
                  <v-icon class="mx-3" icon="mdi-star"></v-icon>
                </template>
                <v-progress-linear
                  :model-value="500"
                  class="mx-n5"
                  color="yellow darken-3"
                  height="20"
                  rounded
                ></v-progress-linear>
                <template v-slot:append>
                  <div class="rating-values">
                    <span class="d-flex justify-end">{{ rating * 224 }}</span>
                  </div>
                </template>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </template>
  
  <style scoped>
    .rating-values {
      width: 25px;
    }
  </style>
  

<script>
</script>

