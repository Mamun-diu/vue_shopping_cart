<template>
    <div class="header">
        <div class="logo">
            <h4 @click="home" class="sweet">Sweet Dish</h4>
            <img src="../../assets/breakfast.png" width="45px" height="45px" style="margin-left : 10px;" alt="">
        </div>
        <div class="d-flex cart">
            <!-- <i class="fas fa-shopping-cart cart-icon"></i> -->
            <b-icon @click="cart" icon="cart-plus-fill " class="cart-icon"></b-icon>
            <span class="cart-count">{{ cartItemCount }}</span>
            <h5 class="login">Login</h5>
            <h5 class="register">Sign Up</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",

    computed:{
        cartItemCount(){
            return this.$store.state.cartItemCount;
        }
    },
    methods:{
        home(){
            this.$router.push('/');
        },
        cart(){
            this.$router.push('/cart');
        }
    }
    
}
</script>

<style scoped>
    .header{
        height : 60px;
        background: lightgray;
        display : flex;
        justify-content: space-between;

    }
    .logo{
        display: flex;
        margin-left : 15px;
        padding : 6px;
        cursor : pointer;
    }
    .sweet{
        color : deeppink;
        font-weight: 600;
        margin-top : 7px;
    }
    .cart-count{
        font-size : 15px;
        color : #d4570cf2;
        padding : 0 5px;
        margin-left : -75px;
        background : #fff;
        height : 20px;
        border-radius: 50%;
        width : 20px;
        
    }
    .cart{
        width : 300px;
        justify-content: space-between;
        padding-top : 3px;
    }
    .cart-icon{
        line-height: 45px;
        font-size : 24px;
        color : #2aa5a0;
        cursor : pointer;
        margin-top : 10px;
    }
    .login, .register{
        font-weight: 600px;
        margin-top: 10px;
    }
    .register{
        margin-right : 10px;
    }
</style>