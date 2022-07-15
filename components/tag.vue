<template> 
<div>
    <h1>Pluginの動作確認</h1>
    <smart-tagz
    autosuggest
    editable
    inputPlaceholder="Select Countries ..."
    :sources="sources"
    :allowPaste="{delimiter: ','}"
    :allowDuplicates="false"
    :maxTags="20"
    :defaultTags="['javascript', 'node.js', 'vue.js']" />
  </div>
  </template> 

<script>
import { SmartTagz } from "smart-tagz";
import "smart-tagz/dist/smart-tagz.css";
import { defineComponent } from "vue";
import { deflate } from "zlib";

export default defineComponent({
    cmponents: {
       SmartTagz, 
    },
    
})

</script>

<style>
.container {
  margin: 0 auto;
  margin-top: 200px;
  min-height: 100vh;
  width: 500px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>