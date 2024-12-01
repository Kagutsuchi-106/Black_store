import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { recentlyProducts } from '@/scripts/recentlyProducts'; // Импортируем массив
import shoppingBag from '../assets/images/shoppingBag.png';
import colors from '@/assets/colors';

export default function RecentlySeen () {
    interface RecentlyProduct {
        id: string;
        title: string;
        text: string;
        price: string;
    }

    const renderItem = ({ item }: { item: RecentlyProduct }) => {
        return (
            <View style={styles.item}>
                <LinearGradient
                    colors={['#6f6f6f', '#474749']}
                    style={styles.card}
                >
                    <Image
                        source={shoppingBag}
                        style={{ height: 50, width: 50 }}
                    />
                </LinearGradient>
                <View style={{ width: '45%', marginLeft: 10 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text
                        style={styles.text}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {item.text}
                    </Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#474749', '#343537']}
                style={styles.gradient}
            >
                <Text style={styles.header}>Recently Seen</Text>
                <View style={{width:'100%',
                    height:1,
                    backgroundColor:colors.defButtonBackgroundColor,
                }}/>
                <FlatList
                    data={recentlyProducts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </LinearGradient>
        </View>
    );
};

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
        flexDirection: 'row',
    },
    gradient: {
        width: '100%',
        height: 270,
        borderRadius: 25,
        paddingHorizontal: 12,
        borderColor:colors.defButtonBackgroundColor,
        borderWidth:2,
    },
    header: {
        fontSize: 18,
        color: colors.primaryText,
        paddingLeft: 10,
        marginVertical: 15,
    },
    title: {
        color: colors.primaryText,
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0.5,
        marginBottom: 3,
    },
    text: {
        color: colors.primaryText,
        fontSize: 11,
        marginBottom: 3,
        letterSpacing: 0.5,
    },
    price: {
        color: colors.secondaryText,
        fontSize: 16,
        marginBottom: 3,
        letterSpacing: 0.5,
    },
});

