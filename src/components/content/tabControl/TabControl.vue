<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" :class="{active: currentIndex === index}" @click = "change(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    change(index) {
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  background-color: #fff;
}
.tab-control-item {
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-high-text) ;
}
</style>