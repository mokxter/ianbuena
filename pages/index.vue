<template>
  <div class="container">
    <section class="home">
      <div class="max-width content">
        <h3 class="introduction">Hello, I am</h3>
        <h1 class="name">{{ title }}</h1>
        <span class="profession">Web Developer</span>
        <div class="links">
          <a href="https://github.com/mokxter">
            <i class="bx bxl-github social"></i>
          </a>
          <a href="https://www.linkedin.com/in/ianbuena/">
            <i class="bx bxl-linkedin social"></i>
          </a>
        </div>
      </div>
    </section>
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
.max-width {
  max-width: 1300px;
  padding: 0 80px;
  margin: auto;
}

.container {
}

.home .max-width {
  margin: auto 0 auto 30px;
}

.home .content {
  @apply min-h-screen flex flex-col justify-center;
}

.introduction {
  @apply block text-4xl ml-8;
}

.name {
  @apply block font-semibold text-7xl ml-8;
  letter-spacing: 1px;
}

.profession {
  @apply block text-5xl ml-8;
}

.links {
  @apply block flex flex-row mt-16;
}

.social {
  @apply block text-5xl ml-8;
}

@media (max-width: 1104px) {
  .home .max-with {
    margin-left: 0px;
  }
}

@media (max-width: 991px) {
  .max-width {
    padding: 0 50px;
  }
}

@media (max-width: 947px) {
  .introduction {
    @apply block text-2xl ml-8;
  }

  .name {
    @apply block font-semibold text-5xl ml-8;
    letter-spacing: 1px;
  }

  .profession {
    @apply block text-3xl ml-8;
  }

  .links {
    @apply block flex flex-row mt-12;
  }

  .social {
    @apply block text-4xl ml-8;
  }
}

@media (max-width: 690px) {
  .max-width {
    padding: 0 23px;
  }
}
</style>
