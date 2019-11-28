<template>
  <Test :prop-a="a"></Test>
</template>
<script>
import config from '../index'

export default {
  data() {
    return {
      a: config,
    }
  },
}
</script>
