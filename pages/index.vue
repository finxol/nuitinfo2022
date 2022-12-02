<script setup>

</script>

<template>

    <div class="container">
        <div class="row">
            <!-- left text -->
            <div class="col-2">
                <h1>Sida Info Service</h1>
                <h1>L'association</h1>
                <h1 class="text_info"></h1>
                <p class="text_para"> Sida Info Service (devenue par la suite SIS-Association) agit comme une
                    association
                    engagée dans le domaine de la lutte contre le VIH/sida.</p>

            </div>

            <!-- end left text -->

            <!-- right image -->
            <div class="col-2">
                <div class="avatar">
                    <img class="avatar__image" src="~/public/ruban.webp" alt="Ruban" title="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                </div>
            </div>
        </div>
    </div>

    <div class="missions">
        <section>
            <h1>Les missions de SIS</h1>
            <div class="row_missions">

            </div>
            <div class="row_missions">
                <div class="col-2">
                    <h3>Ecouter</h3>
                    <p>Chaque personne est accueillie avec respect,
                        bienveillance et sans jugement. L’anonymat, la conﬁdentialité et
                        la disponibilité des écoutant.e.s permettent à tous et toutes de
                        pouvoir s’exprimer librement, d’y voir plus clair et parfois de
                        prendre une décision.</p>
                </div>
            </div>

            <div class="row_missions">
                <div class="col-2">
                    <h3>Informer</h3>
                    <p>Chaque personne est accueillie avec respect,
                        bienveillance et sans jugement. L’anonymat, la conﬁdentialité et
                        la disponibilité des écoutant.e.s permettent à tous et toutes de
                        pouvoir s’exprimer librement, d’y voir plus clair et parfois de
                        prendre une décision.</p>

                </div>
            </div>

            <div class="row_missions">
                <div class="col-2">
                    <h3>Orienter</h3>
                    <p>Selon les besoins de chacun.e, SIS Association oriente
                        vers les structures les plus adaptées. Tout est mis en œuvre
                        pour que la prise en charge soit la plus efficace possible au
                        travers des réseaux de soins, des actions sociales et des
                        associations de proximité.</p>

                </div>
            </div>

            <div class="row_missions">
                <div class="col-2">
                    <h3>Témoigner</h3>
                    <p>Avec trois décennies d’expérience dans la relation
                        d’aide à distance, SIS Association est un témoin privilégié de l’
                        évolution de l’épidémie de VIH, mais aussi des maladies connexes,
                        de la vie intime et de toutes les formes de sexualité des appelants
                        et des appelantes. Les écoutant.e.s recueillent les interrogations,
                        les peurs et les discriminations telles que les vivent nos
                        usager.e.s. Grâce aux entretiens réalisés, l’Observatoire collecte
                        des données quantitatives et qualitatives, tout en préservant
                        l’anonymat des personnes, informant sur l’état et les besoins des
                        populations en matière de santé sexuelle.</p>

                </div>
            </div>

            <div class="row_missions">
                <div class="col-2">
                    <h3>Soutenir</h3>
                    <p>Parfois il est nécessaire de parler de sa souffrance.
                        Face aux inquiétudes et à la solitude, les écoutant.e.s de SIS
                        Association sont des interlocuteurs et des interlocutrices
                        attentifs.</p>

                </div>
            </div>

            <div class="row_missions">
                <div class="col-2">
                    <h3>Lutter</h3>
                    <p>Le projet de SIS Association s’appuie sur le respect dû à
                        toute personne, à sa dignité et à sa place au sein de la société. À
                        ce titre, l’association met tout en œuvre pour lutter contre toutes
                        les formes de discriminations et d’exclusions.</p>

                </div>
            </div>

            <div class="separator">
                <!-- Separator line -->
                <div class="separator_language"></div>
            </div>

            <div class="row_missions">
                <div class="col-2">
                    <h3>Les Données en France </h3>
                    <p>- 6 155 personnes ont découvert leur séropositivité en 2018. <br><br>- 52% des personnes ayant découvert leur séropositivité VIH en 2018 n’avaient jamais fait de test de dépistage auparavant. <br><br>- Les femmes représentaient 35% des découvertes de séropositivité VIH en 2018.<br><br>- Par mode de contamination, les personnes ayant découvert leur séropositivité en 2018 ont été contaminées par rapports hétérosexuels (56%), rapports sexuels entre hommes (40%), usage de drogues injectables (2%).</p>

                </div>
            </div>

        </section>
    </div>
    <br><br>


</template>

<style scoped lang="scss">

.row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-left: 50px;
}

.row_missions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}

.col-2 {
    flex-basis: 50%;
    min-width: 100px;
}

.col-2 img {
    max-width: 100%;
    padding: 50px 200px;
}

.container {
    max-width: 1400px;
    margin: auto;
    flex-wrap: wrap;
    justify-content: space-around;
}

.avatar__image {
    width: 250px;
}


.missions {
    padding-top: 9rem;
    display: block;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: 50px;
    margin-right: 250px;
}

.missions h1 {
    font-size: 30px;
    line-height: 32px;
    margin: 25px 0;
    margin-left: 250px;
}

.separator_language {
    border-bottom: 2px solid #ff1212;
    height: 1px;
    width: 75%;
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 20px;
}


</style>
