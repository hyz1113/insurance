<template>
  <div>
    <el-form
      ref="form"
      :model="formData"
      label-position="left"
      :label-width="labelWidth"
      size="mini"
      :rules="rules"
    >
      <el-form-item
        v-for="(item, index) in formConfig"
        :label="item.label"
        :key="index"
        :prop="item.value"

      >

        <div v-if="item.mesg" class="f-12 g-c">{{ item.mesg }}</div>

        <component
          v-model="formData[item.value]"
          :placeholder="item.tip"
          :is="components[index].tag"
          :disabled="item.disabled?item.disabled:false"
        >

          <template v-if="item.option && !item.hide">

            <component
              v-for="option in item.option.data"
              :key="option.value"
            :is="
              `el-${item.type === 'select' ? 'option' : components[index].type}`
            "
             :label="item.type === 'select' ? option.label : option.value"
              :value="option.value"
              :disabled="option.disabled"
              >{{ option.label }}
            </component>
          </template>
        </component>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "base-Baseform",
  props: {
    formConfig: {
      require: true,
      type: Array
    },
    formData: {
      require: true,
      type: Object
    },
    labelWidth: {
      require: false,
      type: String,
      default: "100px"
    },
    rules: {
      type: Object
    }
  },
  computed: {
    components() {
      const component = {
        input: "el-input",
        radio: "el-radio-group",
        checkbox: "el-checkbox-group",
        select: "el-select"
        // textarea: "el-input",
        // button: "el-button",

        // date: "el-date-picker",
        // switch: "el-switch",
      };
      const config = this.formConfig;
      const componentName = config.map(item => item.type);
      //debugger
      const hasComponent = componentName.map(item => {
        console.log(item);
        return {
          type: item,
          tag: component[item]
        };
      });

      //console.log(this.rules);
      return hasComponent;
    }
  }
};
</script>
