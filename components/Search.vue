
<template>
        <div class="flex gap-2 h-10 w-80 relative justify-center ">
            <input type="text" id="search" @keyup.enter="search(word)"
             v-model="word" placeholder="search your word here..."
             class="outline-none p-2 border border-teal-400 rounded text-teal-800
              hover:border-teal-700 hover:bg-teal-300 hover:text-teal-100" 
             v-motion-roll-visible-once-left>
            <span 
            class="material-symbols-outlined items-center
             w-8 flex items-center justify-center
             border border-teal-400 rounded text-teal-800
             hover:border-teal-700 hover:bg-teal-300 hover:text-teal-100"
            v-motion-roll-visible-once-right
            @click="search(word)">search</span>
        </div>



        <div :class="wordClass" class="m-4" v-motion-pop-visible>
            <div v-for="(data,index) in wordData" :key="index+data.word"
             class="shadow-lg p-2 text-slate-500 bg-slate-300 rounded my-4"
             :class="data.meanings.length>1?'grid grid-cols-1 md:grid-cols-2':''"
              v-motion-slide-visible-once-right>
                <h1 class="text-sky-700 font-bold"> {{ data.word }}</h1>
                <p class="text-fuchsia-400"> {{ data.phonetics[0].text }}</p>

                <div v-for="meaning in data.meanings" class="m-2 p-2 rounded bg-gray-100 shadow-lg">
                    <p class="text-rose-500 ml-2 font-bold">{{ meaning.partOfSpeech }}</p>
                    <div v-for="(d,index) in meaning.definitions"
                     class="border-x-2 border-teal-700 px-2 m-2"
                     :class="index>3? readMoreClass:''"
                      :key="index" v-motion-slide-visible-once-right>
                       <p>
                         <span class="font-bold text-teal-300">{{(index+1)}}.</span> {{d.definition }} </p>
                       <p v-if="d.antonyms.length>0">antonyms: {{ d.antonyms}} </p>
                       <p  v-if="d.synonyms.length>0">synonyms: {{ d.synonyms }} </p>
                       <p v-if="d.example!=null" class="text-sky-400"> "{{ d.example }}" </p>
                    </div>
                    <button v-if="meaning.definitions.length>4"
                     @click="readMore" class="text-teal-500 font-bold">{{toggle? '...Less':'...More'}}</button>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
import {ref,computed} from 'vue'

const word = ref<string>('')
const wordData = computed(search(word))
const toggle = ref<boolean>(false)

const wordClass = computed(()=>{
    if(wordData.value){
        if(wordData.length>1) return 'grid grid-cols-1 gap-2 md:grid-cols-2'
    }
    else return ''
})
const readMoreClass = computed(()=>{
   return toggle.value ? '' : 'hidden'
})

const url = computed(()=>{
return 'https://api.dictionaryapi.dev/api/v2/entries/en/'+word.value
})

const search = async(word:string) => {
    const {data:{_rawValue:value}} = await useFetch(url.value , {key: word.value})
    toggle.value = false
    return value
}

const readMore = () => {
    toggle.value = !toggle.value
}

</script>

<style>
        *{
                margin: 0;
                padding: 0;
                box-sizing: border-box
        }
</style>
