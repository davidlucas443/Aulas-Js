import { StyleSheet, Platform } from "react-native";  
import { STATUS_BAR_HEIGHT,TEXT_COLOR_DAR,TEXT_COLOR_DISABLED,TEXT_COLOR_MEDIUM, PRIMARY_COLOR, BACKGROUND_COLOR_LIGHT } from "../constants/style";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR_LIGHT,
        paddingTop: STATUS_BAR_HEIGHT + 20,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 700,
        textAlign: 'center',
        marginVertical: 20,
        color: TEXT_COLOR_DAR,
    },
    loader,listEmpityContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        flex: 1,
        marginHorizontal: 15,
    },
    emptyText: {
        fontSize: 18,
        color: TEXT_COLOR_DISABLED,
    },
    addButton: {
        backgroundColor: PRIMARY_COLOR,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        right: 30,
        elevation: 6,
    },

});
