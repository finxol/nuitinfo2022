<script setup>
const emit = defineEmits(['elapsed'])

let date = new Date();
date.setMinutes(date.getMinutes() + 2);

// Update the countdown every 1 second
let x = setInterval(function() {
    let now = new Date();
    let deltaSeconds = Math.floor((date - now) /1000);

    if (deltaSeconds < 0) {
        clearInterval(x);
        emit('elapsed')
        return;
    }

    let minutes = Math.floor(deltaSeconds / 60);
    let seconds = deltaSeconds % 60;
    timer.string = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

}, 1000);


let timer = reactive({
    string: "2:00",
});
</script>

<template>
<span>
    {{ timer.string }}
    {{ date < new Date() ? '⌛' : '⏳' }}
</span>
</template>

<style scoped lang="scss">
span {
    margin: 0 5rem 0 0;
    font-size: 2rem;
    font-weight: bold;
}
</style>
