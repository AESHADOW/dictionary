<template>
    <div>
        <header class="p-4 flex justify-end">
            <nav>
                <ul class="flex gap-4">
                    <li  v-motion-roll-visible-left><NuxtLink to="/">home</NuxtLink></li>
                    <li   v-motion-roll-visible-right><NuxtLink to="/about">about</NuxtLink></li>
                    <li   v-motion-roll-visible-bottom><NuxtLink to="/products">products</NuxtLink></li>
                </ul>
            </nav>
        </header>


      <div>
          <slot></slot>
      </div>
      
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #14b8a6;
}
</style>

