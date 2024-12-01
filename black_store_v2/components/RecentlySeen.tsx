import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    Image,
} from 'react-native';
import colors from '@/assets/colors';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import shoppingBag from '../assets/images/shoppingBag.png';

const RecentlySeen = () => {
    const recentlyProducts = [
        {
            id: '1',
            title: 'Product',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minima dicta, quod incidunt corporis, ',
            price: '$000.00',
        },
        {
            id: '2',
            title: 'Product',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minima dicta, quod incidunt corporis, ',
            price: '$000.00',
        },
        {
            id: '3',
            title: 'Product',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minima dicta, quod incidunt corporis, ',
            price: '$000.00',
        },
        {
            id: '5',
            title: 'Product',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minima dicta, quod incidunt corporis, ',
            price: '$000.00',
        },
        {
            id: '6',
            title: 'Product',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minima dicta, quod incidunt corporis, ',
            price: '$000.00',
        },
        {
            id: '7',
            title: 'Product',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minima dicta, quod incidunt corporis, ',
            price: '$000.00',
        },
        {
            id: '8',
            title: 'Product',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minima dicta, quod suscipit accusantium doloremque adipisci enim itaque iure incidunt corporis, nemo voluptates, porro consequuntur veritatis voluptate reiciendis dignissimos nihil?',
            price: '$000.00',
        },
    ];
    interface RecentlyProduct {
        id: string;
        title: string;
        text: string;
        price: string;
    }

    const renderItem = ({ item } : { item: RecentlyProduct }) => {
        return (
            <View style={styles.item}>
                <LinearGradient
                    key={item.id}
                    colors={['#6f6f6f', '#474749']} // Цвета градиента
                    style={styles.card}
                >
                    <Image
                        source={shoppingBag}
                        style={{
                            height: 50,
                            width: 50,
                        }}
                    />
                </LinearGradient>
                <View style={{ width: '75%', marginLeft: 10 }}>
                    <Text
                        style={{
                            color: colors.primaryText,
                            fontSize: 18,
                            fontWeight: '500',
                            letterSpacing: 0.5,
                            marginBottom: 3,
                        }}
                    >
                        {item.title}
                    </Text>
                    <Text
                        style={{
                            color: colors.primaryText,
                            fontSize: 11,
                            marginBottom: 3,
                            letterSpacing: 0.5,
                            flexShrink: 1,
                        }}
                        numberOfLines={2} // Указываем максимальное количество строк
                        ellipsizeMode="tail" // Добавляет "..." в конце строки
                    >
                        {item.text}
                    </Text>

                    <Text
                        style={{
                            color: colors.secondaryText,
                            fontSize: 16,
                            marginBottom: 3,
                            letterSpacing: 0.5,
                        }}
                    >
                        {item.price}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#474749', '#343537']} // Цвета градиента
                style={{
                    width: '100%',
                    height: 270,
                    borderRadius: 25,
                    paddingHorizontal: 12,
                    // paddingTop:20
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        color: colors.primaryText,
                        paddingLeft: 10,
                        marginVertical: 15,
                    }}
                >
                    Recently Seen
                </Text>
                <View
                    style={{
                        height: 0.5,
                        width: '100%',
                        backgroundColor: colors.defButtonBackgroundColor,
                    }}
                />

                <View>
                    <FlatList
                        data={recentlyProducts} // Используем данные
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        style={{ height: 200 }}
                        // vertical
                        // contentContainerStyle={styles.listContainer}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </LinearGradient>
        </View>
    );
};

export default RecentlySeen;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 270,
        borderRadius: 25,
        marginTop: 8,
        justifyContent: 'center',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 150,
        height: 90,
        marginRight: 10,
    },
    item: {
        width: '100%',
        height: 87,
        margin: 10,
        marginBottom:3,
        // paddingHorizontal:20,
        flexDirection: 'row',
    },
});
