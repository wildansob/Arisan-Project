import React, {useEffect, useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import OptionsMenu from 'react-native-options-menu';

//import icon
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';

const CardCariArisan = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (search.length > 0) {
      dispatch({type: 'SEARCH_ID', payload: search.toLowerCase()});
    } else {
      dispatch({type: 'SEARCH_ID', payload: ''});
    }
  }, [search]);

  return (
    <View style={styles.card}>
      <View
        style={{
          flex: 1,
          paddingLeft: moderateScale(4),
          alignItems: 'flex-start',
          marginRight: moderateScale(8),
        }}>
        <View style={styles.searchContainer}>
          <Feather name="search" color={COLOR.Primary} size={20} />
          <TextInput
            onChangeText={text => setSearch(text)}
            placeholder="Cari ID Arisan"
            style={styles.search}
            value={search}
            placeholderTextColor={COLOR.light}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: moderateScale(10),
    backgroundColor: COLOR.White,
    marginHorizontal: moderateScale(22),
    paddingVertical: moderateScale(16),
    paddingHorizontal: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(56),
    borderRadius: 16,
    flexDirection: 'row',
    elevation: 1,
  },

  search: {
    flex: 1,
    fontSize: 13,
    color: COLOR.light,
    borderRadius: 10,
    height: moderateScale(40),
    paddingBottom: moderateScale(9),
    marginHorizontal: moderateScale(2),
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: COLOR.White,
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(5),
    borderColor: COLOR.Primary,
    color: COLOR.light,
    borderWidth: 1,
    borderRadius: 10,
    height: moderateScale(38),
    alignItems: 'center',
  },
  searchList: {
    flexDirection: 'row',
    backgroundColor: COLOR.White,
    borderColor: COLOR.Primary,
    paddingHorizontal: moderateScale(7),
    color: COLOR.light,
    borderWidth: 1,
    borderRadius: 10,
    height: moderateScale(36),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CardCariArisan;
