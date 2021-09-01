/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Box, Heading, Text, Center, Stack, NativeBaseProvider } from "native-base";

export const Example = () => {
    return (
        <Center bg="dark.400" padding={5} >
            <Box width={72} shadow={1} _light={{ backgroundColor: "gray.50" }} borderRadius={5} _dark={{ backgroundColor: "gray.700" }}>
                <Stack p={4} space={2}>
                    <Stack space={2}>
                        <Center>
                            <Heading size="md" ml={-1}>
                                Bem vindo ao The Knight - Official Wiki!
                            </Heading>
                        </Center>
                    </Stack>
                    <Text lineHeight={6} fontWeight={400}>
                        Oi eu sou o Glauco! (Espero que tenha lido na voz de Goku)
                        Meu amigo(cujo não consegui autorização para usar seu nome) e eu estamos criando um livro, não somos escritores, nem formados em línguas ou em qualquer coisa do tipo. Apenas gostamos muito de ler, de jogar videogame, ver séries e filmes. Com tantas influências, criamos uma imaginação muito grande, temos em nossas cabeças: personagens, lugares, batalhas, romances etc., então apenas decidimos começar a escrever. Por estar cursando jogos digitais, achei que seria legal criar um jogo com minha própria história. E por estar cursando informática para internet, decidi criar um site para compartilhar todo esse processo com vocês.
                        Durante a escola eu criei um personagem que tinha uma aparência, um tanto quanto peculiar, era parecido com um porco, daí veio o nome de "Pig" e como fui eu que criei ele é meu, logo "Pigmeu" (Por favor, ignore o fato de como surgiu o nome do personagem). Muitos anos se passaram e então eu dicidi começar a escrever uma história sobre ele, contei para meu amigo e ele gostou, ele deu algumas ideias que achei muito interessantes então autorizei ele a escrever também. Já somos adultos mas não nos julguem, isto é apenas um hobby (por enquanto...)!!
                    </Text>
                </Stack>
            </Box>
        </Center>
    );
};

class Sobre extends Component {


    render() {
        return (
            <ScrollView style={{ backgroundColor: 'grey' }}>
                <NativeBaseProvider>
                    <ScrollView>
                        <Example />
                    </ScrollView>
                </NativeBaseProvider>
            </ScrollView>
        );
    }
}

export default Sobre;
