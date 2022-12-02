<script setup>
let codes = reactive([{
        keys: "capote",
        show: false,
        function: () => {
            console.log("capote")
            codes[0].show = !codes[0].show
        },
    }, {
        keys: "abstinence",
        function: () => {
            document.body.querySelector("#app").style.backgroundImage = "url('')"
        },
}])

let pressed = ""

// run on mounted
onMounted(() => {
    window.addEventListener("keyup", (e) => {
        pressed += e.key
        for (const code of codes) {
            if (pressed === code.keys) {
                code.function()
                pressed = ""
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
            @click="codes[0].function"
            v-show="codes[0].show"
            id="capote"
            src="https://media3.giphy.com/media/dJeCjBmoJWVcHqXBCb/giphy.gif"
            alt="easteregg1"
         >
        <Footer/>
    </div>
</template>

<style lang="scss">
@import "~/assets/fonts/recoleta/recoleta.css";
@import "~/assets/fonts/abril-fatface/abrilfatface.css";

body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.5;
    color: #f0f0f0;
    background-color: #1e1e1e;
    font-family: "recoleta-regular", sans-serif;

    h1, h2 {
        font-family: "AbrilFatface", sans-serif;
    }

    div#app {
        min-height: 100vh;
        background-color: #1e1e1e;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

        img#capote {
            position: absolute;
            top: calc(50vh - (clamp(1px, 50vh, 50rem) /2));
            left: calc(50% - (clamp(100px, 50%, 50rem) /2));
            width: clamp(100px, 30%, 50rem);
            z-index: 100;
            border-radius: 50%;
            animation: 1s appear;
            animation-iteration-count: 1;

            @keyframes appear {
                0% {
                    opacity: 0;
                    transform: rotate(0deg);
                }
                10% {
                    transform: rotate(180deg);
                }
                20% {
                    transform: rotate(0deg);
                }
                30% {
                    transform: rotate(180deg);
                }
                40% {
                    transform: rotate(0deg);
                }
                50% {
                    transform: rotate(180deg);
                }
                60% {
                    transform: rotate(0deg);
                }
                70% {
                    transform: rotate(180deg);
                }
                80% {
                    transform: rotate(0deg);
                }
                90% {
                    transform: rotate(180deg);
                }
                100% {
                    opacity: 1;
                    transform: rotate(0deg);
                }
            }
        }
    }
}


.center-children {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
