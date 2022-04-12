import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import OptionsMenu from 'react-native-options-menu';

//import icon
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {navigate} from '../../Helper/navigate';

const CardSearch = ({disableEdit = false}) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleFilter = value => {
    dispatch({type: 'FILTERED_ARISAN', payload: value});
  };
  return (
    <View style={styles.card}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigate('Search Arisan');
        }}>
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
              editable={!disableEdit}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View
        style={{
          paddingHorizontal: moderateScale(3),
          alignItems: 'flex-end',
        }}>
        <OptionsMenu
          customButton={
            <View style={styles.searchList}>
              <MaterialIcons
                name="filter-list"
                color={COLOR.Primary}
                size={21}
              />
            </View>
          }
          destructiveIndex={1}
          options={['Nama Arisan A-Z', 'Nama Arisan Z-A', 'Anggota Terbanyak']}
          actions={[
            () => handleFilter('atoz'),
            () => handleFilter('ztoa'),
            () => handleFilter('anggota'),
          ]}
        />
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
export default CardSearch;
