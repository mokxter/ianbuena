<template>
  <div class="container">
    <section>
      <h3 class="introduction">Hello, I am</h3>
      <h1 class="name">{{ title }}</h1>
      <span class="profession">Web Developer</span>
    </section>
    <section></section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Ian Cristopher Buena',
    }
  },
}
</script>

<style lang="postcss" scoped>
.container {
  @apply min-h-screen flex items-center text-left mx-auto;
}

.introduction {
  @apply block text-4xl;
}

.name {
  @apply block font-extralight text-7xl;
  color: #35495e;
  letter-spacing: 1px;
}

.profession {
  @apply block font-extralight text-3xl;
}
</style>
