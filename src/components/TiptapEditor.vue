<template>
  <div>
    <h1>Tiptap Editor</h1>

    <div class="editor">
      <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
        <div class="menubar">
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <icon name="bold" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <icon name="italic" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <icon name="strike" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <icon name="underline" />
          </button>
        </div>
      </editor-menu-bar>

      <editor-menu-bubble
        :editor="editor"
        :keep-in-bounds="keepInBounds"
        v-slot="{ commands, isActive, menu }"
      >
        <div
          class="menububble"
          :class="{ 'is-active': menu.isActive }"
          :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
        >
          <button
            class="menububble__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            Bold
          </button>
        </div>
      </editor-menu-bubble>

      <editor-floating-menu
        :editor="editor"
        v-slot="{ commands, isActive, menu }"
      >
        <div
          class="editor__floating-menu"
          :class="{ 'is-active': menu.isActive }"
          :style="`top: ${menu.top}px`"
        >
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            H1
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            H2
          </button>
        </div>
      </editor-floating-menu>
      <editor-content class="editor-body" :editor="editor" />
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";
import {
  Editor,
  EditorMenuBar,
  EditorContent,
  EditorFloatingMenu,
  EditorMenuBubble,
} from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from "tiptap-extensions";

export default {
  components: {
    EditorMenuBar,
    EditorContent,
    EditorFloatingMenu,
    EditorMenuBubble,
    Icon,
  },

  data() {
    return {
      keepInBounds: true,
      editor: null,

      content: "",
    };
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        new Blockquote(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new BulletList(),
        new OrderedList(),
        new ListItem(),
        new TodoItem(),
        new TodoList(),
        new Bold(),
        new Code(),
        new Italic(),
        new Link(),
        new Strike(),
        new Underline(),
        new History(),
      ],
      content:  `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
        `,
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style>
.editor {
  position: relative;
  max-width: 30rem;
  margin: 0 auto 5rem;
  border: 1px solid #000;
  text-align: left;
}
.ProseMirror:focus {
  outline: none;
}

.editor__floating-menu {
  position: absolute;
  z-index: 1;
  margin-top: -0.25rem;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;
}
.menubar {
  border-bottom: 1px solid #000;
  padding: 5px;
}
.editor__floating-menu.is-active {
  opacity: 1;
  visibility: visible;
}

.editor-body {
  padding: 15px;
}

.menububble {
  position: absolute;
  display: -webkit-box;
  display: flex;
  z-index: 20;
  background: #000;
  border-radius: 5px;
  padding: 0.3rem;
  margin-bottom: 0.5rem;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  -webkit-transition: opacity 0.2s, visibility 0.2s;
  transition: opacity 0.2s, visibility 0.2s;
}
.menububble.is-active {
  opacity: 1;
  visibility: visible;
}
.menububble__button {
  display: -webkit-inline-box;
  display: inline-flex;
  background: transparent;
  border: 0;
  color: #fff;
  padding: 0.2rem 0.5rem;
  margin-right: 0.2rem;
  border-radius: 3px;
  cursor: pointer;
}
.menububble__button:last-child {
  margin-right: 0;
}
.menububble__button:hover {
  background-color: hsla(0, 0%, 100%, 0.1);
}
.menububble__button.is-active {
  background-color: hsla(0, 0%, 100%, 0.2);
}
.menububble__form {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.menububble__input {
  font: inherit;
  border: none;
  background: transparent;
  color: #fff;
}
</style>
