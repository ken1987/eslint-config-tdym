<template>
  <div>
    <Test
      v-for="i in 8"
      :key="i"
      :prop-a="a"
      long-text="loooooooooooooooongText"
    >
      test
    </Test>
  </div>
</template>
<script>
import config from '../index'

export default {
  data() {
    const {
      looooooooooooooooooooooooooooooooooooooooooooonooooooooogoText,
    } = {}
    return {
      a: looooooooooooooooooooooooooooooooooooooooooooonooooooooogoText,
      config,
    }
  },
}
</script>
