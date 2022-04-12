import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import ButtonPrimary from '../../Component/Button/index';
import COLOR from '../../Config/color';
import CardProfile from '../../Component/CardProfile';
import {navigate} from '../../Helper/navigate';
import {Modal2} from '../../Component/modal';
import FotoProfile from '../../Component/FotoProfile';
import {useDispatch, useSelector} from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);
  const {dataProfile} = useSelector(state => state.loginReducer);

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <FotoProfile source={dataProfile.image} />
        <View style={{marginTop: moderateScale(12)}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: moderateScale(24),
              color: COLOR.Black,
            }}>
            {dataProfile.firstName} {dataProfile.lastName}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: moderateScale(12)}}>
          <Text style={{color: 'black'}}>{dataProfile.phoneNumber}</Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 10,
              marginHorizontal: moderateScale(10),
            }}>
            .
          </Text>
          <Text style={{color: 'black'}}>{dataProfile.email}</Text>
        </View>
      </View>
      <CardProfile
        onPress={() => {
          navigate('Edit Profile');
        }}
        onPress2={() => {
          navigate('Ganti Password');
        }}
      />

      <ButtonPrimary
        onPress={() => {
          setIsVisible(true);
        }}
        color={COLOR.White}
        backgroundColor={COLOR.red}
        borderColor={COLOR.red}
        text="Log Out"
      />

      {/* modal */}
      <Modal2
        isVisible={isVisible}
        headerText="Keluar"
        konten1="Apakah kamu yakin ingin keluar?"
        textButton1="Tidak"
        textButton2="Ya"
        onPress={() => setIsVisible(false)}
        onPress2={() => {
          dispatch({type: 'LOGOUT'});
        }}
      />
    </SafeAreaView>
  );
};

export default Profile;
