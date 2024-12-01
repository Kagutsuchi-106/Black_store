import colors from '@/assets/colors';
import React, { useState } from 'react';
import searchIcon from '@/assets/images/searchIcon.png';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    TextInput,
    Image,
} from 'react-native';

export default function BurgerMenu() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <View style={styles.container}>
            {/* Кнопка меню-бургер */}
            <TouchableOpacity style={styles.burgerButton} onPress={toggleMenu}>
                <View style={styles.line} />
                <View style={styles.line} />
                <View style={styles.line} />
            </TouchableOpacity>

            {/* Меню */}
            <Modal
                visible={menuVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={toggleMenu}
            >
                <TouchableOpacity style={styles.overlay} onPress={toggleMenu} />
                <View style={styles.menuContainer}>
                    <TouchableOpacity>
                        <Text style={styles.menuItem}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.menuItem}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.menuItem}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.menuItem}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <TextInput style={styles.searchInput} placeholder="Search" />
            <TouchableOpacity style={styles.searchButton}>
                <Image source={searchIcon} style={{ width: 25, height: 25 }} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 5,
    },
    burgerButton: {
        paddingRight: 10,
    },
    line: {
        width: 30,
        height: 3,
        backgroundColor: colors.menuBurger,
        marginVertical: 3,
        borderRadius: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: colors.overlay,
    },
    menuContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 200,
        height: '100%',
        backgroundColor: colors.menuBurgerBackground,
        padding: 16,
        alignItems: 'center',
    },
    menuItem: {
        fontSize: 18,
        marginVertical: 10,
        color: colors.secondaryText,
    },
    searchInput: {
        height: 41,
        width: '65%',
        backgroundColor: colors.menuBurger,
        borderRadius: 50,
        fontSize: 18,
        paddingHorizontal: 20,
        fontWeight: '400',
    },
    searchButton: {
        width: 50,
        height: 40,
        backgroundColor: colors.searchButton,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
