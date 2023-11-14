import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        marginTop: Platform.OS === 'ios' ? '35%' : '22%',
        marginBottom: Platform.OS === 'ios' ? '12%' : '9%',
        display: 'flex',
        flexDirection: 'column',
        width: '55%',
        height: '11%'
    },
    input: {
        width: '80%',
        height: 42,
        margin: 6,
        padding: 9,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E0E0E0'
    },
    forgotContainer: {
        width: '90%',
        alignItems: 'flex-end',
        marginTop: 10,
        marginRight: '10%',
        marginBottom: '1%'
    },
    forgotText: {
        color: '#399FFF'
    },
    loginButton: {
        marginTop: '5%',
        backgroundColor: '#399FFF',
        width: '80%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    loginText: {
        color: '#FFF'
    },
    divisor: {
        marginTop: '6.5%',
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    divisorLine: {
        width: '37%',
        height: 2,
        backgroundColor: '#EFEDED'
    },
    facebookContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '8%'
    },
    facebookText: {
        color: '#399FFF',
        paddingLeft: 8
    },
    finalDivisor: {
        marginTop: '18%',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    finalLine: {
        width: '100%',
        height: 2,
        backgroundColor: '#EFEDED'
    },
    signUpContainer: {
        flexDirection: 'row',
        marginTop: '11%'
    },
    signUpText: {
        color: '#C4C4C4',
        paddingRight: 5
    },
    signUpButton: {
        color: '#399FFF'
    }
});