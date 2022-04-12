import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {CheckBox} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import COLOR from '../../Config/color';

const CheckBoxPeserta = ({dataKontak = []}) => {
  const dispatch = useDispatch();

  return dataKontak.map(data => {
    const [check1, setCheck1] = useState(false);
    const participantId = id => {
      setCheck1(true);
      dispatch({type: 'PARTICIPANTID', payload: id});
    };
    return (
      <View
        key={data.id}
        style={{
          flexDirection: 'row',
          paddingHorizontal: moderateScale(8),
        }}>
        <View style={styles.wrapperKiri}>
          <Text style={styles.text}>{data.name}</Text>
        </View>
        <View>
          <CheckBox
            center
            checked={check1}
            onPress={() => participantId(data.id)}
          />
        </View>
      </View>
    );
  });
};

export default CheckBoxPeserta;

const styles = StyleSheet.create({
  wrapperKiri: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: moderateScale(16),
  },
  text: {
    color: COLOR.Black,
  },
});
