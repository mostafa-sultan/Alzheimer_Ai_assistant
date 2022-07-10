import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getApiData, addToState, removeFromState, removeState } from '../../redux/actions';

const Reduxscreen = () => {
    const state = useSelector(state => state.moviesReducer);
    const allState = useSelector(state => state);
    // const { movies, favorites } = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();


    
    const getData = () => {
        dispatch(getApiData()); 
    };
    const addData = (movie) => {
        dispatch(addToState(movie));
    };
    const removeRecord = (movie) => {
        dispatch(removeFromState(movie));
    };
    const removState = () => {
        dispatch(removeState());
    };
    const checkData = (movie) => {
        if (state.favorites.filter(item => item.id === movie.id).length > 0) {
            return true;
        }

        return false;
    };
    const printState = () => {
        console.log(state);
        // console.log(allState);
    };
    return (
        <View>
            <TouchableOpacity onPress={() => getData()}>
                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', marginBottom: 20 }}>
                    LOAD DATA FROM API TO GLOBAL STATE
                </Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => addData(state.movies[0])}>
                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', marginBottom: 20 }}>
                    Add data to global state
                </Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => removeRecord(state.movies[0])}>
                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', marginBottom: 20 }}>
                    delete data from global state
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => removState()}>
                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', marginBottom: 20 }}>
                    delete global state
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => printState()}>
                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', marginBottom: 20 }}>
                    check data in global
                </Text>
            </TouchableOpacity>
        </View>
    );
}
 
export default Reduxscreen;
