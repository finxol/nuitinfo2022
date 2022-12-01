<template>
    <div id="app">
        <Header/>

        <main>
            <NuxtPage/>
        </main>

        <Footer/>
    </div>
</template>

<style scoped lang="scss">
div#app {
    min-height: 100vh;

    main {
        min-height: 100vh;
    }
}
</style>
