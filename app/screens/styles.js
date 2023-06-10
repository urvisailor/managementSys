import { StyleSheet } from 'react-native'
import color from '../constants/color'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.WHITE
    },
    upperHalf: {
        flex: 0.7,
    },
    lowerHalf: {
        flex: 0.3,
    },
    inputContainer: {
        marginTop: 200,
        marginHorizontal: 25,
        marginBottom: 10
    },
    secInput: {
        marginTop: 20
    },
    loginButton: {
        marginTop: 30
    },
    circle: {
        backgroundColor: color.GREEN,
        marginTop: 200,
        padding: 10,
        width: 120,
        height: 120,
        alignSelf: 'center',
        borderRadius: 60
    },
    circleText: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 30,
        fontWeight: '500',
        color: color.BLACK
    },
    header: {
        backgroundColor: color.SILVER,
        padding: 20,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16
    },
    userCircle: {
        backgroundColor: color.SILVER,
        marginTop: 130,
        padding: 10,
        width: 130,
        height: 130,
        alignSelf: 'center',
        borderRadius: 70
    },
    userLogo: {
        textAlign: 'center',
        marginTop: 25,
        fontSize: 20,
    },
    userName: {
        textAlign: 'center',
        marginTop: 10,
        color: color.BLACK
    },
    shiftBtn: {
        marginTop: 10
    },
    safeArea: {
        backgroundColor: color.SILVER
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        elevation: 4,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginBottom: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color:color.BLACK
    },
    email: {
        fontSize: 14,
        marginBottom: 4,
        color:color.BLACK
    },
    gender: {
        fontSize: 14,
        marginBottom: 4,
        color:color.BLACK
    },
    status: {
        fontSize: 14,
        marginBottom: 4,
        color:color.BLACK
    },
    addButton: {
        marginTop: 16,
        alignSelf: 'center',
      },
      buttonText: {
        marginLeft: 8,
        color: color.WHITE,
        fontWeight: 'bold',
      },
})
export default styles