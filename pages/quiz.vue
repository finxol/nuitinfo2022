<script setup>
const client = useSupabaseClient()
const {data: questions} = await useAsyncData('questions', async () => {
    const {data} = await client.from('questions').select('title')
    return data
})
</script>

<template>
    <div>
        <h1>Quiz</h1>
        <ul>
            <li v-for="question in questions" :key="question.title">
                {{ question.title }}
            </li>
        </ul>
    </div>

    <Captcha/>

</template>

<style scoped lang="scss">

</style>
