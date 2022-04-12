import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import ButtonPrimary from '../../Component/Button';
import CardArisan from '../../Component/CardArisan';
import {CardBuatArisan, CardBuatArisan2} from '../../Component/CardBuatArisan';
import CardCariArisan from '../../Component/CardCariArisan';
import CardResultSearch from '../../Component/CardResultSearch';
import ImageNull from '../../Component/imageNull';

const SearchArisan = () => {
  const dispatch = useDispatch();
  const {dataArisan} = useSelector(state => state.homeReducer);
  const {searchId, dataResultSearch} = useSelector(
    state => state.searchReducer,
  );
  const [dataResult, setDataResult] = useState([]);

  useEffect(() => {
    if (searchId) {
      dispatch({type: 'SEARCH', payload: searchId});
    } else if (searchId === '') {
      setDataResult([]);
    }
  }, [searchId]);

  useEffect(() => {
    if (dataResultSearch) {
      setDataResult(dataResultSearch);
    }
  }, [dataResultSearch]);

  useEffect(() => {
    setDataResult([]);
  }, []);

  return (
    <View>
      <View>
        <CardCariArisan />
      </View>
      {/* konten */}
      {dataResult.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: 10}}>
          {dataResult.map((e, i) => (
            <CardResultSearch data={e} key={i} />
          ))}
        </ScrollView>
      ) : (
        <ImageNull />
      )}
    </View>
  );
};

export default SearchArisan;
