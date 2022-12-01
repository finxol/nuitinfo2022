<script setup>
const pages = [
    { title: 'Accueil', path: '/' },
    { title: 'Quiz', path: '/quiz' },
    { title: 'A Propos', path: '/about' },
]
</script>

<template>
    <header>
        <h1>En tête (à tête)</h1>

        <nav>
            <NuxtLink
                v-for="page in pages"
                :key="page.title"
                :to="page.path"
            >
                {{ page.title }}
            </NuxtLink>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem;
    padding: 0 1rem 1rem;
    border-bottom: 1px solid #f0f0f0;

    h1 {
        font-size: 1.5rem;
    }

    nav {
        display: flex;
        gap: 1rem;

        a {
            display: block;
            padding: 0.5rem 1rem;
            background-image: linear-gradient(to right, #e1e1e1, #e1e1e1);
            background-position: bottom left;
            background-repeat: no-repeat;
            background-size: 100% 2px;
            color: #f0f0f0;
            text-decoration: none;
            transition: 0.25s ease;

            &:hover {
                background-size: 100% 100%;
                color: #1e1e1e;
            }
        }
    }
}
</style>
