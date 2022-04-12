import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Selamat from '../../Assets/Images/Selamat.jpg';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import FotoProfile from '../../Component/FotoProfile';
import COLOR from '../../Config/color';
import ButtonPrimary from '../../Component/Button';
import {Modal2} from '../../Component/modal';
import {navigate} from '../../Helper/navigate';
import {useSelector} from 'react-redux';

const PemenangArisan = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {pemenangArisan} = useSelector(state => state.DetailArisanReducer);
  return (
    <>
      <View>
        <FastImage
          style={styles.FastImage}
          source={Selamat}
          resizeMode={FastImage.resizeMode.stretch}>
          <View style={styles.container}>
            <View style={{marginBottom: moderateScale(12)}}>
              <Text style={{fontSize: 32, fontWeight: 'bold'}}>Selamat!</Text>
            </View>
            <View style={{marginBottom: moderateScale(12)}}>
              <FotoProfile source={pemenangArisan?.user.image} />
            </View>
            <View style={{marginBottom: moderateScale(8)}}>
              <Text style={{fontSize: 16}}>
                Pemenang Undian Periode ini Adalah
              </Text>
            </View>
            <View style={{marginBottom: moderateScale(12)}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {pemenangArisan?.user.firstName} {pemenangArisan?.user.lastName}
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 34, fontWeight: 'bold'}}>
                Rp.{pemenangArisan?.arisan.balance}
              </Text>
            </View>
          </View>
        </FastImage>
        {/* button */}
        <View style={styles.card2}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingLeft: moderateScale(14),
              }}>
              <ButtonPrimary
                text="Bagikan"
                fontSize={14}
                borderWidth={1}
                borderColor={COLOR.Primary}
                backgroundColor={COLOR.White}
                marginHorizontal={6}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingRight: moderateScale(14),
              }}>
              <ButtonPrimary
                onPress={() => {
                  setIsVisible(true);
                }}
                fontSize={14}
                text="Kembali"
                marginHorizontal={6}
              />
            </View>
          </View>
        </View>
        <Modal2
          isVisible={isVisible}
          marginVertical={32}
          headerFontSize={16}
          headerText="Selamat"
          konten1={
            <Text>
              Undian periode ke -{pemenangArisan.periode} sudah selesai, Apakah
              anda yakin Untuk Keluar
            </Text>
          }
          textButton1="Tidak"
          textButton2="Ya"
          onPress={() => {
            setIsVisible(false);
          }}
          onPress2={() => {
            navigate('List Arisan');
          }}
        />
      </View>
    </>
  );
};

export default PemenangArisan;

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginTop: moderateScale(30)},
  FastImage: {height: heightPercentageToDP(68), paddingTop: moderateScale(40)},
  card2: {
    backgroundColor: COLOR.White,
    paddingBottom: moderateScale(16),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    flexDirection: 'row',
    elevation: 1,
  },
});
