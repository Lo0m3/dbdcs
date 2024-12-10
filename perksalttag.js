// Perks-Daten: ID und Name

const killerPerks = [
    { number: 1, name: "Gearhead" },
    { number: 2, name: "Bitter Murmur" },
    { number: 3, name: "Deerstalker" },
    { number: 4, name: "Distressing" },
    { number: 5, name: "Hex: Thrill of the Hunt" },
    { number: 6, name: "Insidious" },
    { number: 7, name: "Iron Grasp" },
    { number: 8, name: "Scourge Hook: Monstrous Shrine" },
    { number: 9, name: "Hex: No One Escapes Death" },
    { number: 10, name: "Sloppy Butcher" },
    { number: 11, name: "Spies from the Shadows" },
    { number: 12, name: "Unrelenting" },
    { number: 13, name: "Whispers" },
    { number: 14, name: "Agitation" },
    { number: 15, name: "Nurses Calling" },
    { number: 16, name: "Bamboozle" },
    { number: 17, name: "Barbecue and Chilli" },
    { number: 18, name: "Beast of Prey" },
    { number: 19, name: "Blood Echo" },
    { number: 20, name: "Bloodhound" },
    { number: 21, name: "Blood Warden" },
    { number: 22, name: "Corrupt Intervention" },
    { number: 23, name: "Coulrophobia" },
    { number: 24, name: "Cruel Limits" },
    { number: 25, name: "Dark Devotion" },
    { number: 26, name: "Dead Man's Switch" },
    { number: 27, name: "Discordance" },
    { number: 28, name: "Dying Light" },
    { number: 29, name: "Enduring" },
    { number: 30, name: "Fire Up" },
    { number: 31, name: "Franklins Demise" },
    { number: 32, name: "Furtive Chase" },
    { number: 33, name: "Hangman's Trick" },
    { number: 34, name: "Hex: Devour Hope" },
    { number: 35, name: "Hex: Haunted Ground" },
    { number: 36, name: "Hex: Huntress Lullaby" },
    { number: 37, name: "Hex: Retribution" },
    { number: 38, name: "Hex: Ruin" },
    { number: 39, name: "Hex: Third Seal" },
    { number: 40, name: "I'm All Ears" },
    { number: 41, name: "Infectious Fright" },
    { number: 42, name: "Iron Maiden" },
    { number: 43, name: "Knock Out" },
    { number: 44, name: "Lightborn" },
    { number: 45, name: "Mad Grit" },
    { number: 46, name: "Make Your Choice" },
    { number: 47, name: "Mindbreaker" },
    { number: 48, name: "Monitor and Abuse" },
    { number: 49, name: "Nemesis" },
    { number: 50, name: "Overcharge" },
    { number: 51, name: "Overwhelming Presence" },
    { number: 52, name: "Play with Your Food" },
    { number: 53, name: "Pop goes the Weasel" },
    { number: 54, name: "Predator" },
    { number: 55, name: "Rancor" },
    { number: 56, name: "Remember Me" },
    { number: 57, name: "Save the Best for Last" },
    { number: 58, name: "Shadowborn" },
    { number: 59, name: "Spirit Fury" },
    { number: 60, name: "Stridor" },
    { number: 61, name: "Surge" },
    { number: 62, name: "Surveillance" },
    { number: 63, name: "Territorial Imperative" },
    { number: 64, name: "Thanatophobia" },
    { number: 65, name: "Thrilling Tremors" },
    { number: 66, name: "Tinkerer" },
    { number: 67, name: "Unnerving Presence" },
    { number: 68, name: "Zanshin Tactics" },
    { number: 69, name: "Brutal Strength" },
    { number: 70, name: "Alien Instinct" },
    { number: 71, name: "Awakened Awareness" },
    { number: 72, name: "Shattered Hope" },
    { number: 73, name: "Call of Brine" },
    { number: 74, name: "Coup de Grâce" },
    { number: 75, name: "Dark Arrogance" },
    { number: 76, name: "Darkness Revealed" },
    { number: 77, name: "Deadlock" },
    { number: 78, name: "Deathbound" },
    { number: 79, name: "Dissolution" },
    { number: 80, name: "Dragon's Grip" },
    { number: 81, name: "Eruption" },
    { number: 82, name: "Scourge Hook: Floods of Rage" },
    { number: 83, name: "Forced Hesitation" },
    { number: 84, name: "Forced Penance" },
    { number: 85, name: "Game Afoot" },
    { number: 86, name: "Genetic Limits" },
    { number: 87, name: "Hex: Blood Favour" },
    { number: 88, name: "Hex: Crowd Control" },
    { number: 89, name: "Hex: Face the Darkness, Knight" },
    { number: 90, name: "Hex: Plaything" },
    { number: 91, name: "Hex: Undying" },
    { number: 92, name: "Hoarder" },
    { number: 93, name: "Hubris, Knight" },
    { number: 94, name: "Hysteria" },
    { number: 95, name: "Languid Touch" },
    { number: 96, name: "Lethal Pursuer" },
    { number: 97, name: "Leverage" },
    { number: 98, name: "Merciless Storm" },
    { number: 99, name: "No Way Out" },
    { number: 100, name: "Nowhere To Hide, Knight" },
    { number: 101, name: "Oppression" },
    { number: 102, name: "Rapid Brutality" },
    { number: 103, name: "Scourge Hook: Gift of Pain" },
    { number: 104, name: "Machine Learning" },
    { number: 105, name: "Septic Touch" },
    { number: 106, name: "Starstruck" },
    { number: 107, name: "Superior Anatomy" },
    { number: 108, name: "Terminus" },
    { number: 109, name: "Thwack" },
    { number: 110, name: "Trail of Torment" },
    { number: 111, name: "Ultimate Weapon" },
    { number: 112, name: "Unbound" },
    { number: 113, name: "Undone" },
    { number: 114, name: "Unforeseen" },
    { number: 115, name: "Weave Attunement" },
    { number: 116, name: "Grim Embrace" },
    { number: 117, name: "Hex: Pentimento" },
    { number: 118, name: "Scourge Hook: Pain Resonance" },
    { number: 119, name: "Dominance" },
    { number: 120, name: "Human Greed" },
    { number: 121, name: "Hex: Wretched Fate" },
    { number: 122, name: "Friends 'til the End" },
    { number: 123, name: "Hex: Two Can Play" },
    { number: 124, name: "Batteries included" },
    { number: 125, name: "All-Shaking Thunder" },
    { number: 126, name: "No Quarter" },
    { number: 127, name: "Scourge Hook: Jagged Compass" }    
];

const survivorPerks = [
    { number: 1, name: "DejaVu" },
    { number: 2, name: "Hope" },
    { number: 3, name: "Kindred" },
    { number: 4, name: "Lightweight" },
    { number: 5, name: "No One Left Behind" },
    { number: 6, name: "Plunderer's Instinct" },
    { number: 7, name: "Premonition" },
    { number: 8, name: "Resilience" },
    { number: 9, name: "Slippery Meat" },
    { number: 10, name: "Small Game" },
    { number: 11, name: "Spine Chill" },
    { number: 12, name: "This is Not Happening" },
    { number: 13, name: "We'll Make It" },
    { number: 14, name: "Ace in the Hole" },
    { number: 15, name: "Adrenaline" },
    { number: 16, name: "Aftercare" },
    { number: 17, name: "Alert" },
    { number: 18, name: "Any Means Necessary" },
    { number: 19, name: "Autodidact" },
    { number: 20, name: "Babysitter" },
    { number: 21, name: "Balanced Landing" },
    { number: 22, name: "Better Together" },
    { number: 23, name: "Boil Over" },
    { number: 24, name: "Bond" },
    { number: 25, name: "Borrowed Time" },
    { number: 26, name: "Botany Knowledge" },
    { number: 27, name: "Breakdown" },
    { number: 28, name: "Breakout" },
    { number: 29, name: "Buckle Up" },
    { number: 30, name: "Calm Spirit" },
    { number: 31, name: "Camaraderie" },
    { number: 32, name: "Dance With Me" },
    { number: 33, name: "Dead Hard" },
    { number: 34, name: "Decisive Strike" },
    { number: 35, name: "Deliverance" },
    { number: 36, name: "Detective's Hunch" },
    { number: 37, name: "Distortion" },
    { number: 38, name: "Diversion" },
    { number: 39, name: "Empathy" },
    { number: 40, name: "Fixated" },
    { number: 41, name: "Flip-Flop" },
    { number: 42, name: "Head On" },
    { number: 43, name: "Inner Strength" },
    { number: 44, name: "Iron Will" },
    { number: 45, name: "Leader" },
    { number: 46, name: "Left Behind" },
    { number: 47, name: "Lithe" },
    { number: 48, name: "Lucky Break" },
    { number: 49, name: "Mettle of Man" },
    { number: 50, name: "No Mither" },
    { number: 51, name: "Object of Obsession" },
    { number: 52, name: "Open Handed" },
    { number: 53, name: "Pharmacy" },
    { number: 54, name: "Poised" },
    { number: 55, name: "Prove Thyself" },
    { number: 56, name: "Quick and Quiet" },
    { number: 57, name: "Saboteur" },
    { number: 58, name: "Second Wind" },
    { number: 59, name: "Self-Care" },
    { number: 60, name: "Sole Survivor" },
    { number: 61, name: "Solidarity" },
    { number: 62, name: "Sprint Burst" },
    { number: 63, name: "Stake Out" },
    { number: 64, name: "Streetwise" },
    { number: 65, name: "Technician" },
    { number: 66, name: "Tenacity" },
    { number: 67, name: "Unbreakable" },
    { number: 68, name: "Up the Ante" },
    { number: 69, name: "Urban Evasion" },
    { number: 70, name: "Vigil" },
    { number: 71, name: "Wake Up" },
    { number: 72, name: "We're Gonna Live Forever" },
    { number: 73, name: "Windows of Opportunity" },
    { number: 74, name: "Off the Record" },
    { number: 75, name: "Red Herring" },
    { number: 76, name: "For the People" },
    { number: 77, name: "Soul Guard" },
    { number: 78, name: "Repressed Alliance" },
    { number: 79, name: "Blood Pact" },
    { number: 80, name: "Built to Last" },
    { number: 81, name: "Desperate Measures" },
    { number: 82, name: "Visionary" },
    { number: 83, name: "Deception" },
    { number: 84, name: "Appraisal" },
    { number: 85, name: "Power Struggle" },
    { number: 86, name: "Fast Track" },
    { number: 87, name: "Smash Hit" },
    { number: 88, name: "Self-Preservation" },
    { number: 89, name: "Counterforce" },
    { number: 90, name: "Resurgence" },
    { number: 91, name: "Blast Mine" },
    { number: 92, name: "Flashbang" },
    { number: 93, name: "Bite the Bullet" },
    { number: 94, name: "Rookie Spirit" },
    { number: 95, name: "Boon: Circle of Healing" },
    { number: 96, name: "Clairvoyance" },
    { number: 97, name: "Boon: Shadow Step" },
    { number: 98, name: "Overcome" },
    { number: 99, name: "Corrective Action" },
    { number: 100, name: "Boon: Exponential" },
    { number: 101, name: "Parental Guidance" },
    { number: 102, name: "Empathic Connection" },
    { number: 103, name: "Dark Theory" },
    { number: 104, name: "Inner Focus" },
    { number: 105, name: "Residual Manifest" },
    { number: 106, name: "Overzealous" },
    { number: 107, name: "Reactive Healing" },
    { number: 108, name: "Wiretap" },
    { number: 109, name: "Low Profile" },
    { number: 110, name: "Better Than New" },
    { number: 111, name: "Reassurance" },
    { number: 112, name: "Hyperfocus" },
    { number: 113, name: "Potential Energy" },
    { number: 114, name: "Fogwise" },
    { number: 115, name: "Quick Gambit" },
    { number: 116, name: "Cut Loose" },
    { number: 117, name: "Friendly Competition" },
    { number: 118, name: "Teamwork: Power of Two" },
    { number: 119, name: "Background Player" },
    { number: 120, name: "Blood Rush" },
    { number: 121, name: "Teamwork: Collective Stealth" },
    { number: 122, name: "Troubleshooter" },
    { number: 123, name: "Made for This" },
    { number: 124, name: "Scavenger" },
    { number: 125, name: "Plot Twist" },
    { number: 126, name: "Dramaturgy" },
    { number: 127, name: "Scene Partner" },
    { number: 128, name: "Lucky Star" },
    { number: 129, name: "Chemical Trap" },
    { number: 130, name: "Light Footed" },
    { number: 131, name: "Champion of Light" },
    { number: 132, name: "Illumination" },
    { number: 133, name: "Deadline" },
    { number: 134, name: "Invocation: Weaving Spiders" },
    { number: 135, name: "Wicked" },
    { number: 136, name: "Strength in Shadows" },
    { number: 137, name: "Mirrored Illusion" },
    { number: 138, name: "Bardic Inspiration" },
    { number: 139, name: "Still Sight" },
    { number: 140, name: "Finesse" },
    { number: 141, name: "Hardened" },
    { number: 142, name: "Specialist" },
    { number: 143, name: "Eyes of Belmont" },
    { number: 144, name: "Exultation" },
    { number: 145, name: "Moment of Glory" },
    { number: 146, name: "Dark Sense" },
    { number: 147, name: "Clean Break" },
    { number: 148, name: "Invocation: Treacherous Crow" },
    { number: 149, name: "Shoulder the Burden" }
    
];

function updateAltAttributes() {
    for (const perk of killerPerks) {
        const element = document.getElementById(`iconUnequPerk${perk.number}`);
        if (element) {
            element.alt = perk.name;
        }
    }
    for (const perk of survivorPerks) {
        const element = document.getElementById(`iconUnequPerkSurv${perk.number}`);
        if (element) {
            element.alt = perk.name;
        }
    }
}


// Rufe die Funktion auf, um die Alt-Texte zu aktualisieren
updateAltAttributes();

