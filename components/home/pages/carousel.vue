<template>
<div style="padding: 30px 0" id="services">
    <div data-v-6225075b="" class="box-title" style="margin: 30px 0px;">
        <h2 data-v-6225075b=""><span data-v-6225075b="">Our Services</span></h2>
    </div>
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item, index) in chunkedItems" :key="index">
            <v-app>
                <v-row>
                    <v-col v-for="product in item" :key="product.id" cols="12" sm="12" md="3" lg="3">
                        <v-hover v-slot:default="{ hover }">
                            <v-card class="mx-auto" color="grey lighten-4" max-width="800">
                                <v-img :aspect-ratio="16/9" :src="product.image" height="300px">
                                    <v-expand-transition>
                                        <div v-if="hover" class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                            <small style="margin: auto;font-size: 20px;">{{ product.title }}</small>
                                        </div>
                                    </v-expand-transition>
                                </v-img>
                            </v-card>
                        </v-hover>

                    </v-col>
                </v-row>
            </v-app>

        </el-carousel-item>
    </el-carousel>
</div>
</template>

<script>
import axios from 'axios'
import {
    mapState
} from "vuex";
export default {
    name: 'slider',
    data() {
        return {
            overlay: true,
            slider_data: [{
                    title: 'Fashion & Lifestyle',
                    image: 'https://cdn.pixabay.com/photo/2018/02/11/16/12/woman-3146093_960_720.jpg',
                },
                {
                    title: 'Cosmetics, Body and Hair Care',
                    image: 'https://image.shutterstock.com/z/stock-photo-a-pink-makeup-bag-with-cosmetic-beauty-products-spilling-out-on-to-a-pastel-colored-background-570190234.jpg',
                },
                {
                    title: 'Medical Courier',
                    image: 'https://cdn.pixabay.com/photo/2016/12/05/19/49/syringe-1884784_960_720.jpg',
                },
                {
                    title: 'Marketing Premiums',
                    image: 'https://cdn.pixabay.com/photo/2016/11/19/21/01/analysis-1841158_960_720.jpg',
                },
                {
                    title: 'Print Media and Communication',
                    image: 'https://cdn.pixabay.com/photo/2018/07/09/13/34/magazine-3526142_960_720.jpg',
                },
                {
                    title: 'Asset Management',
                    image: 'https://cdn.pixabay.com/photo/2016/09/29/17/05/hourglass-1703349_960_720.jpg',
                },
                {
                    title: 'Retail and Wholesale',
                    image: 'https://image.shutterstock.com/z/stock-photo-blurred-image-large-warehouse-with-row-of-aisles-and-shelves-from-floor-to-ceiling-with-bin-number-554648437.jpg',
                },
                {
                    title: 'Food and Beverage',
                    image: 'https://cdn.pixabay.com/photo/2017/08/17/00/26/breakfast-2649620_960_720.jpg',
                },
                {
                    title: 'E-commerce',
                    image: 'https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_960_720.jpg',
                },
                {
                    title: 'Valet Storage',
                    image: 'https://image.shutterstock.com/z/stock-photo-warehouse-interior-with-shelves-pallets-and-boxes-1019498926.jpg',
                },
            ],
        }
    },

    computed: {
        chunkedItems() {
            //     return Array.from(Array(Math.ceil(this.slider_data.length / 3)).values())
            return _.chunk(this.slider_data, 5)
        },
    },

}
</script>

<style>
#mainslider .el-carousel__container {
    height: 60vh !important;
}

/* Make the image to responsive */
#mainslider .image {
    display: block;
    width: 100%;
    height: auto;
}

/* The overlay effect - lays on top of the container and over the image */
#mainslider .overlay {
    position: absolute;
    bottom: 20%;
    background: #c7b9b926;
    /* Black see-through */
    width: 100%;
    transition: .5s ease;
    opacity: 0;
    color: black;
    font-size: 20px;
    padding: 20px;
    text-align: center;
}

/* When you mouse over the container, fade in the overlay title */
#mainslider .container .overlay {
    opacity: 1;
    opacity: 1;
    width: 70%;
    margin: auto;
}

/* .el-carousel--horizontal {
    height: 40vh;
} */

@media only screen and (max-width: 991px) {

    #mainslider img {
        width: 100vw;
        height: 40vh;
    }

    #mainslider .container .overlay {
        display: none;
    }

    .el-carousel--horizontal {
        height: 40vh;
        overflow: hidden;
    }

    .rev_slider .tp-mask-wrap .tp-caption,
    .rev_slider .tp-mask-wrap :last-child,
    .wpb_text_column .rev_slider .tp-mask-wrap .tp-caption,
    .wpb_text_column .rev_slider .tp-mask-wrap :last-child {
        font-size: 16px !important;
        float: left !important;
        margin-left: -110px !important;
    }

}


.el-carousel__indicators--horizontal {
    display: none;
}

.v-application--wrap {
    background: #fff;
}
</style>
