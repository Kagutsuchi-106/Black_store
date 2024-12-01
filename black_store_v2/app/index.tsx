import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '@/assets/colors';
import React from 'react';
import Header from '@/components/Header';
import Products from '@/components/Products';
import CategorySelector from '@/components/CategorySelector';
import RecentlySeen from '@/components/RecentlySeen';
import BackGround from '@/assets/images/back.png';
import markerIcon from '@/assets/images/markerIcon.png';
import { LinearGradient } from 'expo-linear-gradient';

const index = () => {
  return (
    <View style={styles.wrapper}>
      {/* Повторяющийся фон */}
      <Image source={BackGround} style={styles.background} />
      <Header />
      <View style={{ paddingHorizontal: 20, width: '100%' }}>
        <View style={styles.locationSection}>
          <Image source={markerIcon} style={styles.locationIcon} />
          <Text style={styles.locationText}>Your Address</Text>
        </View>
      </View>
      <Products />
      <CategorySelector />
      <LinearGradient
        colors={['#474749', '#6f6f6f']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.newOffers}
      >
        <Text style={{ fontSize: 20, color: colors.secondaryText }}>
          New Offer
        </Text>
        <Text style={{ fontSize: 30, color: colors.secondaryText }}>%</Text>
      </LinearGradient>
      <RecentlySeen />
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
  newOffers: {
    width: '90%',
    height: 81,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 36,
    paddingHorizontal: 15,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'repeat', // Для повторяющегося фона
    opacity: 0.3,
  },
});
