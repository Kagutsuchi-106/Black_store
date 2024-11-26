import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '@/assets/colors';
import React from 'react';
import Header from '@/components/Header';
import Products from '@/components/Products';
import markerIcon from '../assets/images/markerIcon.png';

const index = () => {
    return (
        <View style={styles.wrapper}>
            <Header />
            <View
                style={{
                    paddingHorizontal: 20,
                    width: '100%',
                }}
            >
                <View style={styles.locationSection}>
                    <Image source={markerIcon} style={styles.locationIcon} />
                    <Text style={styles.locationText}>Your Address</Text>
                </View>
            </View>

            <Products />
        </View>
    );
};

export default index;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.primaryBackground,
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 36,
    },
    locationSection: {
        marginVertical: 10,
        paddingHorizontal: 5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    locationIcon: {
        width: 33,
        height: 50,
        resizeMode: 'contain',
    },
    locationText: {
        marginLeft: 15,
        fontSize: 18,
        color: '#08ac63',
    },
});
