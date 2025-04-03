function random(arr){
    //console.log(arr[Math.floor(Math.random() * arr.length)])
    let value = arr[Math.floor(Math.random() * arr.length)];
    // console.log(value)
    let newDiv =  document.createElement("div");
    newDiv.innerHTML = value;
    document.getElementById("test").appendChild(newDiv)
}

function rollOne(obj){
    for(let prop in obj){
        let arr = obj[prop];
        console.log(`${prop}:`)

        const container = document.getElementById("container")

        let outerDiv = document.createElement("div");
        outerDiv.classList.add("outerDiv");
        outerDiv.id = "outerDiv";
        outerDiv.innerHTML = prop;

        let value = arr[Math.floor(Math.random() * arr.length)];
        let innerDiv =  document.createElement("div");
        innerDiv.innerHTML = value;
        innerDiv.classList.add("innerDiv");

        container.appendChild(outerDiv)
        outerDiv.appendChild(innerDiv)

    }
}

// function roll(obj1, obj2){
//     const container = document.getElementById("container");

//     if(document.getElementById("box")){
//         document.getElementById("box").remove();
//     }

//     let box = document.createElement("div");
//     box.id = "box";
//     container.appendChild(box);

//     //Will call to object with proper keys to use in HTML
//     for(let prop in obj1){
//         let arr1 = obj1[prop];         
//         // console.log(obj1[prop])

//         let outerDiv = document.createElement("div");
        
//         outerDiv.classList.add("outerDiv");
//         outerDiv.id = "outerDiv";
//         outerDiv.innerHTML = arr1
//         outerDiv.addEventListener("click", testClick);
//         box.appendChild(outerDiv)

//         let arr2 = obj2[prop];
//         let value = arr2[Math.floor(Math.random() * arr2.length)];

//         // console.log(value)
//         let innerDiv =  document.createElement("div");
//         innerDiv.innerHTML = value;
//         innerDiv.classList.add("innerDiv");
//         outerDiv.appendChild(innerDiv)
//     }  
// };




const geography = {
    terrain: 
    [
        `<strong>Ancient Farmland</strong>: A huge stretch of land was re-engineered for optimal farming.`,
        `<strong>Arratu wasteland</strong>: An area here was once xenoformed by the Outsiders into an environment hostile to humanity or one inhabited by dangerous alien lifeforms.`,
        `<strong>Blasted Lands</strong>: Radioactive or scorched  over by ancient war. Many ruins are likely.`, 
        `<strong>Canyons</strong>:A region with extensive canyons cut by rivers present or long-vanished. Make sure the rivers don't climb after leaving them.`,
        `<strong>Dense Forest</strong>: Trackless, dark, and an effective natural barrier.`,
        `<strong>Grasslands</strong>:A broad sweep of savanna or grassy plains is a coherent whole here.`, 
        `<strong>Islands</strong>: There's a single significant island off the coast or an archipelago of some note.`,
        `<strong>Jagged Mountains</strong>: A new or resharpened mountain range forms a barrier in the region. The mountains are young, tall, and likely cast a substantial rain shadow.`,
        `<strong>Jungle</strong>:A classic adventure-worthy hungle of wild, semi-alien flora and fauna`,
        `<strong>Light Forest</strong>: Interspersed with other terrain.`,
        `<strong>Megaplex</strong>: The ruins of a single huge ancient structure stretch for endless miles.`,
        `<strong>Pit</strong>: A Deep or some other underground megastructure collapsed and left a hole with a diameter measured in tens of miles.`,
        `<strong>Rain Forest</strong>: Vast, damp, and green.`,
        `<strong>Rocky Hills</strong>: Rough and stony, with little arable land. Herding and raiding are the most profitable employments here.`,
        `<strong>Rolling Hills</strong>: A stretch of gently rolling hills makes for good agricultural land.`, 
        `<strong>Sand Desert</strong>: This desert is a waste of sand and dunes. It may be from a rain shadow, or it might be a legacy of ancient war.`, 
        `<strong>Scrub Desert</strong>: These often appear on the leeward side of mountain ranges. Borders will often be grasslands or savanna.`,
        `<strong>Swamp</strong>: A sinking river, lake margin, or wet coastal delta forms a vast bog in this flat land.`,
        `<strong>Volcano</strong>: One or more mountains in a nearby range are volcanically active. This may be natural or it may be a consequence of Legacy flux or ancient manipulation.`,
        `<strong>Weathered Mountains</strong>: A significant skirt of hils is common. The rain shadow is likely limited due to the rounded, low mountains.`
    ],
    dangerous: 
    [
        `Safer than usual for someplace like it.`,
        `There's one notable kind of danger there.`,
        `It's got some site-specific flavors of peril.`,
        `It's unusually dangerous in several ways.`,
        `It will quickly kill the unprepared or unwary.`,
        `It's a death zone for all but the strongest.`
    ],
    use: 
    [
        `A rare and precious resource is found there.`,
        `Ancient sites and relics are common there.`, 
        `It's sacred land to a group or religion.`, 
        `Controlling it has military significance.`,
        `It has substantial productive infrastructure.`, 
        `A major trade route goes through it.`,
        `Uncontrolled, it's a nest of raiders and worse.`,
        `A might Working is still functioning there.`
    ],
    recent_event:
    [
        `A significant battle was fought there.`,
        `A mad prophet tried to start a faith there.`,
        `A usurper and supporters fled into it.`,
        `A resource strike drew numerous people.`, 
        `A major nest of bantis or raiders formed.`, 
        `A rich ancient ruin was discovered there.`, 
        `An uncanny plague erupted in the area.`,
        `Some grim and terrible thing was awoken.`,
        `A community of outcasts or marginals formed.`,
        `A natural or uncanny disaster struck there.`
    ],
    populated:
    [
        `Almost unpopulated for something like it.`,
        `Very few settlers or workers there.`,
        `Average or more population density.`,
        `A rush of people have gone there.`
    ],
    antagonists:
    [
        `Violent secessionist rebels.`,
        `Angry cultists of a local faith.`,
        `Locals who resent interloping outsiders.`, 
        `A type of cunning, dangerous beast.`,
        `Relic-creatures or ancient settlements.`,
        `Elemental emanations of the disordered land.`,
        `A hostile sentient monster civilization.`,
        `Brutal envoys of the central government.`,
        `Raiders and bandits driven into the area.`,
        `Rapacious local lords and gang bosses.`, 
        `Remnants of a furious native population.`,
        `Outsider remnants with a bitter grudge`
    ],
    quirk: 
    [
        `It has significant magical structures in it.`, 
        `It has a place in the national origin legend.`,
        `It is entirely man-made by ancient arts.`,
        `Time and space sometimes slip there.`,
        `The magical power there attracts wizards.`, 
        `It subtly changes those who live there.`, 
        `It's holy land to a particular faith.`, 
        `It was formerly a different kind of terrain.`,
        `It has human-worked vistas of beauty.`,
        `It was formerly an Outsider stronghold.`,
        `A significant part of it is subterranean.`,
        `It'd expand were it not for ancient wards.`,
        `It was a nature preserve of a megastructure.`,
        `It's maintained by an ancient artifical mind.`,
        `Magic is somehow warped in its area.`,
        `The flora and fauna are queasily "off".`,
        `The locals once populated it more heavily.`, 
        `Rulership of the feature is widely disputed.`,
        `It's riddled with caves and delvings.`,
        `A unique type of sentient lives there.`
    ]
}

const geographyMapping = {
    terrain: "Significant Terrain Features",
    dangerous: "How dangerous is the feature",
    use: "What use is the feature",
    recent_event: "What kind of event last happened there", 
    populated: "How populated is the feature",
    antagonists: "What antagonists are common there",
    quirk: "Optional Quirk of the Feature"
}


const nation = {
    theme: 
    [
        `<strong>Barbarism</strong>, with brutal savagery`,
        `<strong>Decadence</strong>, of sins and fadings`,
        `<strong>Despair</strong>, with good things unlooked-for`,
        `<strong>Exhaustion</strong>, with strength spent and lost`,
        `<strong>Ignorance</strong>, of terrors and the unknown`,
        `<strong>Oppression</strong>, with rule a crushing weight`,
        `<strong>Poverty</strong>, where even the rich are poor`,
        `<strong>Precarity</strong>, with all goods made fleeting`,
        `<strong>Stratification</strong>, where classes do not touch`,
        `<strong>Violence</strong>, where life is something cheap`,
        `<strong>Enlightenment</strong>, where knowledge is loved`,
        `<strong>Expansion</strong>, where things swell greater`,
        `<strong>Hope</strong>, that the future should be better`,
        `<strong>Justice</strong>, where a reckoning is had`,
        `<strong>Legitimacy</strong>, where rulers are by right`,
        `<strong>Pageantry</strong>, of splendor and magnificence`,
        `<strong>Prosperity</strong>, with wealthy easily had`,
        `<strong>Renewal</strong>, with things growing brighter`,
        `<strong>Triumph</strong>, with victory a fresh memory`,
        `<strong>Unity</strong>, where purposes are shared`
    ],
    disputes: 
    [
        `Raiders are taking refuge in their lands`,
        `Ownership of a resource site is disputed`,
        `A usurper or criminal is being sheltered there`,
        `A troublemaking religion is based there`,
        `Their rulers have a political claim on the throne`,
        `A diplomatic marriage is going sour`,
        `A past war's savagery has left deep scars`,
        `Their culture is supplanting local beliefs`,
        `Their immigrants are gaining great influence`,
        `They broke off an alliane or important pact`,
        `They lured away an academy or great temple`,
        `Border tariffs and taxes are blocking trade`,
        `They drove a terrible beast into this land`,
        `A Working of theirs caused problems here`,
        `They woke up a great peril from the past`,
        `They're cooperating with an enemy group`,
        `They're suspected of backing assassinations`,
        `A spy ring is supsected or has been found`,
        `They refused to give aid for some current need`,
        `They've been hostile to an allied group`
    ],
    ties: 
    [
        `The ruling classes are related in some way`,
        `An important faith crosses the border`,
        `They fought by our side sometime in the past`,
        `Their culture is widely admired here`,
        `They helped to overcome an eldritch peril`, 
        `They held back an enemy from our border`,
        `They are co-ethnics of the same origins`,
        `They provide critical trade relations`,
        `Sages and scholars come from there`,
        `They gave critical aid during a disaster`,
        `A hero of this land came originally from there`,
        `A past hero-king once ruled both lands`,
        `They produce some vital commodity`,
        `They have a shared enemy`,
        `A Working they have is helpful here, too`,
        `A long-standing alliance or trade pact exists`,
        `They recently conceded some disputed land`,
        `They greatly admire elements of this culture`,
        `They're considered unusually attractive here`,
        `They took in refugees from here at one point`
    ],
    current: 
    [
        `Farmland is becoming worn-out and depleted`,
        `Verminous monsters are swarming`,
        `A rebel front is stirring up trouble`,
        `An outside power is backing internal strife`,
        `The leadership is inept and distracted`,
        `A religious reformer is breaking old compacts`,
        `An evil is provoking outraged rioting`,
        `Dark cults are attracting the ambitious`,
        `A Blighted horde is threatening the borders`,
        `An ancient ruin has disgorged some peril`,
        `Malcontents have obtained a potent artifact`,
        `Luxuriance has left the nation's coffers bare`,
        `Local aristocrats are pushing for independence`,
        `An important mine has run out or been harmed`,
        `A sinister favorite has infatuated the leader`,
        `A recurring plant plague is causing hunger`,
        `Fearsome monsters are migrating into the land`,
        `A rival is preparing for war or raiding`,
        `A grand national plan is exhausting the people`,
        `A savage grudge has erupted between lords`
    ],
    good: 
    [
        `A splendid mine or resource has been found`,
        `A pious saint is strengthening a major faith`,
        `A noble heir shows signs of heroic greatness`,
        `A major rival has recently suffered a calamity`,
        `New farmland has been opened up recently`,
        `A new trade route has been forged`,
        `A horrible monster was slain or driven off`,
        `Good harvests have enriched the people`,
        `A wicked minister has been deposed`,
        `A new academy has recently opened`,
        `A bandit or rebel uprising has been crushed`,
        `Two rival lords have started to make peace`,
        `An old enemy has agreed to a peace pact`,
        `The military won a recent smashing victory`,
        `A helpful Working has been activated`,
        `A powerful artifact is helping the ruler`,
        `An old source of unreset has been calmed`,
        `A dark cult has been revealed and purged`,
        `New diplomatic ties have been made`,
        `A new lord has risen, loved by his people`
    ]
}

const nationMapping = {
    theme: `Thematic Element`,
    disputes: `Disputes with a Neighboring State`,
    ties: `Positive Ties with a Neighboring State`, 
    current: `Current National Problems`, 
    good: `Good Things Happening Right Now` 
}

const societyMapping = {
    skin: `Typical Skin Colors in the Populace`, 
    hairColor: `Hair Color`,
    hairTexture: `Hair Texture`,
    eyeColor: `Eye Coloration`,
    build: `What's the Typical Build of the People`,
    adornment: `Optional Common Forms of Adornment`,
    traits: `Optional Physical Quirks or Traits`,
    values: `Values They Esteem`
}

const society = {
    skin: 
    [
        `Extremely dark hues`,
        `Dark browns and mocha shades`,
        `Golden, sallow, or ivory`,
        `Olives or light browns`,
        `Ruddy or tanned complexions`,
        `Pale white or pinkish hues`,
        `An unusual color or pattern of colors`,
        `Scales, fur, or unusual hide type`
    ],
    hairColor: 
    [
        `Night-black`,
        `Dark browns`,
        `Lighter browns`,
        `Red shades`,
        `Blonds`,
        `White or white-blond`,
        `An unusual palette`,
        `They lack hair`
    ],
    hairTexture: 
    [
        `Very tightly-curled`,
        `Dense and curled`,
        `Slightly wavy`,
        `Stiff and straight`,
        `Thick and wavy`,
        `Thin and fine`,
        `Thick and flowing`,
        `Scant and delicate`
    ],
    eyeColor: 
    [
        `Black or extremely dark brown`,
        `Hazel or olive`,
        `Blues in varying shades`,
        `Grays, whether flat or metallic`,
        `Ambers and yellows`,
        `Greens in different shades`,
        `An unusual or luminous color`,
        `Slit or unusual pupils; roll again for color`
    ],
    build: 
    [
        `Smaller and slighter than their neighbors`,
        `Same height and weight as the neighbors`,
        `Either short and stocky or tall and slender`,
        `Much bigger and bulkier than neighbors`
    ], 
    adornment:
    [
        `Intricate hair styles or braiding`,
        `Painted skin markings that sometimes change`,
        `Tattoos of some cultural significance`,
        `Piercings, whether minor or elaborate`,
        `Role or class-specific clothing items`,
        `Patterned hair shaving and depilation`,
        `Culturally-significant jewelry or accessories`,
        `Color choices with social meaning to them`,
        `Socially-meaningful animal motif items`,
        `Worn weapons, tools or trade implements`,
        `Significant scent or perfume uses`,
        `Impractival or elaborate role-based clothes`
    ], 
    traits: 
    [
        `They possess an extra eey somewhere`,
        `An additional set of limbs or extremities`,
        `Extremely pronounced sexual dimorphism`,
        `Patches of feathers, scales, fur, or the like`,
        `They have a tail or some sort`,
        `They possess wings, whether useful or not`,
        `Their skin is an unusual texture`,
        `Sigil-marked by their creator in some way`,
        `The sexes look very similar to outsiders`,
        `They have a particular scent to them`,
        `Their voices are peculiar in some way`,
        `Additional or too few fingers or toes`,
        `They have animalistic features in some way`,
        `Have one or more manipulatory tentacles`,
        `They have light-emitting organs or skin`,
        `Their mouths are fanged or tusked`,
        `They have alien Outsider features somehow`,
        `Their proportions are distinctly strange`,
        `They don't show age the way others do`,
        `Roll twice and blend the results`
    ],
    values: 
    [
        `Individual rights and freedom of action`,
        `Courage and valiance in danger`,
        `Honesty and truthfulness in speech`,
        `Eloquence and social expertise`,
        `Raw strength and personal prowess`,
        `Discipline and obedience to the law`,
        `Filial devotion to family and parents`,
        `Education adn knowledge-seeking`,
        `Piety and devotion to the gods`,
        `Beauty and seductive charm`,
        `Conquest and domination of others`,
        `Ascetic unworldliness and pious poverty`,
        `Harmony with nature and existing life`,
        `Ethnic purity of blood and culture`,
        `Cunning and the ability to trick others`,
        `Subtlety and indirectness of action`,
        `Prosperity and accruing material wealth`,
        `Submission to the collective will or culture`,
        `Hardiness and endurance before woes`,
        `Honor and maintaining one's integrity`,
        `Sexual license and wantonness`,
        `Submission to lawful authority`,
        `Personal development and limit-pushing`,
        `Justice and fairness between people`,
        `Purghing evil and expelling the wicked`,
        `Personal sacrifice for one's causes or purposes`,
        `Building things in service of their posterity`,
        `Faithfulness towards one's chosen friends`,
        `Dominating and possessing other people`,
        `Exploring the unknown and discovering secrets`,
        `Seeking fortune in new places or new roles`,
        `Social progress toward some eventual utopia`,
        `Excellence in one's friends, family, and own`,
        `Vengeance and execution of just vendettas`,
        `Restoring some real or imagined glorious past`,
        `Unity and elimination of group differences`,
        `Magical prowess and occult ability`,
        `Sharing wealth and goods with others`,
        `Membership in an elite bloodline or caste`,
        `Personal indulgence and luxuriant pleasure`,
        `Scheming subtly against enemies or rivals`,
        `Remembrance of the past and memorializing history`,
        `Aesthetic beauty in material goods and architecture`,
        `Zealous guardianship of their own land or holy sites`,
        `Humanistic reason and "rational" religion`,
        `Industry and the ability to work tirelessly`,
        `Leadership and charisma in the group`,
        `Pacifism and peaceful resolution of problems`,
        `Societal or ethnic superiority over all outsiders`
    ]
}

