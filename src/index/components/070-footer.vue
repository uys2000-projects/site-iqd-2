<template>
    <p>bu siteye bir şey eklenirken kullanılacak editor</p>
  <QuillEditor toolbar="full" />
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
export default {
  components: {
    QuillEditor,
  },
  data() {
    return {
        options :{
            scrollingContainer:"200px"
        }
    };
  },
};
</script>

<style  >
.ql-editor{
    min-height: 400px;
}
</style>