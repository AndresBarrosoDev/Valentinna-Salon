<template>
    <div class="banner-container">
        <div class="title-container">
            <h1 class="ml3 valentinna-salon-title" ref="ml3">
                <span class="letter">V</span>
                <span class="letter">a</span>
                <span class="letter">l</span>
                <span class="letter">e</span>
                <span class="letter">n</span>
                <span class="letter">t</span>
                <span class="letter">i</span>
                <span class="letter">n</span>
                <span class="letter">n</span>
                <span class="letter">a</span>
            </h1>
            <h1 class="ml3 valentinna-salon-title">
                <span class="letter">S</span>
                <span class="letter">a</span>
                <span class="letter">l</span>
                <span class="letter">o</span>
                <span class="letter">n</span>
            </h1>
            <em class="ml3 valentinna-salon-subtitle">
                <span class="letter">D</span>
                <span class="letter">o</span>
                <span class="letter">n</span>
                <span class="letter">d</span>
                <span class="letter">e </span>
                <span class="letter">l</span>
                <span class="letter">o</span>
                <span class="letter">s </span>
                <span class="letter">s</span>
                <span class="letter">u</span>
                <span class="letter">e</span>
                <span class="letter">ñ</span>
                <span class="letter">o</span>
                <span class="letter">s </span>
                <span class="letter">s</span>
                <span class="letter">e </span>
                <span class="letter">h</span>
                <span class="letter">a</span>
                <span class="letter">c</span>
                <span class="letter">e</span>
                <span class="letter">n </span>
                <span class="letter">r</span>
                <span class="letter">e</span>
                <span class="letter">a</span>
                <span class="letter">l</span>
                <span class="letter">i</span>
                <span class="letter">d</span>
                <span class="letter">a</span>
                <span class="letter">d</span>
            </em>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        moveLetters() {
            // Wrap every letter in a span
            let textWrapper = this.$refs.ml3
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            anime.timeline({loop: false})
            .add({
                targets: '.ml3 .letter',
                opacity: [0,1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: (el, i) => 150 * (i+1)
            }).add({
                // targets: '.ml3',
                // opacity: 0,
                // duration: 1000,
                // easing: "easeOutExpo",
                // delay: 1000
            });
        }
    },
    mounted() {
        this.moveLetters();
    }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@700&display=swap');

    .valentinna-salon-title {
        font-weight: 900;
        font-size: 3.5em;
        color: #d6b600;
        // font-family: 'EB Garamond', serif;
    }
    .valentinna-salon-subtitle {
        color: #d6b600;
        font-size: 1.2em;
    }
    .letter {
        margin: 0;
    }
    

</style>