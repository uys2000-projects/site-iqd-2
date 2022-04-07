<template>
  <id-tag id="about" />

  <section class="rounded-borders">
    <h3>Hakkımızda</h3>
    <q-scroll-area class="fit">
      <article>
        <p ref="text"></p>
      </article>
    </q-scroll-area>
  </section>
</template>

<script>
import { getDocument } from "@/services/foruser.js";
export default {
  created() {
    const page = "about";
    getDocument(page, "articles").then((res) => {
      const a = res.get("articles")[0];
      getDocument(page, a).then((re) => {
        this.$refs.text.innerHTML = re.get("content");
      });
    });
  },
};
</script>

<style scoped>
article {
  width: 100%;
  padding: 40px 20px;
}
</style>