<script setup>

defineProps({
    points: {
        required: true
    }
})

</script>

<template>
    <div class="modal-overlay" @click="$emit('close-modal')">
        <div class="modal" @click.stop>
            Résultat du quiz : {{ points }} / 10 <br>
            <button @click="$emit('close-modal')" >
                Correction
            </button>
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
}

.modal {
    text-align: center;
    color: #1e1e1e;
    background-color: white;
    height: 8rem;
    width: 30rem;
    margin-top: 10%;
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
}

.close {
    margin: 10% 0 0 16px;
    cursor: pointer;
}

.close-img {
    width: 25px;
}

button {
    margin: 1rem auto 0;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #1e90ff;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: .2s;

    &:hover {
        background-color: #1e90ff;
        opacity: 0.8;
    }
}
</style>
