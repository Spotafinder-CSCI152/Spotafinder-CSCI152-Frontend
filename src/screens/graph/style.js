import { StyleSheet } from 'react-native';
import { Window_Width, Window_Height } from '../../utils/constants';
import { BorderlessButton } from 'react-native-gesture-handler';

export default styles = StyleSheet.create({
    background_size: {
        width: Window_Width,
        height: Window_Height,
        alignItems: 'center'
    },
    profile_size: {
        width: Window_Width * 0.3,
        height: Window_Height * 0.15,
        marginTop: Window_Height * 0.1,
        marginBottom: Window_Height * 0.03,
        borderRadius: 10,
        borderWidth: Window_Width * 0.002
    },
    slider_size: {
        width: Window_Width * 0.9,
        height: Window_Height * 0.3,
        overflow: "hidden",
        borderRadius: Window_Width * 0.05,
        borderWidth: Window_Width * 0.002
    },
    container: {
        width: Window_Width * 0.8,
        height: Window_Height * 0.4,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
        
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button_size: {
        width: Window_Width * 0.3,
        height: Window_Height * 0.15,
        overflow: "hidden",
        borderRadius: Window_Width * 0.04,
    }
});