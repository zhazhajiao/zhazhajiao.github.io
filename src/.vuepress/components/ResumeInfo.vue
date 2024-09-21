<script setup lang="ts">
import { usePageData, usePageFrontmatter } from "vuepress/client";
import Line from './Line.vue'
import Photo from './Photo.vue'

const frontmatter = usePageFrontmatter();

const { name, birthday, phone, email, github, introduce } = frontmatter.value
const gender = (() => {
    const { gender } = frontmatter.value
    switch (gender) {
        case 'M':
        case 'Male':
        case 'Man':
        case '男':
        default:
            return 'male'
        case 'F':
        case 'Female':
        case 'Woman':
        case '女':
            return 'female'
    }
})()

function mergeTexts(texts: (string | number | undefined)[], delimiter = ' / ') {
    let result = ''
    for (const text of texts) {
        if (text) {
            if (result) {
                result += delimiter
            }
            result += text
        }
    } 
    return result
}
const people = mergeTexts([name, gender, birthday])
const school: string = (() => {
    const { school } = frontmatter.value
    return school ?? ''
})()
</script>

<template>
    <div class="info">
        <div class="text">
            <Line :class-name="'people ' + gender" :text="people"/>
            <Line class-name="school" :text="school"/>
            <Line class-name="phone" :href="'tel:' + phone.replace(/-/g, '')" :text="phone"/>
            <Line class-name="email" :href="'mailto:' + email" :text="email"/>
            <Line class-name="github" :href="'https://'+github" :text="github"/>
            <Line class-name="introduce" :text="introduce"/>
        </div>
        <ClientOnly>
            <Suspense>
                <Photo/>
            </Suspense>
        </ClientOnly>
    </div>
</template>

<style scoped>
.info {
    display: flex;
}
</style>