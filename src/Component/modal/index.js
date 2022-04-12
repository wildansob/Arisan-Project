import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import COLOR from '../../Config/color';
import {moderateScale} from 'react-native-size-matters';
import ButtonPrimary from '../Button';
import {DropdownComponent3} from '../DropDown';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const Modal1 = ({
  headerText,
  onPress,
  onPress2,
  textButton1,
  textButton2,
  konten1,
  konten2,
  konten3,
  konten4,
  isVisible,
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: heightPercentageToDP(12),
      backgroundColor: COLOR.White,
      borderRadius: 10,
      paddingBottom: moderateScale(20),
    },
    container2: {marginBottom: moderateScale(16)},
    HeaderWrap: {
      borderBottomWidth: 0.5,
      borderColor: COLOR.light,
      paddingBottom: moderateScale(16),
      paddingTop: moderateScale(20),
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor: COLOR.Primary,
    },
    Header: {
      color: COLOR.Black,
      fontSize: 22,
      alignSelf: 'center',
    },
    Text: {
      color: COLOR.Primary,
      marginBottom: moderateScale(6),
    },
    Text2: {
      color: COLOR.Black,
      fontSize: 16,
    },
  });
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.HeaderWrap}>
          <Text style={styles.Header}>{headerText}</Text>
        </View>

        <View
          style={{
            marginTop: moderateScale(26),
            marginHorizontal: moderateScale(20),
          }}>
          <View style={styles.container2}>
            <Text style={styles.Text}>Nama Arisan</Text>
            <Text style={styles.Text2}>{konten1}</Text>
          </View>

          <View style={styles.container2}>
            <Text style={styles.Text}>Jumlah Iuran Arisan</Text>
            <Text style={styles.Text2}>Rp.{konten2}</Text>
          </View>

          <View style={styles.container2}>
            <Text style={styles.Text}>Periode Pembayaran</Text>
            <Text style={styles.Text2}>{konten3}</Text>
          </View>

          <View style={styles.container2}>
            <Text style={styles.Text}>Periode Undian</Text>
            <Text style={styles.Text2}>{konten4}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              paddingLeft: moderateScale(14),
            }}>
            <ButtonPrimary
              onPress={onPress}
              text={textButton1}
              borderWidth={1}
              backgroundColor={COLOR.White}
              marginHorizontal={6}
            />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              paddingRight: moderateScale(14),
            }}>
            <ButtonPrimary
              onPress={onPress2}
              text={textButton2}
              marginHorizontal={6}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

//modal2
const Modal2 = ({
  headerText,
  onPress,
  onPress2,
  textButton1,
  textButton2,
  konten1,
  isVisible,
  headerFontSize = 22,
  marginVertical = 30,
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: heightPercentageToDP(marginVertical),
      backgroundColor: COLOR.White,
      borderRadius: 10,
      paddingBottom: moderateScale(20),
    },
    container2: {marginBottom: moderateScale(4)},
    HeaderWrap: {
      borderBottomWidth: 0.5,
      borderColor: COLOR.light,
      paddingBottom: moderateScale(16),
      paddingTop: moderateScale(20),
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor: COLOR.Primary,
    },
    Header: {
      color: COLOR.Black,
      fontSize: moderateScale(headerFontSize),
      alignSelf: 'center',
    },
    Text: {
      color: COLOR.Black,
      alignSelf: 'center',
    },
  });
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.HeaderWrap}>
          <Text style={styles.Header}>{headerText}</Text>
        </View>
        <View
          style={{
            marginTop: moderateScale(26),
            marginHorizontal: moderateScale(20),
          }}>
          <View style={styles.container2}>
            <Text style={styles.Text}>{konten1}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              paddingLeft: moderateScale(14),
            }}>
            <ButtonPrimary
              onPress={onPress}
              text={textButton1}
              borderWidth={1}
              backgroundColor={COLOR.White}
              marginHorizontal={6}
            />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              paddingRight: moderateScale(14),
            }}>
            <ButtonPrimary
              onPress={onPress2}
              text={textButton2}
              marginHorizontal={6}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

//modal3
const Modal3 = ({
  headerText,
  onPress,
  onPress2,
  onPressDelete,
  textButton1,
  textButton2,
  noWatsapp,
  IuranBelumLunas,
  isVisible,
  headerFontSize = 20,
  marginVertical = 18,
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: heightPercentageToDP(marginVertical),
      backgroundColor: COLOR.White,
      borderRadius: 10,
      paddingBottom: moderateScale(20),
    },
    container2: {marginBottom: moderateScale(16), alignSelf: 'flex-start'},
    HeaderWrap: {
      borderBottomWidth: 0.5,
      borderColor: COLOR.light,
      paddingBottom: moderateScale(16),
      paddingTop: moderateScale(20),
      paddingHorizontal: moderateScale(20),
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor: COLOR.White,
    },
    Header: {
      color: COLOR.Black,
      fontSize: moderateScale(headerFontSize),
      alignSelf: 'flex-start',
    },
    Text: {
      color: COLOR.Primary,
      alignSelf: 'center',
    },
    Text2: {
      color: COLOR.Black,
      alignSelf: 'flex-start',
      marginTop: moderateScale(8),
    },
  });
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.HeaderWrap}>
          <Text style={styles.Header}>{headerText}</Text>
        </View>
        <View
          style={{
            marginTop: moderateScale(16),
            marginHorizontal: moderateScale(20),
          }}>
          <View style={styles.container2}>
            <Text style={styles.Text}>Nomor Watsapp</Text>
            <Text style={styles.Text2}>{noWatsapp}</Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.Text}>Jumlah Iuran yang Belum di Bayar</Text>
            <Text style={styles.Text2}>{IuranBelumLunas}</Text>
          </View>

          {/* dropDown Modal */}
          <View>
            <View style={{alignSelf: 'flex-start'}}>
              <Text style={styles.Text}>Status Arisan</Text>
            </View>
            <DropdownComponent3 />
          </View>
        </View>
        <View>
          <ButtonPrimary text="Hapus Peserta" onPress={onPressDelete} />
        </View>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              paddingLeft: moderateScale(14),
            }}>
            <ButtonPrimary
              onPress={onPress}
              text={textButton1}
              borderWidth={1}
              backgroundColor={COLOR.White}
              marginHorizontal={6}
            />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              paddingRight: moderateScale(14),
            }}>
            <ButtonPrimary
              onPress={onPress2}
              text={textButton2}
              marginHorizontal={6}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export {Modal1, Modal2, Modal3};
