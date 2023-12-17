<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">nuxt dojo</NuxtLink> 
            </nav>
        </header>

       <div class="container mx-auto p-4">
        <slot/>
       </div>

       <footer>
        <ul>
                    <li><NuxtLink to="/">home</NuxtLink></li>
                    <li><NuxtLink to="/about">about</NuxtLink></li>
                    <li><NuxtLink to="/products">products</NuxtLink></li>
                </ul>
       </footer>
    </div>
</template>

<style scoped>

</style>