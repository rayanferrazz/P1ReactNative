import { Platform, StyleSheet } from 'react-native';

export const styles2 = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        marginTop: Platform.OS === 'ios' ? '10%' : '5%',
        marginBottom: Platform.OS === 'ios' ? '4%' : '4%',
        display: 'flex',
        flexDirection: 'column',
        width: '64%',
        height: '13.5%'
    },
    signUpContainer: {
        flexDirection: 'row',
        marginTop: '1%'
    },
    signUpText: {
        color: '#C4C4C4',
        paddingRight: 8,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    signUpText2: {
        color: '#C4C4C4',
        padding: 2,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    facebookContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%',
        backgroundColor: '#399FFF',
        width: '80%',
        height: 45,
        justifyContent: 'center',
        borderRadius: 15
    },
    facebookText: {
        color: '#FFF',
        paddingLeft: 8,
        fontSize: 16,
        fontWeight: 'bold'
    },
    divisor: {
        marginTop: '5%',
        marginBottom: '5%',
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
    input: {
        width: '80%',
        height: 42,
        margin: 3.5,
        padding: 9,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        fontSize: 15
    },
    termsContainer1: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10
    },
    termsText: {
        color: '#C4C4C4',
        fontSize: 16
    },
    termsButton: {
        color: '#007AEC',
        flexDirection: 'row',
        fontSize: 16
    },
    signUpButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '4%',
        backgroundColor: '#399FFF',
        width: '80%',
        height: 45,
        justifyContent: 'center',
        borderRadius: 15
    },
    signUpButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    finalDivisor: {
        marginTop: '5%',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    finalLine: {
        width: '100%',
        height: 12,
        backgroundColor: '#EFEDED'
    },
    loginContainer: {
        flexDirection: 'row',
        marginTop: 15
    },
    loginText: {
        paddingRight: 5
    },
    loginButton: {
        color: '#399FFF'
    }
});