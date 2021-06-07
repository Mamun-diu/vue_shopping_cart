<template>
    <div class="wrapper">
        <Header></Header>
        <div class="content">
            <div class="container mb-5">
                <h4 class="my-4 fw-600 d-blue">Top rated</h4>
                <div class="row">
                    <div @click="foodDetails(items)" v-for="items in topRated" :key="items.id" class="col-md-4 pointer">
                        <img :src="items.url" width="300px" height="300px" style="border-radius: 15px;">
                        <h5 class="fw-600 black">{{items.name}}</h5>
                    </div>
                </div>

                <h4 class="my-4 fw-600 d-blue">All Categories</h4>
                <div class="row">
                    <div @click="foodDetails(items)" v-for="items in allCategories" :key="items.id" class="col-md-4 pointer">
                        <img :src="items.url" width="300px" height="300px" style="border-radius: 15px;">
                        <h5 class="fw-600 black">{{items.name}}</h5>
                    </div>
                </div>

                <h4 class="my-4 fw-600 d-blue">Deshes Near You</h4>
                <div class="row">
                    <div @click="foodDetails(items)" v-for="items in dishesNearYou" :key="items.id" class="col-md-4 pointer">
                        <img :src="items.url" width="300px" height="300px" style="border-radius: 15px;">
                        <h5 class="fw-600 black">{{items.name}}</h5>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>


</template>

<script>
    import Header from './common/Header.vue'
    import Footer from './common/Footer.vue'
    export default {
        name: "Home",
        components: {
            Header,
            Footer
        },
        computed:{
            topRated(){
                return this.$store.state.topRated;
            },
            allCategories(){
                return this.$store.state.allCategories;
            },
            dishesNearYou(){
                return this.$store.state.dishesNearYou;
            }
        },
        methods:{
            foodDetails(item){
                this.$router.push({name: 'food-details', params: item})
            }
        }
    }
</script>

<style scoped>
    .wrapper{
        display: flex;
        flex-direction: column;
        height: 100vh;

    }
    .content{
        background : #efe9e2;
        flex: 1;
        overflow-y: auto;
    }
    .fw-600{
        font-weight: 600;
    }
    .d-blue{
        color : dodgerblue;
    }
    .black{
        color : black;
    }
    .pointer{
        cursor: pointer;
    }
</style>