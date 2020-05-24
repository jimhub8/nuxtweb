<template>
<div class="paralax-header parallax-window" data-type="background" data-speed="2" style="background-image: url(&quot;http://anpsthemes.com/transport-new-demos/7/wp-content/uploads/2018/01/intro-about-us.jpg&quot;); background-position: 50% 0px;">

    <div class="page-heading">
        <div class="container">
            <h1>{{ page }}</h1>
            <ul class="breadcrumbs">
                <li>
                  <nuxt-link to="/">Home</nuxt-link>
                    </li>
                <li>{{ page }}</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: ['page']
}
</script>>

<style scoped>
h1 {
  color: #fff;
}
li, li a {
  color: #fff;
  font-size: 19px !important;
}
</style>
