<script setup>
const codes = [{
        keys: "capote",
        show: false,
        function: () => {
            codes[0].show = true
        },
    }, {
        keys: "abstinence",
        function: () => {
            document.body.querySelector("#app").style.backgroundImage = "url('')"
        },
}]

let pressed = ""

// run on mounted
onMounted(() => {
    window.addEventListener("keyup", (e) => {
        pressed += e.key
        for (const code of codes) {
            if (pressed === code.keys) {
                code.function()
            }
        }
    })
})
</script>

<template>
    <div id="app">
        <Header/>

        <main>
            <NuxtPage/>
        </main>

        <img
            v-if="codes[0].show"
            id="easteregg1"
            src="https://media.giphy.com/media/3o7TKsQ8U1iZ3Nl7XO/giphy.gif"
        >
    </div>
</template>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #f0f0f0;
    background-color: #1e1e1e;
}
div#app {
    min-height: 100vh;
    background-color: #1e1e1e;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    main {
        min-height: 100vh;
    }
}
</style>
