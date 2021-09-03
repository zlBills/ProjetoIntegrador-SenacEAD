/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Box, Heading, AspectRatio, Text, Center, Stack, NativeBaseProvider } from "native-base";
import FastImage from 'react-native-fast-image';

export const Example = () => {
    return (
        <Center bg="dark.400" padding={5} >
            <Box width={72} shadow={1} _light={{ backgroundColor: "gray.50" }} borderRadius={5} _dark={{ backgroundColor: "gray.700" }} >
                <Box margin={5} borderBottomWidth={1}>
                    <Box>
                        <AspectRatio ratio={16 / 9} >
                            <Center>
                                <FastImage height={150} borderRadius={10} width={250} source={require('../image/cerbero.jpg')} alt="image" />
                            </Center>
                        </AspectRatio>
                    </Box>
                    <Stack p={4} space={2}>
                        <Stack space={2}>
                            <Heading size="md" ml={-1}>
                                Cérbero
                            </Heading>

                        </Stack>
                        <Text lineHeight={5} fontWeight={200}>
                            Cérbero, era um monstruoso cão de três cabeças que guardava a entrada do mundo inferior, o reino subterrâneo dos mortos, deixando as almas entrarem, mas controlava a saída e despedaçava os mortais que por lá se aventurassem.
                        </Text>
                    </Stack>
                </Box>

                <Box margin={5} borderBottomWidth={1}>
                    <Box>
                        <AspectRatio ratio={16 / 9} >
                            <Center>
                                <FastImage height={150} borderRadius={10} width={250} source={require('../image/orcs.jpg')} alt="image" />
                            </Center>
                        </AspectRatio>
                    </Box>
                    <Stack p={4} space={2}>
                        <Stack space={2}>
                            <Heading size="md" ml={-1}>
                                Orcs
                            </Heading>

                        </Stack>
                        <Text lineHeight={5} fontWeight={200}>
                            Criaturas humanóides feias, geralmente menor do que os Humanos. Muitos têm braços compridos como macacos, e costas e pernas arqueadas. Seu sangue é negro e azedo, remanescências de corpos ressuscitados.
                        </Text>
                    </Stack>
                </Box>

                <Box margin={5} borderBottomWidth={1}>
                    <Box >
                        <AspectRatio ratio={16 / 9}>
                            <Center>
                                <FastImage height={150} borderRadius={10} width={250} source={require('../image/drifa.jpg')} alt="image" />
                            </Center>
                        </AspectRatio>
                    </Box>
                    <Stack p={4} space={2}>
                        <Stack space={2}>
                            <Heading size="md" ml={-1}>
                                Drifa
                            </Heading>

                        </Stack>
                        <Text lineHeight={5} fontWeight={200}>
                            Drifa tinha a mesma idade de Pigmeu, porém era um pouco mais baixa, possuía olhos azuis e cabelo loiro liso solto que ia até o meio das costas, o maço de cabelo que formava a franja era puxado para trás e amarrado no topo de sua cabeça, vestia um vestido verde bem batido e empoeirado, que era grande demais para ela, nos pés, sapatos feitos de couro e em seu pescoço usava um colar com uma pedra azul em um formato triangular, colar esse deixado por sua mãe antes de ir para o que seria sua última batalha, assim era algo muito especial para ela.
                        </Text>
                    </Stack>
                </Box>

                <Box margin={5} borderBottomWidth={1}>
                    <Box >
                        <AspectRatio ratio={16 / 9}>
                            <Center>
                                <FastImage height={150} borderRadius={10} width={250} source={require('../image/pigmeu.jpg')} alt="image" />
                            </Center>
                        </AspectRatio>
                    </Box>
                    <Stack p={4} space={2}>
                        <Stack space={2}>
                            <Heading size="md" ml={-1}>
                                Pigmeu
                            </Heading>

                        </Stack>
                        <Text lineHeight={5} fontWeight={200}>
                            Pigmeu era muito forte, seu tronco e braços eram bem definidos, sua força, agilidade e habilidades com armas, surpreendiam todas as pessoas do vilarejo. Porém no seu nascimento, Pigmeu foi amaldiçoado por um demônio muito poderoso, tinha corpo de homem, mas sua cabeça, que tinha muitos pelos, orelhas pontudas, um focinho de porco e duas grandes presas, o transformaram em um monstro, além de que, suas pernas eram menores que o normal e eram muito peludas, no final delas, no lugar dos pés, pigmeu tinha cascos, o que o levou a ganhar o apelido de homem-javali. Por causa disso, teve uma infância difícil e seus amigos o julgavam assim como as outras famílias, mas apesar disso, Pigmeu nunca desrespeitou ou se revoltou contra as pessoas, ao contrário, era muito educado e sempre treinou muito desde criança com Krishna e sua mãe Thalia, hoje é reconhecido pelos outros moradores por ser o melhor guerreiro de sua geração.
                        </Text>
                    </Stack>
                </Box>

                <Box margin={5} borderBottomWidth={1}>
                    <Box >
                        <AspectRatio ratio={16 / 9}>
                            <Center>
                                <FastImage height={150} borderRadius={10} width={250} source={require('../image/nezha.jpg')} alt="image" />
                            </Center>
                        </AspectRatio>
                    </Box>
                    <Stack p={4} space={2}>
                        <Stack space={2}>
                            <Heading size="md" ml={-1}>
                                Nezha
                            </Heading>

                        </Stack>
                        <Text lineHeight={5} fontWeight={200}>
                            Nezha, é um ser divino que combateu com Son Goku na "Grande Guerra", seus poderes vão além de sua força. Por ser muito inteligente, Nezha foi escolhido como um dos generais dos céus. Com um cajado muito poderoso, o deus tem a responsabilidade de trazer a paz para a terra novamente.
                        </Text>
                    </Stack>
                </Box>

                <Box margin={5} borderBottomWidth={1}>
                    <Box >
                        <AspectRatio ratio={16 / 9}>
                            <Center>
                                <FastImage height={150} borderRadius={10} width={250} source={require('../image/goku.jpg')} alt="image" />
                            </Center>
                        </AspectRatio>
                    </Box>
                    <Stack p={4} space={2}>
                        <Stack space={2}>
                            <Heading size="md" ml={-1}>
                                Son Goku - Rei Macaco
                            </Heading>

                        </Stack>
                        <Text lineHeight={5} fontWeight={200}>
                            Son Goku é muito forte e veloz, pode se transformar em coisas diferentes como animais e objetos, mas quando se transforma em humano, não consegue esconder sua cauda. Também é um grande lutador chegando a bater de frente com os generais do céu, o que o tornou um grande amigo de Nezha. Cada um de seus pelos possui propriedades mágicas, que são capazes de darem origem a uma duplicata Rei Macaco, assim como várias armas, animais e outros objetos. Ele também é conhecido por comandar os ventos, águas, conjurar círculos protetores contra demônios e congelar humanos, demônios e deuses.
                        </Text>
                    </Stack>
                </Box>

                <Box margin={5} borderBottomWidth={1}>
                    <Box >
                        <AspectRatio ratio={16 / 9}>
                            <Center>
                                <FastImage height={150} borderRadius={10} width={250} source={require('../image/vale.jpg')} alt="image" />
                            </Center>
                        </AspectRatio>
                    </Box>
                    <Stack p={4} space={2}>
                        <Stack space={2}>
                            <Heading size="md" ml={-1}>
                                O Vale
                            </Heading>

                        </Stack>
                        <Text lineHeight={5} fontWeight={200}>
                            O vale é um lugar onde Nezha, Thalia e seus seguidores formaram seu assentamento. O vale era rodeado por elevações que pareciam montanhas, mas tinha ótimas terras para o plantio, uma grande cachoeira cortava o lugar e alguns animais que ali habitavam.
                        </Text>
                    </Stack>
                </Box>

                <Box margin={5} borderBottomWidth={1}>
                    <Box >
                        <AspectRatio ratio={16 / 9}>
                            <Center>
                                <FastImage height={150} borderRadius={10} width={250} source={require('../image/tenda.jpg')} alt="image" />
                            </Center>
                        </AspectRatio>
                    </Box>
                    <Stack p={4} space={2}>
                        <Stack space={2}>
                            <Heading size="md" ml={-1}>
                                O Condado
                            </Heading>

                        </Stack>
                        <Text lineHeight={5} fontWeight={200}>
                            Em algum lugar da China, um grupo de sobreviventes, tentava se restaurar em local que nunca havia tido civilização.As casas do vilarejo eram tendas, alguns pedaços de madeira em pé faziam a sustentação de uma espécie de lona que servia como telhado. Crianças cresciam felizes, os adolescentes, já recebiam lições sobre guerras e acontecimentos do passado, também faziam árduos treinamentos, pois sabiam que o mundo em que viviam, não era nem um pouco seguro.
                        </Text>
                    </Stack>
                </Box>

            </Box>
        </Center>

    );
};


class Mundo extends Component {
    render() {
        return (
            <NativeBaseProvider>
                <ScrollView style={{ flex: 1 }}>
                    <Example />
                </ScrollView>
            </NativeBaseProvider>
        );
    }
}

export default Mundo;
