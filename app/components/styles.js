import { StyleSheet} from 'react-native'
import color from '../constants/color'

const styles = StyleSheet.create({
    input:{
        borderWidth:0.5,
        padding:13,
        borderRadius:25,
        paddingLeft:20
    },
    button:{
        backgroundColor:color.GREEN,
        padding:13,
        borderRadius:25
    },
    buttonText:{
        color:color.BLACK,
        textAlign:'center',
        fontWeight:'bold'
    },
    loader:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default styles