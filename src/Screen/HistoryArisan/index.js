import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import {useSelector, useDispatch} from 'react-redux';

const HistoryArisan = () => {
  const dispatch = useDispatch();

  const {historyArisan} = useSelector(state => state.DetailArisanReducer);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    dispatch({type: 'HISTORY_ARISAN'});
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(date + '/' + month + '/' + year);
  }, []);

  return (
    <>
      {historyArisan.length > 0 ? (
        historyArisan.map(data => {
          return (
            <View key={data.periode}>
              <View style={styles.card2}>
                <View style={styles.container}>
                  <View style={styles.wrapperKiri}>
                    <Text style={{fontWeight: 'bold', color: COLOR.Black}}>
                      {' '}
                      Pemenang Arisan
                    </Text>
                  </View>
                  <View style={styles.wrapperKanan}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        marginLeft: moderateScale(4),
                        color: COLOR.Black,
                      }}>
                      Periode Ke {data.periode}
                    </Text>
                  </View>
                </View>
                <View
                  style={{flexDirection: 'row', marginLeft: moderateScale(6)}}>
                  <View style={styles.wrapperKiri}>
                    <Text style={{color: 'black'}}>
                      {data.Participant.user.firstName}{' '}
                      {data.Participant.user.lastName}
                    </Text>
                  </View>
                  <View style={styles.wrapperKanan}>
                    <Text style={{color: 'black'}}>Rp.{data.balance}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })
      ) : (
        <View style={{marginTop: moderateScale(8)}}>
          <View style={styles.card2}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <View style={styles.container}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>
                    {currentDate}{' '}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{color: 'black'}}>
                Belum Ada Pemenang Pada Periode Ini
              </Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default HistoryArisan;

const styles = StyleSheet.create({
  card2: {
    paddingHorizontal: moderateScale(18),
    marginTop: moderateScale(10),
    backgroundColor: COLOR.White,
    paddingVertical: moderateScale(20),
    borderRadius: 16,
    elevation: 1,
  },
  container: {
    borderBottomColor: COLOR.light,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    paddingBottom: moderateScale(10),
    marginBottom: moderateScale(12),
  },
  wrapperKanan: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: moderateScale(10),
  },
  wrapperKiri: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
