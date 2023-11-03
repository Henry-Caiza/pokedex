
import { useEffect, useCallback, useState } from "react";
import Wrapper from "../sections/Wrapper";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import axios from "axios";
import { pokemonRoute, pokemonSpeciesRoute, pokemonTabs } from "../utils/Constants";
import { defaultImages, images } from "../utils/getPokemonsImages";
import { extractColors } from "extract-colors";
import Footer from "../sections/Footer";
import Description from "./PokemonPages/Description";
import Evolution from "./PokemonPages/Evolution";
import CapableMoves from "./PokemonPages/CapableMoves";
import Location from "./PokemonPages/Location";
import { setCurrentPokemon } from "../app/slices/PokemonSlice";
import Loading from "../components/loading";

import toast from "react-hot-toast";

function Pokemon() {
    const params = useParams();
    const dispatch = useAppDispatch();
    const { currentPokemonTab } = useAppSelector(({ app }) => app)

    let [loading, setLoading] = useState(false);

    const getRecursiveEvolution: any = useCallback(
        (evolutionChain: any, level: number, evolutionData: any) => {
            evolutionData.push({
                pokemon: {
                    ...evolutionChain.species,
                    url: evolutionChain.species.url.replace("pokemon-species", "pokemon"),
                },
                level,
            });

            for (const evolution of evolutionChain.evolves_to) {
                getRecursiveEvolution(evolution, level + 1, evolutionData);
            }
        },
        []
    );

    const getEvolutionData = useCallback(
        (evolutionChain: any) => {

            const evolutionData: any[] = [];
            getRecursiveEvolution(evolutionChain, 1, evolutionData);
            return evolutionData;
        },
        [getRecursiveEvolution]
    );

    const getPokemonInfo = useCallback(
        async (image: string) => {
            setLoading(true)
            try {
                const { data } = await axios.get(`${pokemonRoute}/${params.id}`);
                const { data: dataEncounters } = await axios.get(
                    data.location_area_encounters
                );
                const urlSpecie = data?.species.url
                const arrayUrlSpecie = urlSpecie.split('/')
                const idPokemonSpecie = arrayUrlSpecie[arrayUrlSpecie.length - 2]


                const dataMax = await axios.get(`${pokemonRoute}/${idPokemonSpecie}`);

                const {
                    data: {
                        evolution_chain: { url: evolutionURL },
                    },
                } = await axios.get(`${pokemonSpeciesRoute}/${idPokemonSpecie}`);


                const { data: evolutionData } = await axios.get(evolutionURL);

                const encounters: string[] = [];
                dataEncounters.forEach((encounter: any) => {
                    encounters.push(
                        encounter.location_area.name.toUpperCase().split("-").join(" ")
                    );
                });



                const pokemonAbilities: { abilities: string[]; moves: string[] } = {
                    abilities: data.abilities.map(
                        ({ ability }: { ability: { name: string } }) => ability.name
                    ),

                    moves: data.moves.map(
                        ({ move }: { move: { name: string } }) => move.name
                    ),
                };



                const evolution = getEvolutionData(evolutionData.chain);


                const evolutionLevel = evolution.find(
                    ({ pokemon }) => pokemon.name === dataMax.data.species.name
                ).level;

                dispatch(setCurrentPokemon({
                    id: data.id,
                    name: data.name,
                    types: data.types.map(
                        ({ type: { name } }: { type: { name: string } }) => name
                    ),
                    image,
                    stats: data.stats.map(
                        ({
                            stat,
                            base_stat,
                        }: {
                            stat: { name: string };
                            base_stat: number;
                        }) => ({
                            name: stat.name,
                            value: base_stat,
                        })
                    ),
                    encounters,
                    evolutionLevel,
                    evolution,
                    pokemonAbilities,
                })
                )
            } catch (error) {
                if (error) {
                    toast.error('Missing Pokemon', {
                        //className: 'toast ',
                        style: {
                            border: 'transparente',
                            padding: '0.9rem 1rem',
                            color: 'white',
                            backgroundColor: '#333333',
                            fontSize: '1rem',
                            fontFamily: 'roboto',
                            textTransform: 'capitalize',
                        },
                        iconTheme: {
                            primary: '#A70408',
                            secondary: 'white',
                        },
                    })
                }

            }
            setLoading(false)

        },
        [getEvolutionData, params.id, dispatch]
    );

    useEffect(() => {
        try {

            const imageElemet = document.createElement("img");
            // @ts-ignore
            imageElemet.src = images[params.id];
            if (!imageElemet.src) {
                // @ts-ignore
                imageElemet.src = defaultImages[params.id];
            }

            const options = {
                pixels: 10000,
                distance: 1,
                splitPower: 10,
                colorValidator: (red: number, green: number, blue: number, alpha = 255) =>
                    alpha > 250,
                saturationDistance: 0.2,
                lightnessDistance: 0.2,
                hueDistance: 0.083333333,
            };

            const getColor = async () => {
                const color = await extractColors(imageElemet.src, options);
                const root = document.documentElement;
                root.style.setProperty("--accent-color", color[0].hex.split('"')[0]);
            };
            getColor();

            getPokemonInfo(imageElemet.src);
        } catch (error) {
            console.log(error);

        }
    }, [params, getPokemonInfo]);

    return <div className=" grid grid-rows-[92vh_8vh] md:grid-rows-[86vh_10vh] lg:grid-rows-[82vh_10vh] xl:grid-rows-[80vh_10vh] grid-cols-1 h-full w-full relative  max-md:row-star-1 max-md:row-end-1">

        {

            currentPokemonTab === pokemonTabs.description && <>
                <Loading loading={loading} />
                <Description />
            </>
        }
        {
            currentPokemonTab === pokemonTabs.evolution && <Evolution />
        }
        {
            currentPokemonTab === pokemonTabs.moves && <CapableMoves />
        }
        {
            currentPokemonTab === pokemonTabs.locations && <Location />
        }
        <Footer />





    </div>;
}

export default Wrapper(Pokemon);