import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import {useSelector} from 'react-redux';

const ButtonPrimary = ({
  onPress,
  icon = {active: false},
  text,
  type = 'Reguler',
  fontSize = 16,
  color = `${COLOR.Black}`,
  align = 'center',
  style = {},
  backgroundColor = `${COLOR.Primary}`,
  height = 43,
  borderRadius = 8,
  justifyContent = 'center',
  alignItems = 'center',
  marginTop = 24,
  marginBottom = 0,
  marginHorizontal = 20,
  borderColor = `${COLOR.Primary}`,
  borderWidth = 2,
  paddingHorizontal = 0,
  disabled,
}) => {
  const {isLoading} = useSelector(state => state.loginReducer);
  const styles = StyleSheet.create({
    btnPrimary: {
      backgroundColor: disabled ? 'grey' : backgroundColor,
      flexDirection: 'row',
      height: moderateScale(height),
      borderRadius,
      justifyContent,
      alignItems,
      marginTop: moderateScale(marginTop),
      marginBottom: moderateScale(marginBottom),
      marginHorizontal: moderateScale(marginHorizontal),
      borderColor: disabled ? 'grey' : borderColor,
      borderWidth: moderateScale(borderWidth),
      paddingHorizontal: moderateScale(paddingHorizontal),
      elevation: 1,
    },
    text: {
      fontFamily: `${type}`,
      fontSize: moderateScale(fontSize),
      color,
      textAlign: align,
      ...style,
    },
  });
  return (
    <TouchableOpacity
      style={styles.btnPrimary}
      onPress={onPress}
      disabled={disabled}>
      {isLoading === false ? (
        <Text style={styles.text}>
          {icon.active ? icon.content : null}
          {text}
        </Text>
      ) : (
        <ActivityIndicator size={'large'} color={'white'} />
      )}
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
