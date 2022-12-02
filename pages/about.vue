<script setup>
onMounted(() => {
    const typeWriterEffect = (selector) => {
        let textContainer = document.querySelector(selector)
        let text = textContainer.textContent
        textContainer.textContent = ""
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {

                textContainer.textContent += i % 2 === 1 ? text[i].toUpperCase() : text[i].toLowerCase()
            }, 25 * i)
        }
    }

    typeWriterEffect("div.container p#explication")
    typeWriterEffect("div.container p#lesAuteurs")
})
</script>

<template>
    <div
        class="container"
    >
        <h1>À propos</h1>
        <div
            class="erreur"
        >
            <pre>
    at body.immuneSystem (body:internal/process/task_queues:95:5)
    at async body.directRequest (./body_modules/cells-body/dist/client.mjs:270:5)
    at async body.organs (./body_modules/body-node/dist/client.mjs:146:12)
    at async request (./body_modules/body-node/dist/client.mjs:169:16)
    at async virtual:cells:./.cells/body-component.mjs:1:31
    at async BodyRunner.directRequest (./body_modules/vite-ma-dose/dist/client.mjs:270:5)
    at async BodyRunner.cachedRequest (./body_modules/vite-ma-dose/dist/client.mjs:146:12)
    at async request (./body_modules/vite-ma-dose/dist/client.mjs:169:16)
    at async ./body_modules/cells/dist/app/components/cells-root.js:5:31
            </pre>

            <img
                src="~/public/used_condom.webp"
                alt="erreur"
            >
            <a
                id="link"
                onclick="window.open('https://1drv.ms/p/s!AognzYfjcuoh02F6u0iNsEO-5pXI?e=JKoqv1',
                         'newwindow',
                         'width=300,height=250');
              return false;"
                href="https://1drv.ms/p/s!AognzYfjcuoh02F6u0iNsEO-5pXI?e=PiQdZ5">lien de présentation du site ( je crois) </a>
        </div>

        <section>
            <p id="explication">
                Cette page a été réalisée dans le cadre de la nuit de l'info 2022.
                La nuit de l'info est un évènement national permettant aux étudiants d'avoir un prétexte pour ne pas
                dormir.
                Lors de cette veillé, les étudiants ont pour objectif de développer quelque chose et d'être absent en
                cours
                le lendemain.
                Cette année, le sujet de la nuit de l'info est la prévention de la lutte contre le SIDA et les maladies
                sexuellement transmissibles à l'occasion 34ème journée mondiale de lutte contre le SIDA.

                Le virus VIH est un virus qui peut causer le SIDA. Le SIDA est une maladie qui peut rendre une personne
                très
                malade et même entraîner la mort.

                Il n'y a pas de remède contre le SIDA, mais il existe des traitements qui peuvent aider les gens à
                rester en
                bonne santé.

                Il existe des moyens d'éviter de contracter le VIH comme la capote ou l'abstinence.

                Sida Info Service, (SIS-association), est une association française qui met à disposition du public
                plusieurs lignes téléphoniques, ainsi que des canaux numériques, permettant d’obtenir des renseignements
                sur
                les questions relatives au VIH au SIDA, ainsi que sur les IST, mais également sur les hépatites, les
                questions liées à l'orientation sexuelle et d'identité de genre.

                L’objectif initial de prévention et d'information s’est étendu progressivement aux problématiques
                connexes
                liées à l’infection par le virus de l’immunodéficience humaine (VIH) et à des pathologies inhérentes aux
                risques sexuels, aux maladies chroniques, à l’exercice des droits des personnes et des malades, à leur
                soutien et leur accompagnement. Exerçant dans le cadre d’une mission d’intérêt général, Sida Info
                Service,
                devenue en 2011 SIS-Association, est un partenaire des politiques de santé publique et joue un rôle
                privilégié à l’interaction de la santé publique et de la santé communautaire.

                Sida Info service est créée les 23 octobre 1990, par l'Agence Française de Lutte contre le SIDA (AFLS)
                en
                partenariat avec l'association AIDES1.
                L'une des premières campagnes de Sida Info Service, au début des années 1990

                L'AFLS, créée en 1989, par le gouvernement avait pour mission d'apporter son soutien logistique aux
                organismes de terrain et de coordonner les efforts de prévention du VIH. Convaincue par Pierre Kneip,
                alors
                responsable bénévole de la permanence téléphonique de AIDES Île-de-France, elle a voulu, à l'instar de
                ce
                qui se faisait déjà dans plusieurs pays d'Europe, compléter le dispositif de terrain, en mettant en
                place
                une ligne téléphonique sous la forme d'un numéro gratuit accessible 24 h sur 24 et 7 jours sur 7.

                Le premier Numéro Vert est alors le 05 36 66 36. Une équipe de 26 personnes, répartie dans toute la
                France,
                se tient prête à répondre aux questions en lien avec l’épidémie. A l’époque l’absence de traitement
                donne un
                taux de mortalité élevé des personnes infectées, et de nombreuses idées reçues circulent parmi la
                population.

                Le 13 novembre 1990 la ligne Sida Info Service est mise en service . L'anonymat, la confidentialité, le
                non-jugement et la gratuité définissent l'éthique fondamentale des écoutants de l'association. Les
                écoutants
                parisiens sont logés dans un petit local fournit par Aides et se relaient jour et nuit pour répondre aux
                appels.

                Le standard fait immédiatement face à de nombreuses demandes. Le millionième appel sera passé en 1993,
                signe
                que le public est en forte demande d'informations mais également de soutien moral. Cette même année il
                est
                apparu nécessaire de développer, en parallèle, des dispositifs particuliers afin de répondre à des
                demandes
                plus complexes. C’est ainsi que la lige Sida Info Droit fut ouverte en novembre 1993. En juillet 1994
                c’est
                un service Minitel qui ouvre, 36 15 SIDAINFO, tandis que le premier site web sera mis en ligne en 1997.

                Le 2 décembre 1995, Pierre Kneip, premier directeur de et fondateur2 l’association, meurt des suites du
                SIDA.

                L’année 1996 voit le lancement d’une nouvelle ligne d’écoute et d’information. Dénommée Ligne Azur,
                cette
                ligne est destinée aux personnes qui éprouvent des difficultés avec leur orientation sexuelle et leur
                identité de genre. La ligne VIH info soignants, à destination des personnels soignants est également
                mise en
                place la même année.

                Le 18 octobre 1996 le numéro vert change et le 05 36 66 36 devient le 0 800 840 800.

                En 1998 les statuts de l’association ont été modifiés et validés, élargissant l'objet initial de
                l'association aux pathologies connexes au VIH (hépatites, MST, tuberculose) et occasionnellement à
                d'autres
                sujets de santé.

                En 1999, lancement d’Hépatite Info Service.

                En septembre 2001, Sida Info Service lance un service en langues afin de répondre aux besoins
                spécifiques
                des migrants, qui sont, au même titre que les homosexuels, une population où la prévalence est élevée.
                Ce
                dispositif avait pour objectif d'apporter des réponses en langues étrangères à une population migrante
                de
                plus en plus touchée par le VIH et pour qui l'accès à l'information en matière de santé et de soins est
                particulièrement difficile. Les langues proposées étaient l’anglais, l’arabe, le bambara, l’espagnol et
                le
                russe.

                En 2010 fondation du 190, un centre de dépistage, dont l’objectif est de décloisonner prévention
                dépistage
                et soin, en associant un accompagnement communautaire à des techniques biomédicales. Dans le but de
                faire
                baisser l’épidémie d’infections au VIH.

                Septembre 2015 Sida Info Service accompagne les personnes sur les autotests VIH avec une campagne vidéo
                en
                ligne.

                En octobre 2015, la gratuité des appels depuis un mobile vers le numéro vert est mise en place.

                En février 2016, Sida Info Service se déclare en cessation de paiement et demande à être placée en
                redressement judiciaire. Un rapport d'expertise de novembre 2015 montre de lourdes failles dans la
                gestion
                de l'association et constate un « manque de transparence», des « lacunes comptables », ainsi que des «
                risques juridiques pouvant aller jusqu'à l'emprisonnement ».

                Par jugement en date du 18 mai 2017, le Tribunal de Grande Instance de Paris valide un plan de
                redressement
                par voie de continuation présenté par SIS-Association. Cette décision entérine la sortie définitive de
                redressement judiciaire de l’association, qui avait été décidé le 10 mars 2016.

                Depuis le 21 septembre 2016, le docteur Arame Reymes-Mbodje est directrice de l'association.


                Tout ça d'après wikipédia.
            </p>

            <p id="lesAuteurs">
                Alors nous, on a créé ce site, lors d'une nuit, on nous a dit que la nuit de l'info c'était sympa et que
                les pizzas sont gratuites donc on s'est inscrit. On est 4 gros Bg, 2 premières années et 2 deuxièmes
                années
                du BUT Informatique de Vannes. La musique est cool, l'ambiance est cool donc au final on s'amuse. Je
                vous
                avoue que je sais pas trop quoi dire d'autre mais faut faire un grand paragraphe pour le défi MovaiCode
                afin
                de rendre cette belle page illisible. Ah si, j'ai oublié de vous dire un truc. Notre ékip (oui oui
                j'écris
                équipe comme ça parce que j'ai des bons goûts musicaux) c'est la meilleur team de Vannes. La team McHack
                attention à ne pas nous confondre avec ces imposteurs de Mak Hack. Attention, je dis pas qu'ils sont
                méchants, au contraire ils sont très sympas. Après enquêtes de nos experts indépendants, on n'a remarqué
                que
                Mak Hack est plus vieux que McHack et ça c'est vraiment triste. Oh non, j'ai oublié de corriger mes
                fautes.
                Je fais ça mais je ne vous promets rien, île reste eura surment dè fote. Un riz basmati est capable de
                régler tout vos soucis. Si le site bug mettez le dans du riz.

            </p>
        </section>

    </div>
</template>

<style scoped lang="scss">
div.container {
    margin: 0 2rem;

    div.erreur {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        img {
            height: 20rem;
            animation: spin 1s linear infinite;

            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        }

        a#link {
            transform: rotate(90deg);
        }
    }

    section {
        margin: 0;
        display: flex;
        justify-content: space-between;
        gap: .5rem;

        p#explication,
        p#lesAuteurs {
            width: 100%;
            color: white;
            background: rgb(0, 212, 255);
            background: linear-gradient(
                    80deg,
                    rgba(0, 212, 255, 1) 0%,
                    rgba(151, 167, 6, 1) 22%,
                    rgba(9, 121, 115, 1) 35%,
                    rgba(179, 21, 83, 1) 56%,
                    rgba(125, 25, 176, 1) 74%,
                    rgba(0, 212, 255, 1) 100%
            );
            background-size: 200% 100%;
            animation: background-pan 1200ms linear infinite;

            @keyframes background-pan {
                from {
                    background-position: 0 center;
                }
                to {
                    background-position: 200% center;
                }
            }
        }
    }

}
</style>
