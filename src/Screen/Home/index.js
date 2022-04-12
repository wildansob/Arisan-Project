import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonPrimary from '../../Component/Button';
import {MainHeader} from '../../Component/Header';
import {moderateScale} from 'react-native-size-matters';
import {navigate} from '../../Helper/navigate';
import ImageNull from '../../Component/imageNull';
import CardArisan from '../../Component/CardArisan';
import CardSaldo from '../../Component/CardSaldo';
import CardSearch from '../../Component/CardSearch';
import {useDispatch, useSelector} from 'react-redux';

const Home = props => {
  const {dataArisan} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'GET_PROFILE'});
    dispatch({type: 'GET_HOME'});
    dispatch({type: 'GET_KONTAK'});
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* header */}
      <View>
        <MainHeader text="Homepage" />
        <CardSaldo />
        <CardSearch disableEdit={true} />
      </View>
      {/* konten */}
      {dataArisan.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: 10}}>
          <CardArisan dataArisan={dataArisan} />
        </ScrollView>
      ) : (
        <ImageNull text="pilih tombol + untuk menambahkan arisan" />
      )}
      {/* footer */}
      <View style={styles.footerContainer} />
      <View style={styles.footerButton}>
        <ButtonPrimary
          onPress={() => {
            navigate('Buat Arisan');
          }}
          borderRadius={40}
          paddingHorizontal={22}
          text="+ Buat Arisan"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footerContainer: {flex: 1},
  footerButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: moderateScale(12),
  },
});

export default Home;
