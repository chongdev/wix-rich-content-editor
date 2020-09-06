<template>
  <div>
    <h1>Tinymce Editor</h1>

    <tinymce-editor
      :apiKey="tinymceKey"
      :init="tinymceOpts"
      v-model="content"
      
    ></tinymce-editor>

    <!-- @onSelectionChange="handlerFunction" -->
    
  </div>
</template>

<script>
// const EditorJS = require('@editorjs/editorjs');
// var editor = new EditorJS(); /** Zero-configuration */
// var editor = new EditorJS('editorjs');

// import { RichContentEditor } from 'wix-rich-content-editor';
import TinymceEditor from "@tinymce/tinymce-vue";
// console.log(TinymceEditor, TinymceEditor.PluginManager);

// TinymceEditor.add("myplugin", function(editor) {
//   editor.ui.registry.addSidebar("mysidebar", {
//     tooltip: "My sidebar",
//     icon: "comment",
//     onSetup: function(api) {
//       console.log("Render panel", api.element());
//     },
//     onShow: function(api) {
//       console.log("Show panel", api.element());
//       api.element().innerHTML = "Hello world!";
//     },
//     onHide: function(api) {
//       console.log("Hide panel", api.element());
//     },
//   });
// });

export default {
  name: "Editor",

  components: {
    TinymceEditor,
  },

  // <svg width="24" height="24"><path d="M5 15.7l3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7zM5 18V19h3l2.8-2.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 01-1-1V4c0-.6.4-1 1-1zm6 8a2 2 0 100-4 2 2 0 000 4z" fill-rule="nonzero"></path></svg>

  data() {
    return {
      tinymceKey: "n5lhmj8k76fzollw226dkn902dzhbhi6y96quvbmww292tso",
      tinymceOpts: {
        // height: 500,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
          "autoresize",
          "image",
        ],

        toolbar:
          "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat",

        branding: false,

        min_height: 500,

        autoresize_bottom_margin: 10,
        // entity_encoding : 'raw',

        // plugins: 'autoresize',

        // element_format : 'html',
        // extended_valid_elements : 'mycustomblock[id],mycustominline',
        // custom_elements : 'mycustomblock,~mycustominline' // Notice the ~ prefix to force a span element for the element
      },

      content: "",

      
    };
  },

  watch: {
    content(val) {
      console.log(val);
    },
  },

  methods:{

    //   handlerFunction(){

    //       console.log( 2322 );
    //   }
    //   testPlugin(){

    //       console.log( 'testPlugin...' );
    //   }
  }
};
</script>

<style></style>
