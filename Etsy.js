import React from 'react'
import { TextInput, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import CategoriesList from './CategoriesList'

const Etsy = () => (
<ScrollView style={styles.etsy} showsVerticalScrollIndicator={false}>
<TextInput style={styles.search_for_anything} placeholder={'Search For Anything'} />
<Text style={styles.title}>{item.title}</Text>
<CategoriesList item={item.categories_list}/>
</ScrollView>
)

export default Etsy;

const styles = StyleSheet.create({
    'search_for_anything': {
        'fontSize': 15,
        'fontWeight': '400',
        'padding': 10,
        'margin': 5,
        'backgroundColor': 'whitesmoke',
        'borderWidth': 1
    },
    'title': {
        'color': '#858080',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});