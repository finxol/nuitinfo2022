<script setup>
const emit = defineEmits(['validated'])

const captcha = [
    {name: "Josef Ospel", birthday: 1881},
    {name: "Alfons Feger", birthday: 1856},
    {name: "Felix Gubelmann", birthday: 1880},
    {name: "Gustav Schädler", birthday: 1883},
    {name: "Prince Alfred de Liechtenstein", birthday: 1875},
    {name: "Josef Hoop", birthday: 1895},
    {name: "Alexander Frick", birthday: 1910},
    {name: "Gerard Batliner", birthday: 1928},
    {name: "Alfred Hilbe", birthday: 1928},
    {name: "Walter Kieber", birthday: 1931},
    {name: "Hans Brunhart", birthday: 1945},
    {name: "Markus Büchel", birthday: 1953},
    {name: "Mario Frick", birthday: 1965},
    {name: "Otmar Hasler", birthday: 1953},
    {name: "Klaus Tschütscher", birthday: 1967},
    {name: "Adrian Hasler", birthday: 1964},
    {name: "Daniel Risch", birthday: 1978},
    {name: "Pornhub", birthday: 2007}
]

const randomNumber = () => {
    return Math.ceil(Math.random() * 852) % captcha.length
}

let selected = reactive({text: captcha[randomNumber()]})

let birthday = ""
let failed = reactive({show: false});

const submit = () => {
    console.log('submit')
    if (birthday === selected.text.birthday) {
        console.log("captcha valide")
        emit('validated')
    } else {
        console.log("captcha raté")
        failed.show = true
        selected.text = captcha[randomNumber()]
    }
}

</script>

<template>
    <div
        class="modal-overlay"
        @click="$emit('close-modal')"
        @keydown.esc="$emit('close-modal')"
    >
        <div class="modal" @click.stop>
            <form
                @submit.prevent="submit"
            >
                Captcha de qualité <br>
                <h3 v-if="failed.show">Raté! essaye encore :)</h3>

                <span v-if="selected.text.name !== 'Pornhub' ">Entrez l'année de naissance de ce président du Liechtenstein: </span>
                <span v-else>Quel est l'année de création de </span>
                <b>{{ selected.text.name }}</b> <br>
                <input
                    v-model="birthday"
                    type="number"
                    name="birthday"
                    :placeholder="(new Date()).getFullYear()"
                >
                <input
                    type="submit"
                    value="Valider"
                >
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;

    .modal {
        text-align: center;
        color: #1e1e1e;
        background-color: white;
        height: 100px;
        width: 500px;
        margin-top: 10%;
        padding: 60px 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        border-radius: 20px;

        form {
            input {
                padding: .5rem 1rem;
                background-color: #dadada;
                border: 1px solid #e8e8e8;
                border-radius: .5rem;

                &[type="number"] {
                    margin: 1rem .5rem 0 0;

                    appearance: textfield;
                    -moz-appearance:textfield;

                    &::-webkit-outer-spin-button,
                    &::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                        display: none;
                    }
                }

                &[type="submit"] {
                    cursor: pointer;
                    background-color: #1e90ff;
                    color: white;
                    font-weight: bold;

                    &:hover {
                        background-color: #1e90ff;
                        color: white;
                    }
                }
            }

        }
    }
}
</style>
