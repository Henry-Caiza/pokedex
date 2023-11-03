
import bug from "../assets/types/bug.png";
import dark from "../assets/types/dark.png";
import dragon from "../assets/types/dragon.png";
import electric from "../assets/types/electric.png";
import fairy from "../assets/types/fairy.png";
import fighting from "../assets/types/fighting.png";
import fire from "../assets/types/fire.png";
import flying from "../assets/types/flying.png";
import ghost from "../assets/types/ghost.png";
import grass from "../assets/types/grass.png";
import ground from "../assets/types/ground.png";
import ice from "../assets/types/ice.png";
import normal from "../assets/types/normal.png";
import poison from "../assets/types/poison.png";
import psychic from "../assets/types/psychic.png";
import rock from "../assets/types/rock.png";
import steel from "../assets/types/steel.png";
import water from "../assets/types/water.png";

const Bug = "bug";
const Dark = "dark";
const Dragon = "dragon";
const Electric = "electric";
const Fairy = "fairy";
const Fighting = "fighting";
const Fire = "fire";
const Flying = "flying";
const Ghost = "ghost";
const Grass = "grass";
const Ground = "ground";
const Ice = "ice";
const Normal = "normal";
const Poison = "poison";
const Psychic = "psychic";
const Rock = "rock";
const Steel = "steel";
const Water = "water";

export const pokemonTypes = {
    bug: {
        image: bug,
        strength: [Grass, Psychic, Dark],
        weakness: [Fighting, Flying, Poison, Ghost, Steel, Fire, Fairy],
        resistance: [Fighting, Ground, Grass],
        vulnerable: [Flying, Rock, Fire],
        colorText: 'text-[#aaee33]',
        colorBorder: 'border-[#aaee33]',
        background: 'from-primary from-20% via-[#aaee33]/10 via-50%  to-80%',
    },
    dark: {
        image: dark,
        strength: [Ghost, Psychic],
        weakness: [Fighting, Dark, Fairy],
        resistance: [Ghost, Psychic, Dark],
        vulnerable: [Fighting, Bug, Fairy],
        colorText: 'text-[#334466]',
        colorBorder: 'border-[#334466]',
        background: 'from-primary from-20% via-[#334466]/10 via-50%  to-80%',
    },
    dragon: {
        image: dragon,
        strength: [Dragon],
        weakness: [Steel, Fairy],
        resistance: [Fire, Water, Grass, Electric],
        vulnerable: [Ice, Dragon, Fairy],
        colorText: 'text-[#1144aa]',
        colorBorder: 'border-[#1144aa]',
        background: 'from-primary from-20% via-[#1144aa]/10 via-50%  to-80%',
    },
    electric: {
        image: electric,
        strength: [Flying, Water],
        weakness: [Ground, Grass, Electric, Dragon],
        resistance: [Flying, Steel, Electric],
        vulnerable: [Ground],
        colorText: 'text-[#ffdd11]',
        colorBorder: 'border-[#ffdd11]',
        background: 'from-primary from-20% via-[#ffdd11]/10 via-50%  to-80%',
    },
    fairy: {
        image: fairy,
        strength: [Fighting, Dragon, Dark],
        weakness: [Poison, Steel, Fire],
        resistance: [Fighting, Bug, Dragon, Dark],
        vulnerable: [Poison, Steel],
        colorText: 'text-[#ff88bb]',
        colorBorder: 'border-[#ff88bb]',
        background: 'from-primary from-20% via-[#ff88bb]/10 via-50%  to-80%',
    },
    fighting: {
        image: fighting,
        strength: [Normal, Rock, Steel, Ice, Dark],
        weakness: [Flying, Poison, Psychic, Bug, Ghost, Fairy],
        resistance: [Rock, Bug, Dark],
        vulnerable: [Flying, Psychic, Fairy],
        colorText: 'text-[#bb1122]',
        colorBorder: 'border-[#bb1122]',
        background: 'from-primary from-20% via-[#bb1122]/10 via-50%  to-80%',
    },
    fire: {
        image: fire,
        strength: [Bug, Steel, Grass, Ice],
        weakness: [Rock, Fire, Water, Dragon],
        resistance: [Bug, Steel, Fire, Grass, Ice],
        vulnerable: [Ground, Rock, Water],
        colorText: 'text-[#ff6611]',
        colorBorder: 'border-[#ff6611]',
        background: 'from-primary from-20% via-[#ff6611]/10 via-50%  to-80%',
    },
    flying: {
        image: flying,
        strength: [Fighting, Bug, Grass],
        weakness: [Rock, Steel, Electric],
        resistance: [Fighting, Ground, Bug, Grass],
        vulnerable: [Rock, Electric, Ice],
        colorText: 'text-[#ccbbff]',
        colorBorder: 'border-[#ccbbff]',
        background: 'from-primary from-20% via-[#ccbbff]/10 via-50%  to-80%',
    },
    ghost: {
        image: ghost,
        strength: [Ghost, Psychic],
        weakness: [Normal, Dark],
        resistance: [Normal, Fighting, Poison, Bug],
        vulnerable: [Ghost, Dark],
        colorText: 'text-[#663388]',
        colorBorder: 'border-[#663388]',
        background: 'from-primary from-20% via-[#663388]/10 via-50%  to-80%',
    },
    grass: {
        image: grass,
        strength: [Ground, Rock, Water],
        weakness: [Flying, Poison, Bug, Steel, Fire, Grass, Dragon],
        resistance: [Ground, Water, Grass, Electric],
        vulnerable: [Flying, Poison, Bug, Fire, Ice],
        colorText: 'text-[#11cc33]',
        colorBorder: 'border-[#11cc33]',
        background: 'from-primary from-20% via-[#11cc33]/10 via-50%  to-80%',
    },
    ground: {
        image: ground,
        strength: [Poison, Rock, Steel, Fire, Electric],
        weakness: [Flying, Bug, Grass],
        resistance: [Poison, Rock, Electric],
        vulnerable: [Water, Grass, Ice],
        colorText: 'text-[#eebb77]',
        colorBorder: 'border-[#eebb77]',
        background: 'from-primary from-20% via-[#eebb77]/10 via-50%  to-80%',
    },
    ice: {
        image: ice,
        strength: [Flying, Ground, Grass, Dragon],
        weakness: [Steel, Fire, Water, Ice],
        resistance: [Ice],
        vulnerable: [Fighting, Rock, Steel, Fire],
        colorText: 'text-[#33ddff]',
        colorBorder: 'border-[#33ddff]',
        background: 'from-primary from-20% via-[#33ddff]/10 via-50%  to-80%',
    },
    normal: {
        image: normal,
        strength: [],
        weakness: [Rock, Ghost, Steel],
        resistance: [Ghost],
        vulnerable: [Fighting],
        colorText: 'text-[#ddddcc]',
        colorBorder: 'border-[#ddddcc]',
        background: 'from-primary from-20% via-[#ddddcc]/10 via-50%  to-80%',
    },
    poison: {
        image: poison,
        strength: [Grass, Fairy],
        weakness: [Poison, Ground, Rock, Ghost, Steel],
        resistance: [Fighting, Poison, Grass, Fairy],
        vulnerable: [Ground, Psychic],
        colorText: 'text-[#cc22cc]',
        colorBorder: 'border-[#cc22cc]',
        background: 'from-primary from-20% via-[#cc22cc]/10 via-50%  to-80%',
    },
    psychic: {
        image: psychic,
        strength: [Fighting, Poison],
        weakness: [Steel, Psychic, Dark],
        resistance: [Fighting, Psychic],
        vulnerable: [Bug, Ghost, Dark],
        colorText: 'text-[#ff3377]',
        colorBorder: 'border-[#ff3377]',
        background: 'from-primary from-20% via-[#ff3377]/10 via-50%  to-80%',
    },
    rock: {
        image: rock,
        strength: [Flying, Bug, Fire, Ice],
        weakness: [Fighting, Ground, Steel],
        resistance: [Normal, Flying, Poison, Fire],
        vulnerable: [Fighting, Ground, Steel, Water, Grass],
        colorText: 'text-[#664433]',
        colorBorder: 'border-[#664433]',
        background: 'from-primary from-20% via-[#664433]/10 via-50%  to-80%',
    },
    steel: {
        image: steel,
        strength: [Rock, Ice, Fairy],
        weakness: [Steel, Fire, Water, Electric],
        resistance: [
            Normal,
            Flying,
            Poison,
            Rock,
            Bug,
            Steel,
            Grass,
            Psychic,
            Ice,
            Dragon,
            Fairy,
        ],
        vulnerable: [Fighting, Ground, Fire],
        colorText: 'text-[#558888]',
        colorBorder: 'border-[#558888]',
        background: 'from-primary from-20% via-[#558888]/10 via-50%  to-80%',
    },
    water: {
        image: water,
        strength: [Ground, Rock, Fire],
        weakness: [Water, Grass, Dragon],
        resistance: [Steel, Fire, Water, Ice],
        vulnerable: [Grass, Electric],
        colorText: 'text-[#3377ff]',
        colorBorder: 'border-[#3377ff]',
        background: 'from-primary from-20% via-[#3377ff]/10 via-50% to-80%',
    },
}; 