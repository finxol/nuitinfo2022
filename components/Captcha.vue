<script setup>
const captcha = [
    { name: "Josef Ospel", birthday: 1881},
    { name: "Alfons Feger", birthday: 1856},
    { name: "Felix Gubelmann", birthday: 1880},
    { name: "Gustav Schädler", birthday: 1883},
    { name: "Prince Alfred de Liechtenstein", birthday: 1875},
    { name: "Josef Hoop", birthday: 1895},
    { name: "Alexander Frick", birthday: 1910},
    { name: "Gerard Batliner", birthday: 1928},
    { name: "Alfred Hilbe", birthday: 1928},
    { name: "Walter Kieber", birthday: 1931},
    { name: "Hans Brunhart", birthday: 1945},
    { name: "Markus Büchel", birthday: 1953},
    { name: "Mario Frick", birthday: 1965},
    { name: "Otmar Hasler", birthday: 1953},
    { name: "Klaus Tschütscher", birthday: 1967},
    { name: "Adrian Hasler", birthday: 1964},
    { name: "Daniel Risch", birthday: 1978},
    { name: "Pornhub", birthday: 2007}
]

</script>

<template>
    <div>
        <form>
            Captcha de qualité 
            Entrez la date de naissance de ce président
            <input type="number" name="birthday" value=2007 >
            <input type="submit" class="envoyer" value="Valider">

        </form>
    </div>
</template>

<style scoped lang="scss">

</style>
