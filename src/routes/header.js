import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Header({navigation, title}) {
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <Icon name="menu-fold" size={28} onPress={openMenu} style={styles.icon} />
            <View>
                <Text style = {styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height/10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c2e9ff',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#333",
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
    }

});
