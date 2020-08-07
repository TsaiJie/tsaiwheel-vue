<template>
  <div>
    <div style="margin:20px 0px">
      <h3>button</h3>
      <t-button>默认按钮</t-button>
      <t-button icon="settings">默认按钮</t-button>
      <t-button icon="download" icon-position="right">默认按钮</t-button>
      <t-button :loading="true">默认按钮</t-button>
      <t-button disabled>默认按钮</t-button>
    </div>
    <div>
      <h3>button-group</h3>
      <t-button-group>
        <t-button>上一个</t-button>
        <t-button>更多</t-button>
        <t-button>下一个</t-button>
      </t-button-group>
      <t-button-group>
        <t-button icon="left">上一个</t-button>
        <t-button>更多</t-button>
        <t-button icon="right" icon-position="right">下一个</t-button>
      </t-button-group>
    </div>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Button from '../../../src/button';
import ButtonGroup from '../../../src/button-group';
export default {
  data() {
    return {
      content: `
    <div style="margin:20px 0px">
      <t-button>默认按钮</t-button>
      <t-button icon="settings">默认按钮</t-button>
      <t-button icon="download" icon-position="right">默认按钮</t-button>
      <t-button :loading="true">默认按钮</t-button>
      <t-button disabled>默认按钮</t-button>
    </div>
    <div>
      <t-button-group>
        <t-button>上一个</t-button>
        <t-button>更多</t-button>
        <t-button>下一个</t-button>
      </t-button-group>
      <t-button-group>
        <t-button icon="left">上一个</t-button>
        <t-button>更多</t-button>
        <t-button icon="right" icon-position="right">下一个</t-button>
      </t-button-group>
    </div>
    `,
    };
  },
  components: {
    't-button': Button,
    't-button-group': ButtonGroup,
  },
};
</script>
