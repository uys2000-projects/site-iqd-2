<template>
  <id-tag id="events" />
  <section class="rounded-borders">
    <h3>Etkinliklerimiz</h3>
    <article >
      <q-carousel
        v-model="slide"
        swipeable
        animated
        arrows
        control-type="regular"
        control-color="white"
        control-text-color="grey-8"
        height="50vh"
        class="rounded-borders"
      >
        <q-carousel-slide
          v-for="i in Array(pages.length).keys()"
          :key="i"
          :name="i"
          class="q-pa-none"
        >
          <q-scroll-area class="fit" >
            <div
              class="q-carousel--padding"
              v-html="update(i)"
            ></div>
          </q-scroll-area>
        </q-carousel-slide>
      </q-carousel>
    </article>
  </section>
</template>


<script>
import { ref } from "vue";
import { getDocument } from "@/services/foruser.js";

export default {
  data() {
    return {
      slide: ref(0),
      pages: [],
      pageCheck: [],
    };
  },
  created() {
    const page = "events";
    getDocument(page, "articles").then((res) => {
      const a = res.get("articles");
      for (const i in a) {
        getDocument(page, a[i]).then((re) => {
          if (re.get("publish")) {
            this.pages.push(re.get("content"));
          }
        });
      }
    });
  },
  methods: {
    update(item) {
      return this.pages[item];
    },
  },
};
</script>

