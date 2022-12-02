<script setup>
let captchaShow = reactive({show: false});
let resultShow = reactive({show: false});
let correctionShow = reactive({show: false});

const refresh = () => window.location.reload();

const closeModal = () => {
    console.log('close');
    captchaShow.show = false;
    resultShow.show = false;
}

const submit = () => {
    console.log('submit');
    captchaShow.show = true;
}

const questions = reactive([
    {
        title: "Quand à lieu la journée internationale contre le sida ?",
        answers: [
            {text: "8 décembre", correct: false, checked: false},
            {text: "1 décembre", correct: true, checked: false},
            {text: "Le 1er octobre", correct: false, checked: false},
            {text: "Le 1er septembre", correct: false, checked: false},
        ],
        mistakeQ: false,
        manyCorrect: false
    },
    {
        title: "Qu'est ce que le VIH ?",
        answers: [
            {text: "Virus de l'immunodéficience humaine", correct: true, checked: false},
            {text: "Violence Interne à l'Humain", correct: false, checked: false},
            {text: "Virus Intrusif Harry potter", correct: false, checked: false},
            {
                text: "Virage Intérieur H (on a pas trouvé de mot pour le H)",
                correct: false,
                checked: false,
                mistakeP: false
            },
        ],
        mistakeQ: false,
        manyCorrect: false
    },
    {
        title: "Quelle est la durée de vie d'un séropositif ?",
        answers: [
            {text: "1 seconde", correct: false, checked: false},
            {text: "Immortel", correct: false, checked: false},
            {text: "25 ans", correct: false, checked: false},
            {text: "La même que quelqu'un qui n'est pas séropositif", correct: true, checked: false},
        ],
        mistakeQ: false,
        manyCorrect: false

    },
    {
        title: "Quel est le meilleur moyen de contraception ?",
        answers: [
            {text: "League Of Legends", correct: true, checked: false},
            {text: "Être en info", correct: true, checked: false},
            {text: "Préservatif", correct: true, checked: false},
            {text: "La baise en Wi-Fi", correct: true, checked: false},
        ],
        mistakeQ: false,
        manyCorrect: true
    },
    {
        title: "Quelle est l'URL de Sida Info Service ?",
        answers: [
            {text: "sida-info-service.org", correct: true, checked: false},
            {text: "pornhub.com", correct: false, checked: false},
            {text: "github.com", correct: false, checked: false},
            {text: "unicovoit.fr", correct: false, checked: false},
        ],
        mistakeQ: false,
        manyCorrect: false
    },
    {
        title: "Comment le VIH se transmet il ?",
        answers: [
            {text: "Par mail", correct: false, checked: false},
            {text: "Par voie sexuelle", correct: true, checked: false},
            {text: "Comme le covid", correct: false, checked: false},
            {text: "Par protocole HTTP", correct: false, checked: false},
        ],
        mistakeQ: false,
        manyCorrect: false
    },
    {
        title: "Le VIH peut il être soigné ?",
        answers: [
            {text: "Si on demande gentiment", correct: false, checked: false},
            {text: "Non, mais on peut vivre avec", correct: true, checked: false},
            {text: "Oui", correct: false, checked: false},
            {text: "Oui si vous trouvez un traitement", correct: false, checked: false},
        ],
        mistakeQ: false,
        manyCorrect: false
    },
    {
        title: "Peut on avoir une IST à cause du sexe oral ?",
        answers: [
            {text: "Oui", correct: true, checked: false},
            {text: "Non si on se brosse les dents", correct: false, checked: false},
            {text: "Non si on mord", correct: false, checked: false},
            {text: "D, la réponse D (j'espère que tu as la ref)", correct: false, checked: false},
        ],
        mistakeQ: false,
        manyCorrect: false
    },
    {
        title: "Comment se faire dépister pour le VIH ?",
        answers: [
            {text: "En allant au zip", correct: false, checked: false},
            {text: "En se rendant dans un laboratoire", correct: true, checked: false},
            {text: "En mangeant un tacos 3 viandes", correct: false, checked: false},
            {text: "En écoutant du Jul (le J c'est le S)", correct: false, checked: false},
        ],
        mistakeQ: false,
        manyCorrect: false
    },
    {
        title: "L'ultime question : McHack > MakHack ?",
        answers: [
            {text: "Oui", correct: true, checked: false},
            {text: "Oui dans une autre case", correct: true, checked: false},
            {text: "Oui dans la troisième case", correct: true, checked: false},
            {text: "Non", correct: false, checked: false, disabled: true},
        ],
        mistakeQ: false,
        manyCorrect: true
    }
])

let points = 0;
const checkAnswers = () => {
    console.log('Verification en cours....');
    captchaShow.show = false;
    questions.forEach(question => {
        if (question.manyCorrect) {
            question.mistakeQ = true
        }
        question.answers.forEach(answer => {
            if (answer.correct != answer.checked) {
                question.mistakeQ = true
            }
        })
        if (!question.mistakeQ)
            points++
    })
    console.log(points);
    resultShow.show = true;
    correctionShow.show = true;
}


</script>

<template>
    <div
        class="quiz"
    >
        <h1>Quiz</h1>
        <p>
            Ce questionnaire à choix multiples un QCM. Chaque bonne réponse vous rapportes un point (normalement si ça
            bug pas). D'une longueur de 10 questions, ce QCM va vous permettre d'en apprendre énormément sur le VIH et
            sur les IST en général.
        </p>

        <form
            @submit.prevent="submit"
        >
            <ol>
                <li
                    v-for="(question, index) in questions"
                    :key="index"
                >
                    <span
                        :class="{
                            'red': correctionShow.show && question.mistakeQ,
                            'green': correctionShow.show && !question.mistakeQ
                        }"
                    >
                        {{ question.title }}
                    </span>

                    <div
                        v-for="answer in question.answers"
                        :key="index"
                        @click="answer.checked = !answer.checked"
                    >
                        <label
                            :for="answer.text + question.title"
                        >
                            <input
                                v-else
                                type="checkbox"
                                :id="answer.text + question.title"
                                :disabled="correctionShow.show || answer.disabled"
                                @change="answer.checked = !correctionShow.show ? !answer.checked : answer.checked"
                                :data-checked="answer.checked"
                            >

                            <span
                                :class="{
                                    'strike': (question.mistakeQ && correctionShow.show) && !answer.correct,
                                    'green': (question.mistakeQ && correctionShow.show) && answer.correct
                                }"
                            >
                                {{ answer.text }}
                            </span>
                        </label>
                    </div>
                </li>
            </ol>
            <div
                class="center-children"
            >

                <input v-if="!correctionShow.show" type="submit" value="Valider">
                <button
                    v-else
                    @click.prevent="refresh"
                >
                    Retenter
                </button>

            </div>
        </form>

        <Captcha v-if="captchaShow.show" @close-modal="closeModal" @validated="checkAnswers"/>
        <Result v-if="resultShow.show" :points="points" @close-modal="closeModal"/>
    </div>

</template>

<style scoped lang="scss">
.strike {
    text-decoration: line-through;
}

.red {
    color: red;
}

.green {
    color: green;
}

div.quiz {
    margin: 0 2rem 2rem;

    p {
        width: clamp(30rem, 50%, 70rem);
    }

    form {
        ol {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            list-style: none;
            counter-reset: item;

            li {
                margin: 1rem 1.5rem;
                width: 31rem;
                counter-increment: item;

                &:before {
                    content: counter(item);
                    margin-right: 10px;
                    padding: .1rem .5rem .1rem .43rem;
                    display: inline-block;
                    width: max-content;
                    text-align: center;
                    color: white;
                    border-radius: 50%;
                    background: #650808;
                }

                label {
                    margin: 0 0 0 2rem;
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    gap: .5rem;

                    input[type="checkbox"] {
                        -webkit-appearance: none;
                        appearance: none;
                        background-color: #fff;
                        margin: 0;

                        width: 1.15em;
                        height: 1.15em;
                        border: 0.15em solid #ffffff;
                        border-radius: 10rem;
                        transform: translateY(-0.075em);
                        transition: .2s;

                        &:checked {
                            background-color: #ffffff;
                            border: 4px solid #650808;
                        }

                        &:focus {
                            outline: 1px solid #f0f0f0;
                        }

                        &[data-checked="false"]:disabled {
                            background-color: #888888;
                        }
                    }
                }
            }
        }

        input[type="submit"],
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
    }
}
</style>
