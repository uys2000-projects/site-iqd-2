<template>
  <q-layout
    @scroll="updateScroll"
    container
    ref="page"
    view="lHh lpr lFf"
    class="shadow-2 text-secondary link-white"
  >
    <q-header reveal elevated class="bg-primary text-secondary">
      <q-toolbar>
        <q-avatar :size="`${logoSize}px`">
          <q-img
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            spinner-color="white"
            class="logo"
          />
        </q-avatar>
        <q-toolbar-title v-if="(size > 700) | (place > 200)" class="text-left">
          Quantum Dynamics
        </q-toolbar-title>

        <q-toolbar-title class="text-right">
          <q-btn
            flat
            round
            dense
            shrink
            :size="`${logoSize / 6}px`"
            @click="toggleRightDrawer"
            icon="dashboard"
            class="orientation-portrait float-right"
          />
        </q-toolbar-title>
        <div class="orientation-landscape">
          <q-tabs
            v-model="tab"
            inline-label
            outside-arrows
            mobile-arrows
            class=""
          >
            <q-tab name="about" icon="mail" label="Biz Kimiz?" />
            <q-tab name="jobs" icon="alarm" label="Çalışmalarımız" />
            <q-tab name="events" icon="movie" label="Etkinliklerimiz" />
            <q-tab name="connect" icon="movie" label="Bize Ulaşın" />
          </q-tabs>
        </div>
      </q-toolbar>
      <q-toolbar v-if="(size <= 700) & (place < 200)">
        <q-toolbar-title class="text-center">
          Quantum Dynamics
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      overlay
      elevated
      v-model="rightDrawerOpen"
      persistent
      no-swipe-open
      side="right"
      behavior="desktop"
      class="bg-primary orientation-portrait"
    >
      <q-tabs v-model="tab" vertical inline-label outside-arrows mobile-arrows>
        <q-tab
          @click="openLink(about)"
          name="about"
          icon="mail"
          label="Biz Kimiz?"
        />
        <q-tab name="jobs" icon="alarm" label="Çalışmalarımız" />
        <q-tab name="events" icon="movie" label="Etkinliklerimiz" />
        <q-tab name="connect" icon="movie" label="Bize Ulaşın" />
      </q-tabs>
    </q-drawer>

    <q-page-container class="ql-editor">
      <q-page class="q-pa-ms">
        <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg"
          ><aboutComp />
        </q-parallax>
        <br />
        <jobsComp />
        <br />
        <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg">
          <eventsComp />
        </q-parallax>
        <br />
        <supportsComp />
        <br />
      </q-page>
      <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg">
        <connectsComp />
      </q-parallax>
    </q-page-container>
  </q-layout>
</template>

<script>
import aboutComp from "./020-about.vue";
import jobsComp from "./030-jobs.vue";
import eventsComp from "./040-events.vue";
import supportsComp from "./050-supports.vue";
import connectsComp from "./060-connect.vue";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

export default {
  components: {
    aboutComp,
    jobsComp,
    eventsComp,
    supportsComp,
    connectsComp,
  },
  data() {
    return {
      rightDrawerOpen: false,
      logoSize: 200,
      tab: null,
      place: 0,
      size: window.innerWidth,
      colors: [],
      colors2: [],
    };
  },
  methods: {
    toggleRightDrawer: function () {
      this.rightDrawerOpen = !this.rightDrawerOpen;
    },
    updateScroll: function (a) {
      this.place = a.position;
      if (a.position < 200) {
        this.logoSize = 200;
      } else {
        this.logoSize = 100;
      }
    },
    openLink: function () {},
  },
  mounted() {},
  watch: {
    tab(t) {
      window.open(`#${t}`, "_parent");
      console.log(t);
    },
  },
};
</script>
<style>
section {
  padding: 10px;
  width: 100%;
  height: 100%;
}
article {
  width: 100%;
  min-height: 40vh;
}
.q-carousel {
  background-color: rgba(0, 0, 0, 0) !important ;
}

id-tag {
  position: relative;
  top: -75px;
}
id-tag:first-of-type {
  top: -200px;
}

article img {
  max-width: 100%;
}
@media (max-width: 500px) {
  * {
    font-size: 10pt;
  }
}
</style>