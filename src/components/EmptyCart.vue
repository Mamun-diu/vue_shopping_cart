<template>
    <div class="container my-5" style="text-align: center">
         <b-icon icon="cart-plus-fill " class="cart-icon"></b-icon>
         <div class="mt-4">
             <h4 class="orange-red fw-600">Your cart is empty</h4>
             <h5 class="darkblue fw-600">You can go to home page to view more food items</h5>
         </div>
    </div>
</template>

<script>
export default {
    name: "EmptyCat"
}
</script>

<style scoped>
.orange-red{
    color : orangered;
}
.darkblue{
    color : darkblue;
}
.fw-600{
    font-weight: 600;
}
.cart-icon{
    font-size : 200px;
    color : #09EED6;
}
</style>