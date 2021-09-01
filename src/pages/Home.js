/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Box, Heading, Center, NativeBaseProvider, Stack, Button } from "native-base";



export const Example = (navigation) => {
    return (
        <Center bg="dark.400" padding={5} >
            <Box width={72} marginBottom={5} shadow={1} _light={{ backgroundColor: "gray.50" }} borderRadius={5} _dark={{ backgroundColor: "gray.700" }}>
                <Stack p={4} space={2}>
                    <Stack space={2}>
                        <Center>
                            <Heading size="xl" ml={-1}>
                                The Knight
                            </Heading>
                        </Center>
                    </Stack>
                    <Text lineHeight={5} fontWeight={200} >
                        Bem-Vindo ao aplicativo do livro The Knight
                    </Text>
                </Stack>
            </Box>

            <Box width={72} marginBottom={5} shadow={1} _light={{ backgroundColor: "gray.50" }} borderRadius={5} _dark={{ backgroundColor: "gray.700" }}>
                <Stack p={4} space={2}>
                    <Text lineHeight={5} fontWeight={200}>
                        The Knight é a história de Pigmeu e seus amigos, que juntos precisam restabelecer a paz do mundo. Hoje o mundo está dominado pelos demônios, que venceram a grande guerra com seu grandioso exército, deuses e humanos que ainda sobrevivem, tentam construir laços para criar novos guerreiros com a esperança de que seus sucessores consigam prosperar em paz.
                    </Text>
                </Stack>
                <Stack p={4} space={2}>
                    <Button size="sm" colorScheme="secondary" onPress={() => { navigation.navigate('Mundo'); }}>
                        Visitar Mundo!
                    </Button>
                </Stack>
            </Box>

            <Box width={72} shadow={1} marginBottom={5} _light={{ backgroundColor: "gray.50" }} borderRadius={5} _dark={{ backgroundColor: "gray.700" }}>
                <Stack p={4} space={2}>
                    <Text lineHeight={5} fontWeight={200}>
                        Visite o mundo de The Knight e conheça um pouco mais sobre os personagens e os lugares da história!
                    </Text>
                </Stack>
                <Stack p={4} space={2}>
                    <Button size="sm" colorScheme="secondary" onPress={() => { navigation.navigate('Mundo'); }}>
                        Ver mais...
                    </Button>
                </Stack>
            </Box>

        </Center>
    );
};

class Home extends Component {
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

export default Home;
