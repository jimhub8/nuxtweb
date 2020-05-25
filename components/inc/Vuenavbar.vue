<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" id="navbar-item" :class="{classA: scrollPosition < 150, classB: scrollPosition > 150}">
    <a class="navbar-brand" href="#">
        <img style="width: 100px; height: auto;margin-top: -60px;" alt="Site logo" src="/images/logo.png">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" style="float: right;margin-right: 200px !important;">
            <li class="nav-item active">
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link to="/about">About Us</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link to="/services">Services</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link to="/contacts">Contact Us</nuxt-link>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
// JS
export default {
    data() {
        return {
            scrollPosition: null

        }
    },

    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    },

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }

}
</script>

<style scoped>
.classA {
    background: rgba(0, 0, 0, 0) !important;
}

.classB {
    background: #f0f0f0 !important;
    color: #000;
}

#navbar-item {
    width: 100% !important;
    position: fixed !important;
}

.classA .navbar-nav>li>a {
    margin: 0 20px;
    color: rgba(255, 255, 255, 0.9);
}

.classB .navbar-nav>li>a {
    margin: 0 20px;
    color: #000;
}

.navbar-light .navbar-nav>li>a[data-v-9427474c]:hover {
    color: rgb(125, 0, 235);
}

.nuxt-link-exact-active {
    color: rgb(125, 0, 235) !important;
    /* border-bottom: solid ; */
}

.nuxt-link-exact-active::before {
    content: "";
    left: 0;
    height: 25px;
    position: absolute;
    bottom: -15px;
    width: 100%;
}

.nuxt-link-exact-active::after {
    opacity: 1;
    left: 10px;
    right: 10px;
    background-color: currentColor;
    bottom: 5px;
    content: "";
    left: 7px;
    height: 1px;
    opacity: 0;
    position: absolute;
    right: 7px;
    transition: .3s opacity;
}

#navbar-item[data-v-9427474c] {
    height: 150px;
}
</style>
