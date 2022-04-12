import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import CardDetailArisan from '../../Component/CardDetailArisan';
import ButtonPrimary from '../../Component/Button';
import {moderateScale} from 'react-native-size-matters';
import {navigate} from '../../Helper/navigate';
import {useSelector, useDispatch} from 'react-redux';

const DetailArisan = () => {
  useEffect(() => {
    dispatch({type: 'ARISAN_BY_ID'});
  }, []);

  const dispatch = useDispatch();
  const {arisanById} = useSelector(state => state.DetailArisanReducer);

  console.log(arisanById, 'mana ini');

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
            title={arisanById.title}
            dues={arisanById.dues}
            balance={arisanById.balance}
            participant={arisanById.totalParticipant}
            date={arisanById.lotteryDate}
            paymentPeriode={arisanById.paymentPeriod}
            idArisan={arisanById.idArisan}
            status={arisanById.status}
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
