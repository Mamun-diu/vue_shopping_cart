<template>
    <div class="d-flex food-details-outer">
        <Header></Header>
            <div class="food-details">
                <div class="container mb-5">
                    <h4 class="my-4 fw-600">Add Item to Cart</h4>
                    <div class="row">
                        <div class="col-md-4" style="cursor:ponter;">
                            <img :src="details.url"  width="300px" height="300px" style="border-radius: 15px;">
                        </div>
                        <div class="col-md-4">
                            <h5 class="my-4 fw-600">Name: {{ details.name }} </h5>
                            <h5 class="my-4 fw-600">Price: {{ details.price }} </h5>
                            <h5 class="my-4 fw-600">Description: {{ details.desc }} </h5>
                            <h5 class="my-4 fw-600">Rating: {{ details.rate }} </h5>
                            <div>
                                <button @click="gotoCart" class="btn btn-primary me-1">Go to Cart</button>
                                <button @click="addtoCart" class="btn btn-success me-1">Add Item</button>
                                <button @click="removeItem" class="btn btn-danger me-1">Remove Item</button>
                            </div>
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
    name: "FoodDetails",
    components:{
        Header,
        Footer
    },
    data(){
        return{
            details: this.$route.params,
        }
    },
    methods:{
        gotoCart(){
            this.$router.push('/cart');
        },
        addtoCart(){
            // return this.$store.commit("addToCart")
            this.$store.dispatch("addToCart",this.details)
        },
        removeItem(){
            this.$store.dispatch("removeItem",this.details)
        }
    },
    created(){
        if(this.$route.params.id !== undefined){
            localStorage.setItem('details',JSON.stringify(this.$route.params));
        }
    },
    mounted(){
        this.details = JSON.parse(localStorage.getItem('details'))
    }

}
</script>

<style scoped>
.food-details-outer{
    flex-direction: column;
    height : 100vh;
}
.food-details{
    flex: 1;
}
</style>