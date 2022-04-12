import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import CardDetailArisan from '../../Component/CardDetailArisan';
import ButtonPrimary from '../../Component/Button';
import {moderateScale} from 'react-native-size-matters';
import {navigate} from '../../Helper/navigate';
import {useSelector, useDispatch} from 'react-redux';

const DetailArisan = () => {

  const dispatch = useDispatch();
  const {dataDetailArisan} = useSelector(state => state.DetailArisanReducer);

  const updatePeserta = () => {
    dispatch(
      {
        type: 'PARTICIPANTID_REMOVE',
      },
      navigate('Tambah Peserta'),
    );
  };
  const kocokArisan = () => {
    dispatch(
      {
        type: 'GET_HOME',
      },
      navigate('Kocok Arisan'),
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View>
          <CardDetailArisan
            onPress2={kocokArisan}
            onPress1={() => {
              navigate('History Arisan');
            }}
            onPressModal2={() => {
              navigate('Detail Arisan');
            }}
            title={dataDetailArisan.arisan?.title}
            dues={dataDetailArisan.arisan?.dues}
            balance={dataDetailArisan.arisan?.balance}
            participant={dataDetailArisan.arisan?.totalParticipant}
            date={dataDetailArisan.arisan?.lotteryDate}
            paymentPeriode={dataDetailArisan.arisan?.paymentPeriod}
            idArisan={dataDetailArisan.arisan?.idArisan}
            status={dataDetailArisan.arisan?.status}
          />
        </View>
      </ScrollView>
      {/* footer */}
      <View style={styles.footerContainer} />
      <View style={styles.footerButton}>
        <ButtonPrimary
          onPress={updatePeserta}
          borderRadius={40}
          paddingHorizontal={22}
          text="+ Tambah Peserta"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  footerContainer: {flex: 1},
  footerButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: moderateScale(24),
  },
});

export default DetailArisan;
