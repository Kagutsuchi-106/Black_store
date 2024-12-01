import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import React, { useState } from 'react';
import colors from '@/assets/colors';
import starIcon from '@/assets/images/starIcon.png';

const buttonsData = [
    { id: '1', isActive: false },
    { id: '2', isActive: false },
    { id: '3', isActive: false },
    { id: '5', isActive: false },
    { id: '6', isActive: false },
    { id: '7', isActive: false },
    { id: '8', isActive: false },
];
interface ButtonsData {
    id: string;
    isActive: boolean;
    
    
}


const CategorySelector = () => {
 const [activeId, setActiveId] = useState<string | null>(null);


    const renderItem = ({ item }: { item: ButtonsData }) => {
        return activeId === item.id ? (
            // Отображаем компонент вместо кнопки, если элемент активен
            <View style={styles.activeButton}>
                {' '}
                <Image
                    style={{
                        borderRadius: 50,
                        width: 35,
                        height: 35,
                        resizeMode: 'cover',
                    }}
                    source={starIcon}
                />
            </View>
        ) : (
            // Отображаем кнопку, если элемент не активен
            <TouchableOpacity
                style={styles.circleButton}
                onPress={() => setActiveId(item.id)} // Устанавливаем активный ID
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={buttonsData} // Используем данные
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                contentContainerStyle={styles.listContainer}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default CategorySelector;

const styles = StyleSheet.create({
    container: {
        height: 78,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 23,
    },

    listContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    circleButton: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: colors.defButtonBackgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    activeButton: {
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.activeButtonBackgroundColor,
        marginHorizontal: 5,
    },
});
