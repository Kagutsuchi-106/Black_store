import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import shoppingBag from '../assets/images/shoppingBag.png';

export default function Products({
    slides = [{ id: '1' }, { id: '2' }, { id: '3' }],
}) {
    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={240}
                height={185}
                autoPlay={true}
                data={slides}
                renderItem={({ item, index }) => (
                    <LinearGradient
                        key={index}
                        colors={['#6f6f6f', '#474749']} // Цвета градиента
                        style={styles.card}
                    >
                        <Image
                            source={shoppingBag}
                            style={{
                                height: 110,
                                width: 86,
                            }}
                        />
                    </LinearGradient>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 185,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 10,
        paddingBottom: 10,
    },
});
