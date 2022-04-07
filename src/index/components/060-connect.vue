<template>
  <id-tag id="connect" />

  <footer class="q-pa-md rounded-borders fit">
    <h3>Bize Ulaşın</h3>
    <div class="a">
      <!--- Before --->
      <div style="display: flex; flex-wrap: wrap">
        <address vertical-middle style="margin: auto">
          <p ref="text"></p>
        </address>
      </div>

      <q-separator dark vertical />
      <!--- Before --->

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.3384622483927!2d28.98383681557524!3d41.10529862139746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab596fc35b96b%3A0x449d3c8457352b33!2zxLBzdGlueWUgw5xuaXZlcnNpdGVzaSBWYWRpIEthbXDDvHPDvA!5e0!3m2!1sen!2str!4v1642277973961!5m2!1sen!2str"
          class="map"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </footer>
</template>


<script>
import { getDocument } from "@/services/foruser.js";
export default {
  created() {
    const page = "contact";
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
.a {
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
}
.a > div {
  width: calc(50% - 1px);
  padding: 10px;
}
.map {
  width: 100%;
  height: 50vh;
  border: 0;
}
.hori {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.hori > div {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
}
.hori > div > a {
  margin: auto;
}
</style>

